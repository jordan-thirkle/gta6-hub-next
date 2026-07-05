# One-command Turso setup for production comments
# Run this once to create your remote Turso database:

# 1. Install Turso CLI
# npm install -g turso

# 2. Log in (opens browser)
# turso auth login

# 3. Create database
# turso db create gta6-hub-comments

# 4. Get connection URL
# turso db show gta6-hub-comments --url
# → libsql://gta6-hub-comments-xxxxx.turso.io

# 5. Get auth token
# turso db tokens create gta6-hub-comments

# 6. Run this SQL in Turso shell to create table:
# turso db shell gta6-hub-comments < supabase-setup.sql

# 7. Add to Vercel:
# vercel env add TURSO_DB_URL   → libsql://gta6-hub-comments-xxxxx.turso.io
# vercel env add TURSO_DB_TOKEN → the token from step 5
# vercel deploy
