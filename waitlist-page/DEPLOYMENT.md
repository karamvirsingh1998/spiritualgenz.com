# Deployment Guide - Vercel

## Quick Deploy Steps

### 1. Push to GitHub/GitLab/Bitbucket

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Deploy to Vercel

#### Via Dashboard (Easiest):

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. Click **"Add New..."** → **"Project"**
3. **Import your Git repository**
4. Vercel auto-detects Next.js - click **"Deploy"**
5. **Add Environment Variables** (before or after first deploy):
   - Go to **Settings** → **Environment Variables**
   - Add:
     ```
     SUPABASE_URL = https://jgwegvaivxqqpnfxmrln.supabase.co
     SUPABASE_ANON_KEY = your_anon_key_here
     ```
6. **Redeploy** if you added variables after first deploy

#### Via CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (follow prompts)
vercel

# For production
vercel --prod
```

### 3. Verify Deployment

1. Visit your deployment URL: `https://your-project.vercel.app`
2. Test the waitlist form
3. Check Supabase dashboard to confirm submissions

## Environment Variables

Make sure these are set in Vercel:

| Variable | Value | Where to Get |
|----------|-------|--------------|
| `SUPABASE_URL` | `https://jgwegvaivxqqpnfxmrln.supabase.co` | Your Supabase project URL |
| `SUPABASE_ANON_KEY` | `sb_publishable_...` | Supabase Dashboard → Settings → API |

## Database Setup

Before deploying, ensure your Supabase database is set up:

1. Go to Supabase SQL Editor
2. Run the SQL from `supabase-setup.sql`
3. This creates the `waitlist` table with:
   - Unique constraint on email (prevents duplicates)
   - Proper indexes
   - RLS policies

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)
- Check build logs in Vercel dashboard

### Environment Variables Not Working

- Make sure variables are added in Vercel dashboard
- Redeploy after adding variables
- Check variable names match exactly (case-sensitive)

### Form Not Submitting

- Verify Supabase table exists
- Check RLS policies allow inserts
- Verify environment variables are correct
- Check browser console and Vercel function logs

### Email Already Exists Error

- This is expected behavior - the app now checks for duplicates
- Users will see: "This email is already registered. Please use a different email address."

## Continuous Deployment

Vercel automatically:
- Deploys on every push to main branch
- Creates preview deployments for pull requests
- Runs `npm run build` automatically
- Handles SSL certificates

## Custom Domain

1. Go to **Settings** → **Domains**
2. Add your domain
3. Update DNS records as instructed
4. Wait for SSL provisioning (usually instant)

## Monitoring

- View deployments in Vercel dashboard
- Check function logs for server actions
- Monitor Supabase dashboard for submissions
- Use Vercel Analytics (optional, add in dashboard)
