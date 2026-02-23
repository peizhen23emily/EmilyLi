# Portfolio Customization Guide

## Overview

This guide explains how to customize your portfolio to match your preferences and add new content.

---

## 1. Updating Your Information

### Contact Information & Social Links

Edit `src/data/portfolio.js`:

```javascript
export const socialLinks = {
  email: 'emily@emilyli.com',
  linkedin: 'https://linkedin.com/in/emilyuserdesigner',
  dribbble: 'https://dribbble.com/emily',
  twitter: 'https://twitter.com/emilydesigns'
}
```

### Update Your Name & Tagline

Edit `src/pages/Home.jsx`:
- Line ~25: Change "Peizhen (Emily) Li" and "UX/Product Designer"

Edit `src/components/Navbar.jsx`:
- Line ~30: Change logo from "EL" to your initials

---

## 2. Updating Portfolio Projects

### Add/Edit Projects

Edit `src/data/portfolio.js` - `projects` array:

```javascript
{
  id: 'project-slug',  // Used in URL: /projects/project-slug
  title: 'Project Title',
  tags: ['Tag1', 'Tag2'],  // For filtering
  description: 'Short one-liner',
  image: 'https://link-to-thumbnail-image.jpg',  // For grid view
  heroImage: 'https://link-to-large-image.jpg',  // For detail page
  overview: 'Detailed overview paragraph',
  problemStatement: 'What problem did you solve?',
  process: [
    'Step 1',
    'Step 2',
    'Step 3'
  ],
  outcomes: [
    'Result 1 with metrics',
    'Result 2 with metrics'
  ],
  images: [
    'image-url-1.jpg',
    'image-url-2.jpg'
  ]
}
```

### Image Guidelines

- **Thumbnail images**: At least 800px wide, 16:9 or 4:3 aspect ratio
- **Hero images**: At least 1200px wide
- **Process/outcome images**: At least 1000px wide
- **Format**: JPG or PNG (optimize with TinyPNG first)
- **File size**: Keep under 500KB per image

### Where to Host Images

1. **Unsplash** (free, high quality) - https://unsplash.com
2. **Pexels** (free) - https://pexels.com
3. **AWS S3** (paid, reliable)
4. **Cloudinary** (free tier available)
5. **GitHub** (free, but not optimized)

---

## 3. Updating Experience & Education

Edit `src/data/portfolio.js` - `experience` array:

```javascript
{
  type: 'experience', // or 'education'
  title: 'Job Title / Degree',
  organization: 'Company Name / University',
  date: '2023 - 2024',
  description: 'Brief description of role or achievements'
}
```

The timeline automatically sorts by order in the array.

---

## 4. Updating Skills

Edit `src/data/portfolio.js` - `skills` object:

```javascript
export const skills = {
  design: ['Skill 1', 'Skill 2', 'Skill 3'],
  tools: ['Tool 1', 'Tool 2'],
  research: ['Method 1', 'Method 2'],
  other: ['Competency 1', 'Competency 2']
}
```

These appear on the About page in skill sections.

---

## 5. Updating Colors & Typography

### Color Palette

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'cream': '#f5f1ed',    // Background
      'beige': '#ede8e0',    // Secondary bg
      'dark': '#1a1a1a',     // Text
      'navy': '#2c3e50',     // Accent
    }
  }
}
```

**Color Usage:**
- `bg-cream` - Main background
- `bg-beige` - Section backgrounds
- `text-dark` - Primary text
- `text-navy` - Links and accents

### Update All Color Theme

Find and replace throughout CSS:

Example dark theme alternative:
```javascript
colors: {
  'cream': '#1a1a1a',         // Dark background
  'beige': '#2a2a2a',         // Slightly lighter
  'dark': '#f5f5f5',          // Light text
  'navy': '#6366f1',          // Purple accent
}
```

### Typography

Default font: Inter (Google Fonts)

To change font in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

Then in `tailwind.config.js`:
```javascript
fontFamily: {
  'sans': ['Poppins', 'system-ui', 'sans-serif'],
}
```

---

## 6. Updating Page Content

### Home Page

Edit `src/pages/Home.jsx`:
- Hero section text (**Lines 20-60**)
- Quick navigation cards (**Lines 130-145**)
- Featured projects count (**Line 152**: Change `slice(0, 3)`)

### About Page

Edit `src/pages/About.jsx`:
- Bio text (**Lines 40-60**)
- Personal interests section (**Lines 188-210**)
- Social links (they auto-update from `portfolio.js`)

### Resume Page

Edit `src/pages/Resume.jsx`:
- Professional summary (**Lines 54-68**)
- Key highlights (**Lines 76-103**)
- Experience entries (**Lines 115-170**)
- Education entries (**Lines 209-230**)
- Certifications (**Lines 246-265**)

---

## 7. Adding New Pages

### Create New Page

1. Create `src/pages/NewPage.jsx`:
```javascript
import React from 'react'

