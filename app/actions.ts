"use server";

import { supabase } from "@/lib/supabase";

export async function submitWaitlist(formData: FormData) {
  const email = formData.get("email") as string;
  const note = formData.get("note") as string | null;

  if (!email) {
    return { error: "Email is required" };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address" };
  }

  try {
    // Check if email already exists
    const { data: existingData, error: checkError } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email.toLowerCase().trim())
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 is "not found" error, which is fine
      console.error("Error checking email:", checkError);
    }

    if (existingData) {
      return { 
        error: "This email is already registered. Please use a different email address." 
      };
    }

    // Insert new email
    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          email: email.toLowerCase().trim(),
          note: note ? note.trim() : null,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      
      // Check for duplicate key error (PostgreSQL unique constraint)
      if (error.code === "23505" || error.message.includes("duplicate key") || error.message.includes("unique constraint")) {
        return { 
          error: "This email is already registered. Please use a different email address." 
        };
      }
      
      if (error.message.includes("relation") && error.message.includes("does not exist")) {
        return { error: "Database table not found. Please run the SQL setup script in Supabase." };
      }
      if (error.message.includes("permission denied") || error.message.includes("policy")) {
        return { error: "Permission denied. Please check RLS policies in Supabase." };
      }
      return { error: `Failed to submit. Please try again.` };
    }

    return { success: true };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { error: "Something went wrong. Please try again." };
  }
}
