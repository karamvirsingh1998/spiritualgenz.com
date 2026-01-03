import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("Missing SUPABASE_URL environment variable. Please create a .env.local file with your Supabase URL.");
}

if (!supabaseAnonKey) {
  throw new Error("Missing SUPABASE_ANON_KEY environment variable. Please add your Supabase anon key to .env.local");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
