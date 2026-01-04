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
    const normalizedEmail = email.toLowerCase().trim();
    
    // Check if email already exists - use count for better RLS compatibility
    const { count, error: checkError } = await supabase
      .from("waitlist")
      .select("email", { count: "exact", head: true })
      .eq("email", normalizedEmail);

    if (checkError) {
      console.error("Error checking email:", checkError);
      // If we can't check, still try to insert - database constraint will catch it
    }

    if (count && count > 0) {
      return { 
        error: "This email is already registered. Please use a different email address." 
      };
    }

    // Insert new email
    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          email: normalizedEmail,
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
