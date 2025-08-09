# Multi-Blog Subdomain Deployment Guide

This project deploys 12 separate blogs to individual subdomains using Netlify.

## Subdomain Structure

Each blog collection gets its own subdomain:

- `art.neeldhara.blog` → Art blog posts
- `bfs.neeldhara.blog` → BFS algorithm posts  
- `dfs.neeldhara.blog` → DFS algorithm posts
- `problems.neeldhara.blog` → Problem-solving posts
- `puzzles.neeldhara.blog` → Puzzle posts
- `reviews.neeldhara.blog` → Review posts
- `reflections.neeldhara.blog` → Reflection posts
- `vibes.neeldhara.blog` → Vibes posts
- `workflows.neeldhara.blog` → Workflow posts
- `magic.neeldhara.blog` → Mathematical magic posts
- `contests.neeldhara.blog` → Contest posts
- `poetry.neeldhara.blog` → Poetry posts
- `blog.neeldhara.blog` → Main blog posts

## How It Works

1. **Main Site**: All content is built and deployed to `neeldhara.blog`
2. **Subdomain Redirects**: Each subdomain (e.g., `art.neeldhara.blog`) redirects to the main site with the appropriate path (e.g., `neeldhara.blog/art/`)
3. **Netlify Configuration**: The `netlify.toml` file handles all the redirect rules

## Deployment Steps

1. **Build the site**: `npm run build`
2. **Deploy to Netlify**: Connect your Git repository to Netlify
3. **Configure domains**: Set up the custom domains in Netlify:
   - Main site: `neeldhara.blog`
   - Subdomains: `art.neeldhara.blog`, `bfs.neeldhara.blog`, etc.
4. **DNS Configuration**: Point all subdomains to your Netlify site

## Example URLs

Local development:
- `http://localhost:4323/art/algorithmic-sketches`

Production:
- `https://art.neeldhara.blog/algorithmic-sketches`
- `https://neeldhara.blog/art/algorithmic-sketches` (direct access)

Both URLs serve the same content thanks to the redirect configuration.

## Testing

After deployment, verify that:
1. Each subdomain homepage loads correctly (e.g., `art.neeldhara.blog`)
2. Individual blog posts load correctly (e.g., `art.neeldhara.blog/algorithmic-sketches`)
3. RSS feeds work (e.g., `art.neeldhara.blog/rss.xml`)