export default function NewPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-dark mb-6">
          New Page
        </h1>
        {/* Page content */}
      </div>
    </div>
  )
}
```

2. Add route in `src/App.jsx`:
```javascript
<Route path="/newpage" element={<NewPage />} />
```

3. Add link in `src/components/Navbar.jsx`:
```javascript
{ path: '/newpage', label: 'New Page' }
```

---

## 8. Updating Navigation

### Change Navigation Links

Edit `src/components/Navbar.jsx`:

```javascript
const links = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/resume', label: 'Resume' },
  { path: '/blog', label: 'Blog' }, // New page
]
```

### Change Logo

Edit `src/components/Navbar.jsx`, **Line 30**:
```javascript
<Link to="/" className="text-2xl font-bold text-navy hover:text-dark">
  YourInitials
</Link>
```

---

## 9. Adding Professional Photo

Replace placeholder images:

### Home Page Hero Image
Edit `src/pages/Home.jsx`:
```javascript
<img
  src="YOUR_PHOTO_URL"
  alt="Peizhen (Emily) Li"
  className="w-full h-full object-cover"
/>
```

### About Page Photo
Same update in `src/pages/About.jsx`

### Photo Best Practices
- Professional headshot with good lighting
- Square format (1:1 aspect ratio)
- High resolution (at least 500x500px)
- Natural background or studio backdrop
- Should convey professionalism and approachability

### Where to Get Professional Photos
- **Hire a photographer** ($200-500)
- **Headshot services** - HeadShotted.com, WesFrame.com
- **DIY tips** - Use natural light, good camera/phone
- **Online photoshoots** - During COVID, many studios offer remote sessions

---

## 10. SEO Optimization

### Update Meta Tags

Edit `index.html`:

```html
<meta name="description" content="Peizhen (Emily) Li - UX/Product Designer creating meaningful digital experiences" />
<meta name="keywords" content="UX Designer, Product Designer, UI Design, User Experience" />
<meta name="author" content="Peizhen (Emily) Li" />

<!-- Open Graph for social sharing -->
<meta property="og:title" content="Peizhen (Emily) Li - UX/Product Designer" />
<meta property="og:description" content="Award-winning designer..." />
<meta property="og:image" content="https://emilyli.com/og-image.jpg" />
<meta property="og:url" content="https://emilyli.com" />
```

### Add Page Titles

Edit each page component to add titles using a custom hook:

```javascript
// Create src/hooks/usePageTitle.js
export function usePageTitle(title) {
  React.useEffect(() => {
    document.title = `${title} - Peizhen (Emily) Li`
  }, [title])
}

// Use in components
usePageTitle('Projects')
```

---

## 11. Performance Optimization

### Image Optimization

1. **Reduce file size:**
   - Use TinyPNG.com or ImageOptim
   - Aim for under 300KB per image

2. **Use appropriate formats:**
   - JPG for photos
   - PNG for graphics with transparency
   - WebP for modern browsers

3. **Lazy loading:**
   ```javascript
   <img src="..." loading="lazy" />
   ```

### Code Optimization

- Remove unused dependencies
- Use CSS classes instead of inline styles
- Enable gzip compression (automatic on Vercel)

---

## 12. Testing Checklist

Before deploying:

- [ ] All links work
- [ ] Images load correctly
- [ ] Mobile responsive design looks good
- [ ] No console errors
- [ ] Contact email works
- [ ] Social links open correctly
- [ ] Page load time under 3 seconds
- [ ] Lighthouse score 90+

---

## 13. Maintenance

### Regular Updates

- **Monthly**: Update project thumbnails, add new work
- **Quarterly**: Review and refresh content
- **Annually**: Full design refresh if desired

### Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update safely
npm update
```

### Monitor Performance

- **Vercel Analytics**: Built-in to Vercel deployments
- **Google Analytics**: Add tracking code to index.html
- **Lighthouse**: Test at https://developers.google.com/web/tools/lighthouse

---

## Common Customizations

### Dark Mode Toggle

1. Install: `npm install next-themes`
2. Add theme toggle in Navbar
3. Update colors for dark mode in Tailwind config

### Blog Section

1. Create `src/pages/Blog.jsx`
2. Add blog data in `src/data/blog.js`
3. Create `src/pages/BlogPost.jsx` for individual posts
4. Add routes and navigation

### Contact Form

1. Create form component
2. Use EmailJS or Formspree
3. Add success/error handling

### Mobile App Links

Add in footer:
```javascript
<a href="https://apps.apple.com/...">App Store</a>
<a href="https://play.google.com/...">Google Play</a>
```

---

## Troubleshooting

### Changes not showing
- Save file and let dev server auto-reload
- Clear browser cache (Cmd+Shift+R on Mac)
- Restart dev server (Ctrl+C, then `npm run dev`)

### Images not loading
- Check image URL exact path
- Verify HTTPS (no http://)
- Test image URL directly in browser

### Build fails
- Check console errors carefully
- Ensure all imports are correct
- Clear `node_modules` and reinstall

---

## Resources

- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Responsive Design**: https://web.dev/responsive-web-design-basics/
- **Accessibility**: https://www.a11y-101.com
- **Web Performance**: https://web.dev/performance/

---

**Need help?** Contact your developer or check the README.md file.
