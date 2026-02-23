# Emily Li Portfolio - Setup & Deployment Guide

## Quick Start

### 1. Install Dependencies
```bash
cd emily-li-portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## Deployment Options

### Option 1: Deploy to Vercel (⭐ Recommended)

**Why Vercel?**
- Made by the Nextjs creators - optimized for React
- Free tier with custom domain support
- Automatic deployments on git push
- Best performance for React apps
- Built-in analytics

**Steps:**

1. **Push to GitHub:**
   ```bash
   cd emily-li-portfolio
   git init
   git add .
   git commit -m "Initial commit: Emily Li portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/emily-li-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Select "Other" when asked "What template would you like to start with?"
   - Import GitHub repository
   - Configure:
     - Framework: "Other"
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Environment Variables: Leave empty for now
   - Click "Deploy"

3. **Add Custom Domain:**
   - After deployment, go to Project Settings
   - Navigate to "Domains"
   - Click "Add"
   - Enter your domain (e.g., emilyli.com)
   - Follow nameserver instructions from your domain registrar

4. **Domain Registration:**
   - If you don't have a domain, register at:
     - GoDaddy (godaddy.com)
     - Namecheap (namecheap.com)
     - Domain.com
     - Or use Vercel's integrated domain store

---

### Option 2: Deploy to Netlify

**Steps:**

1. **Push to GitHub** (same as above)

2. **Connect to Netlify:**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Select GitHub
   - Choose your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Add Custom Domain:**
   - Go to Domain settings
   - Add custom domain
   - Point nameservers to Netlify

---

### Option 3: Deploy to GitHub Pages

**Steps:**

1. Update `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // or '/emily-li-portfolio/' if deploying to subdirectory
})
```

2. Edit `package.json`, add deploy scripts:
```json
"scripts": {
  "deploy": "npm run build && npx gh-pages -d dist"
}
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Deploy:
```bash
npm run deploy
```

---

## Domain Setup

### Using emilyli.com

1. **Purchase domain:**
   - Go to GoDaddy, Namecheap, or your preferred registrar
   - Search for "emilyli.com"
   - Add to cart and complete purchase

2. **Point to Vercel:**
   - In Vercel dashboard, go to Settings > Domains
   - Add "emilyli.com"
   - You'll see nameservers to add
   - In your domain registrar dashboard, update nameservers to match Vercel's

3. **Wait for propagation:**
   - DNS changes take 24-48 hours to fully propagate
   - Check status at: https://dns.google/

---

## Email Configuration (Optional)

To enable contact forms with email notifications:

1. Use a service like Formspree or EmailJS
2. Update environment variables in `.env`
3. Add form validation in your contact page

---

## Custom Features to Add

### 1. Add a Contact Form
Create `src/pages/Contact.jsx` and add to routes

### 2. Add Blog Section
- Create blog data in `src/data/blog.js`
- Create blog list and detail pages
- Use markdown for blog content

### 3. Add Dark Mode
- Install `next-themes` or use Context API
- Add toggle in navbar
- Update Tailwind config for dark mode

### 4. Add Analytics
- Google Analytics: Add tracking code to `index.html`
- Or use Vercel Analytics (built-in, just enable in dashboard)

### 5. Add Animations
```bash
npm install framer-motion
```
Import and use in components for smooth animations

---

## Performance Checklist

- [ ] Optimize all images (use TinyPNG)
- [ ] Test on multiple devices
- [ ] Check Lighthouse scores (aim for 90+)
- [ ] Enable gzip compression (Vercel does this by default)
- [ ] Set up 404 page
- [ ] Test email links
- [ ] Verify social links

---

## Troubleshooting

### Build fails during deployment
- Check console for errors
- Verify all imports are correct
- Clear node_modules and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  npm run build
  ```

### Domain not showing after 48 hours
- Check DNS propagation: https://dns.google/
- Verify nameservers are correct in registrar
- Try clearing browser cache

### Images not loading
- Ensure image URLs are correct
- Use HTTPS URLs
- Check image size and optimize

### Routes not working on deployed site
- Vercel and Netlify automatically handle SPA routing
- If using GitHub Pages, update `base` in vite.config.js

---

## Security Best Practices

- [ ] Never commit `.env` files
- [ ] Use environment variables for sensitive data
- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Keep dependencies updated: `npm outdated`
- [ ] Use strong passwords for email/social accounts

---

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Run locally: `npm run dev`
3. ✅ Update portfolio data in `src/data/portfolio.js`
4. ✅ Push to GitHub
5. ✅ Deploy to Vercel/Netlify
6. ✅ Add custom domain
7. ✅ Test on mobile devices
8. ✅ Share with network!

---

## Support & Resources

- **React Documentation:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Vite Documentation:** https://vitejs.dev
- **Vercel Docs:** https://vercel.com/docs
- **React Router:** https://reactrouter.com

---

**Questions?** Contact: emily@emilyli.com
