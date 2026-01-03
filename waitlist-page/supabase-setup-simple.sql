-- Simple setup without RLS (for quick testing)
-- Create waitlist table for storing email submissions
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Disable RLS for now (you can enable it later with proper policies)
ALTER TABLE waitlist DISABLE ROW LEVEL SECURITY;
