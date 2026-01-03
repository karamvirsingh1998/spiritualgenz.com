// Script to create the waitlist table in Supabase
// This uses the Supabase REST API

const SUPABASE_URL = 'https://jgwegvaivxqqpnfxmrln.supabase.co';
const SUPABASE_KEY = 'sb_publishable_XPWwZzW-Eh4VDl8mLnNqFQ_37T3l9Wd';

// SQL to execute
const sql = `
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

ALTER TABLE waitlist DISABLE ROW LEVEL SECURITY;
`;

async function createTable() {
  console.log('🚀 Attempting to create table via Supabase API...\n');
  
  try {
    // Note: Supabase REST API doesn't support DDL operations (CREATE TABLE) via anon key
    // We need to use the SQL Editor or Management API with service role key
    // This script will show you the SQL to run
    
    console.log('⚠️  Table creation requires admin access.');
    console.log('📋 Please run this SQL in Supabase SQL Editor:\n');
    console.log('─'.repeat(70));
    console.log(sql.trim());
    console.log('─'.repeat(70));
    console.log('\n📍 Quick Steps:');
    console.log('1. Open: https://supabase.com/dashboard/project/jgwegvaivxqqpnfxmrln/sql/new');
    console.log('2. Paste the SQL above');
    console.log('3. Click "Run" (or press Cmd/Ctrl + Enter)');
    console.log('4. Done! ✅\n');
    
    // Try to verify if table exists
    console.log('🔍 Verifying table...');
    const response = await fetch(`${SUPABASE_URL}/rest/v1/waitlist?select=count&limit=1`, {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      console.log('✅ Table exists! You can now use the waitlist form.\n');
    } else if (response.status === 404 || response.status === 406) {
      console.log('❌ Table does not exist. Please run the SQL above.\n');
    } else {
      const error = await response.text();
      console.log('⚠️  Could not verify table:', error);
      console.log('   Please run the SQL above to create it.\n');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\nPlease run the SQL manually in Supabase SQL Editor.\n');
  }
}

createTable();
