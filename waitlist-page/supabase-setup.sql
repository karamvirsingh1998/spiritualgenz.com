-- Create waitlist table for storing email submissions
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups (optional but recommended)
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security (RLS) - optional but recommended
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts (for the waitlist form)
-- This allows anyone to insert, but you can restrict it further if needed
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Also allow anon role (unauthenticated users)
CREATE POLICY "Allow anon inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anon role to check if email exists (for duplicate checking)
CREATE POLICY "Allow anon select for duplicate check" ON waitlist
  FOR SELECT
  TO anon
  USING (true);

-- Also allow public role to check emails
CREATE POLICY "Allow public select for duplicate check" ON waitlist
  FOR SELECT
  TO public
  USING (true);

-- Optional: Create a policy for service role to read all records
-- (You'll need to use service_role key for this, not anon key)
CREATE POLICY "Allow service role read" ON waitlist
  FOR SELECT
  TO service_role
  USING (true);
