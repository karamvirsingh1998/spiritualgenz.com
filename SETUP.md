# Quick Setup Guide

## Supabase Configuration

Your Supabase project URL: `https://jgwegvaivxqqpnfxmrln.supabase.co`

### Step 1: Create the Database Table

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/jgwegvaivxqqpnfxmrln
2. Click on "SQL Editor" in the left sidebar
3. Click "New query"
4. Copy and paste the contents of `supabase-setup.sql`
5. Click "Run" to execute the query

This will create:
- The `waitlist` table with columns: `id`, `email`, `note`, `created_at`
- An index on the email column
- Row Level Security policies

### Step 2: Get Your API Keys

1. In your Supabase dashboard, go to **Settings** → **API**
2. Find the following:
   - **Project URL**: `https://jgwegvaivxqqpnfxmrln.supabase.co` (already provided)
   - **anon/public key**: Copy this value (starts with `eyJ...`)

### Step 3: Create Environment File

Create a `.env.local` file in the project root:

```bash
SUPABASE_URL=https://jgwegvaivxqqpnfxmrln.supabase.co
SUPABASE_ANON_KEY=paste_your_anon_key_here
```

### Step 4: Test the Setup

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000
3. Fill out the waitlist form
4. Check your Supabase dashboard → Table Editor → `waitlist` table to see the submission

## Troubleshooting

- **"Failed to submit" error**: Check that your `SUPABASE_ANON_KEY` is correct and the table exists
- **RLS policy errors**: Make sure you ran the complete SQL script including the policy creation
- **Connection errors**: Verify your `SUPABASE_URL` is correct and includes `https://`
