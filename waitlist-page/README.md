# Spiritual Waitlist Landing Page

A minimal, calm landing page for waitlist validation. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Features

- Hero section with centered typography
- How It Works section (3 steps)
- Emotional context section
- Waitlist form with Supabase integration
- Server Actions for form handling
- Fully responsive, mobile-first design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up Supabase database:
- Go to your Supabase project: https://jgwegvaivxqqpnfxmrln.supabase.co
- Navigate to SQL Editor
- Run the SQL script from `supabase-setup.sql` to create the `waitlist` table

3. Set up environment variables:
- Go to your Supabase project Settings → API
- Copy your Project URL and anon/public key
- Create a `.env.local` file in the root directory:
```
SUPABASE_URL=https://jgwegvaivxqqpnfxmrln.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
```
Replace `your_anon_key_here` with your actual anon key from Supabase.

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

## Deployment to Vercel

### Step 1: Prepare Your Repository

1. Make sure your code is committed to a Git repository (GitHub, GitLab, or Bitbucket)
2. Push your code to the repository

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in (or create an account)
2. Click **"Add New Project"**
3. Import your Git repository
4. Vercel will auto-detect Next.js settings
5. **Add Environment Variables:**
   - Click **"Environment Variables"** section
   - Add the following:
     - `SUPABASE_URL` = `https://jgwegvaivxqqpnfxmrln.supabase.co`
     - `SUPABASE_ANON_KEY` = Your Supabase anon key
6. Click **"Deploy"**
7. Wait for deployment to complete (usually 1-2 minutes)
8. Your site will be live at `your-project-name.vercel.app`

#### Option B: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts and add environment variables when asked

5. For production deployment:
   ```bash
   vercel --prod
   ```

### Step 3: Configure Environment Variables in Vercel

After deployment, you can update environment variables:

1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add or update:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
4. Redeploy if you update variables

### Step 4: Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL certificates

### Important Notes

- Environment variables are automatically available in production
- Vercel automatically builds and deploys on every push to your main branch
- Preview deployments are created for pull requests
- The build process runs `npm run build` automatically

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (Server-side only)
