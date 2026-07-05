# GTA 6 Hub Comments Database Setup
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  user_id UUID NOT NULL,
  article_slug TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  user_name TEXT,
  user_avatar TEXT
);

-- Enable Row Level Security
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Anyone can read comments
CREATE POLICY "Anyone can read comments" ON comments
  FOR SELECT USING (true);

-- Authenticated users can insert their own comments
CREATE POLICY "Authenticated users can insert" ON comments
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Users can update their own comments
CREATE POLICY "Users can update own comments" ON comments
  FOR UPDATE USING (auth.uid() = user_id);

-- Users can delete their own comments
CREATE POLICY "Users can delete own comments" ON comments
  FOR DELETE USING (auth.uid() = user_id);
