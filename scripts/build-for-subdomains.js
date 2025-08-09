#!/usr/bin/env node

/**
 * Build script for subdomain deployment
 * This ensures all collections are properly built and accessible via subdomain routing
 */

import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

console.log('🏗️  Building multi-blog site for subdomain deployment...');

// Build the Astro site
try {
  console.log('📦 Building Astro site...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ Build completed successfully!');
  console.log('🌐 Ready for subdomain deployment to Netlify');
  console.log('');
  console.log('Next steps:');
  console.log('1. Deploy to Netlify');
  console.log('2. Configure custom domains for subdomains');
  console.log('3. Test subdomain routing');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
