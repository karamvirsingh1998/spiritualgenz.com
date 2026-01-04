-- Fix duplicate email checking by adding SELECT policies
-- Run this in your Supabase SQL Editor

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anon select for duplicate check" ON waitlist;
DROP POLICY IF EXISTS "Allow public select for duplicate check" ON waitlist;

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

-- Verify UNIQUE constraint exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'waitlist_email_key' 
    AND conrelid = 'waitlist'::regclass
  ) THEN
    ALTER TABLE waitlist ADD CONSTRAINT waitlist_email_key UNIQUE (email);
  END IF;
END $$;
