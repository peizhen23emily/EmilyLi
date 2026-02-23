# 🚀 Quick Start Checklist

Get your portfolio website live in 5 easy steps!

---

## ✅ Step 1: Install Dependencies (2 minutes)

```bash
cd emily-li-portfolio
npm install
```

Wait for installation to complete. You should see "npm warn" messages but no errors.

---

## ✅ Step 2: Start Development Server (1 minute)

```bash
npm run dev
```

You should see:
```
  VITE v5.0.0  ready in 123 ms

  ➜  Local:   http://localhost:3000/
```

Open http://localhost:3000 in your browser to see your site!

---

## ✅ Step 3: Customize Your Content (30 minutes)

Edit the following file with your information:

📝 **File: `src/data/portfolio.js`**

- Update your **name** and **contact email**
- Add your **projects** (at least 1, but 3+ recommended)
- Update your **experience** and **education** timeline
- Update your **skills** list
- Update your **social links** (LinkedIn, etc.)

**Project Template:**
```javascript
{
  id: 'project-slug',
  title: 'Project Name',
  tags: ['UX Research', 'Design'],
  description: 'One-line description',
  image: 'https://image-url.jpg',
  heroImage: 'https://hero-image.jpg',
  overview: 'Detailed overview...',
  problemStatement: 'What problem?',
  process: ['Step 1', 'Step 2'],
  outcomes: ['Result 1', 'Result 2'],
  images: ['url1.jpg', 'url2.jpg']
}
```

---

## ✅ Step 4: Add Your Professional Photo (5 minutes)

Replace placeholder images:

1. **Home Page**: Edit `src/pages/Home.jsx` around line 80
2. **About Page**: Edit `src/pages/About.jsx` around line 35

Find this line:
```javascript
<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80"
```

Replace with your photo URL:
```javascript
<img src="YOUR_PHOTO_URL"
```

**Where to get photo:**
- Unsplash.com (free)
- Your own professional headshot
- Photographer or headshot service

---

## ✅ Step 5: Deploy to the World (10 minutes)

### Option A: Deploy to Vercel (⭐ Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Emily Li portfolio - initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/emily-li-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy:**
   - Go to https://vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! 🎉

3. **Add Custom Domain (optional):**
   - In Vercel dashboard: Settings → Domains
   - Add "emilyli.com"
   - Update nameservers in your domain's registrar
   - Wait 24-48 hours for DNS to update

### Option B: Deploy to Netlify

1. Push to GitHub (same as above)
2. Go to https://netlify.com
3. Click "New site from Git"
4. Select GitHub repository
5. Deploy settings should auto-fill
6. Click "Deploy site"
7. Done! 🎉

---

## 🎯 Verification Checklist

After completing all steps, verify everything works:

- [ ] Site loads at http://localhost:3000 (dev) or deployed URL
- [ ] All pages show your content (Home, Projects, About, Resume)
- [ ] Projects page shows your projects with filtering
- [ ] Clicking a project shows detailed project page
- [ ] Your photo appears on Home and About pages
- [ ] Links work (email, social media)
- [ ] Navigation bar is sticky and works on all pages
- [ ] Mobile menu works on small screens
- [ ] Timeline shows on About page with your experience

---

## 🐛 Troubleshooting

### npm install fails
```bash
rm -rf node_modules package-lock.json
npm install
```

### Dev server won't start
- Check if port 3000 is in use
- Kill any processes on port 3000
- Try a different port: `npm run dev -- --port 3001`

### Changes not showing
- Save file (editor should auto-reload)
- Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Restart dev server: Ctrl+C, then `npm run dev`

### Build fails on deployment
- Check for errors in console locally: `npm run build`
- Verify all imports are correct
- Ensure no syntax errors in your files

### Images not loading
- Verify image URL is correct
- Check image URL directly in browser
- Use HTTPS URLs (http:// often blocked)

---

## 📞 Need Help?

### Quick Help
- **Development**: See `README.md`
- **Deployment**: See `DEPLOYMENT_GUIDE.md`
- **Customization**: See `CUSTOMIZATION_GUIDE.md`

### Resources
- **React**: https://react.dev
- **Tailwind**: https://tailwindcss.com
- **Vite**: https://vitejs.dev

---

## 🎉 Success!

Once deployed, you have a professional portfolio that:

✅ Shows all your best work
✅ Looks great on all devices
✅ Gets indexed by Google
✅ One-click deployment when you add new projects
✅ Custom domain support
✅ FREE (unless you buy a domain)

---

## 📈 Next Steps After Launch

1. **Share your portfolio**
   - Send link to recruiters
   - Post on LinkedIn
   - Include in applications
   - Share with professional network

2. **Keep it updated**
   - Add new projects as you complete them
   - Update experience/education
   - Keep skills current
   - Refresh content quarterly

3. **Monitor performance**
   - Check Vercel analytics for views
   - Track which projects get clicks
   - Update based on traffic patterns

---

**Your portfolio is ready to launch! 🚀**

Questions? Need help with customization? Check the documentation files!
