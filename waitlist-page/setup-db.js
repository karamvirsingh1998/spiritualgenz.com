const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing SUPABASE_URL or SUPABASE_ANON_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
  console.log('🚀 Setting up database...\n');

  // SQL to create the table
  const createTableSQL = `
    -- Create waitlist table
    CREATE TABLE IF NOT EXISTS waitlist (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      email TEXT NOT NULL,
      note TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );

    -- Create index
    CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

    -- Disable RLS for now (simpler for waitlist)
    ALTER TABLE waitlist DISABLE ROW LEVEL SECURITY;
  `;

  try {
    // Note: Supabase client doesn't support direct SQL execution via anon key
    // We need to use the REST API or provide SQL for manual execution
    console.log('📋 Please run this SQL in your Supabase SQL Editor:\n');
    console.log('─'.repeat(60));
    console.log(createTableSQL);
    console.log('─'.repeat(60));
    console.log('\n📍 Steps:');
    console.log('1. Go to: https://supabase.com/dashboard/project/jgwegvaivxqqpnfxmrln');
    console.log('2. Click "SQL Editor" in the left sidebar');
    console.log('3. Click "New query"');
    console.log('4. Paste the SQL above');
    console.log('5. Click "Run"\n');

    // Try to verify table exists by attempting a test query
    console.log('🔍 Checking if table exists...');
    const { data, error } = await supabase
      .from('waitlist')
      .select('count')
      .limit(1);

    if (error) {
      if (error.message.includes('does not exist') || error.message.includes('relation')) {
        console.log('❌ Table does not exist yet. Please run the SQL above.\n');
      } else {
        console.log('⚠️  Error checking table:', error.message);
        console.log('   Please run the SQL above to create the table.\n');
      }
    } else {
      console.log('✅ Table exists! You can now use the waitlist form.\n');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\nPlease run the SQL manually in Supabase SQL Editor.\n');
  }
}

setupDatabase();
