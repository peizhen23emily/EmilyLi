# File Structure & Purpose Guide

This guide explains what each file does and where to find what you need.

---

## 📂 Root Level Files

### Configuration Files

**`package.json`**
- Lists all project dependencies
- Defines npm scripts (dev, build, preview)
- Edit to add new packages: `npm install package-name`

**`vite.config.js`**
- Vite build configuration
- Dev server settings
- Port configuration (port 3000)

**`tailwind.config.js`**
- Tailwind CSS configuration
- **Edit here to change colors and fonts**
- Theme extensions

**`postcss.config.js`**
- PostCSS configuration for Tailwind
- Usually doesn't need editing

**`vercel.json`**
- Vercel deployment configuration
- Build and output settings

### Documentation Files

**`README.md`**
- Project overview
- Setup instructions
- Features list
- Tech stack info

**`DEPLOYMENT_GUIDE.md`**
- Step-by-step deployment instructions
- How to deploy to Vercel, Netlify, GitHub Pages
- Domain setup guide
- Troubleshooting

**`CUSTOMIZATION_GUIDE.md`**
- How to customize content
- How to update colors, fonts, photos
- How to add new pages
- Performance tips

**`QUICK_START.md`**
- Quick getting started guide
- 5-step setup process
- Verification checklist
- Troubleshooting quick fixes

**`PROJECT_SUMMARY.md`**
- Project overview
- What's included
- Quick reference guide

### Other Files

**`index.html`**
- Main HTML file
- Meta tags for SEO
- Font imports
- Entry point for React

**`.gitignore`**
- Files to ignore in Git
- node_modules, dist, .env

**`.env.example`**
- Example environment variables
- Copy and rename to `.env` to use

---

## 📁 src/ - Source Code

### Components: `src/components/`

**`Navbar.jsx`** 🔗 Navigation
- Sticky top navigation bar
- Logo "EL" (edit to customize)
- Desktop links and mobile menu
- **Edit**: Logo text, navigation links

**`Footer.jsx`** 🔗 Footer
- Footer with social links
- Quick links
- Contact information
- **Edit**: Social links, company info

**`ProjectCard.jsx`** 🔗 Project Card Component
- Card for displaying projects
- Shows: image, title, tags, description
- Used on Projects page and Home page
- No editing needed usually

**`Timeline.jsx`** 🔗 Education & Experience Timeline
- Timeline display component
- Alternating left-right on desktop
- Single column on mobile
- Used on Home and About pages
- No editing needed usually

### Pages: `src/pages/`

**`Home.jsx`** 🔗 Home Page
- Hero section with name, photo, tagline
- Quick navigation cards
- Featured projects preview
- Timeline preview
- CTA section
- **Edit**: Hero text, featured projects count, photo URL

**`Projects.jsx`** 🔗 Projects Grid Page
- Grid layout of all projects
- Tag filtering functionality
- Search/filter by skills
- **Edit**: Filter logic if needed

**`ProjectDetail.jsx`** 🔗 Individual Project Page
- Detailed project information
- Dynamically routed `/projects/[project-id]`
- Shows: process, outcomes, images
- Back button to projects
- Related projects suggestions
- No editing needed usually

**`About.jsx`** 🔗 About Page
- Professional photo
- Bio paragraph
- Skills sections (design, tools, research, other)
- Complete education & experience timeline
- Personal interests
- Social links
- **Edit**: Bio text, photo URL, interests

**`Resume.jsx`** 🔗 Resume Page
- Professional summary
- Key highlights with metrics
- Work experience entries
- Education history
- Certifications and awards
- Download resume button
- **Edit**: Summary, highlights, experience, education, certifications

### Data: `src/data/`

**`portfolio.js`** 📊 Portfolio Data
- **ALL your content is here!**
- Projects array (edit to add/update projects)
- Experience array (timeline entries)
- Skills object (design, tools, research, other)
- Social links object
- **MOST IMPORTANT: Edit this file with your info**

### Core Files

**`App.jsx`** 🔗 Main App Component
- React Router setup
- Route definitions
- Layout wrapper (Navbar, main, Footer)
- **Edit**: Add new routes for new pages

**`main.jsx`** 🔗 React Entry Point
- Starts React application
- Mounts react-dom to #root
- Usually doesn't need editing

**`index.css`** 🎨 Global Styles
- Tailwind CSS imports
- Custom global styles
- Scrollbar styles
- **Edit**: Add custom CSS if needed

---

## 🎯 What to Edit - Quick Reference

### To Update Your Information

Edit **`src/data/portfolio.js`**:
- ✏️ Change `socialLinks.email`
- ✏️ Add/edit projects array
- ✏️ Add/edit experience array
- ✏️ Update skills object

### To Update Home Page

Edit **`src/pages/Home.jsx`**:
- ✏️ Line ~25: Hero section text
- ✏️ Line ~80: Hero photo URL
- ✏️ Line ~130: Quick navigation cards
- ✏️ Line ~150: Featured projects count

### To Update About Page

Edit **`src/pages/About.jsx`**:
- ✏️ Line ~35: About photo URL
- ✏️ Line ~40: Bio paragraphs
- ✏️ Line ~155: Personal interests

### To Update Colors

Edit **`tailwind.config.js`**:
- ✏️ Lines 5-10: Color theme values

### To Update Logo/Branding

Edit **`src/components/Navbar.jsx`**:
- ✏️ Line ~30: Logo text

### To Add Links/Pages

Edit **`src/App.jsx`**:
- ✏️ Add new route
- ✏️ Import new page component

---

## 📦 Key Directories

### `/src`
- All React code goes here
- Components, pages, styles

### `/src/components`
- Reusable React components
- Shared across multiple pages

### `/src/pages`
- Full page components
- Each page type has its own file

### `/src/data`
- Data files (JSON-like)
- Portfolio content, projects, experience

### `/public`
- Static files
- Images, PDFs, favicon
- Served directly

### `dist/` (created after build)
- Production build output
- Optimized for deployment
- Generated by `npm run build`

### `node_modules/` (created after npm install)
- All installed dependencies
- Don't edit or commit

---

## 🔄 Common Workflows

### Add a New Project

1. Open `src/data/portfolio.js`
2. Add new object to `projects` array
3. Provide: id, title, tags, description, images, details
4. Done! Shows on Projects page and Home page

### Add Your Experience

1. Open `src/data/portfolio.js`
2. Add new object to `experience` array
3. Provide: type, title, organization, date, description
4. Done! Shows on About page timeline

### Change Color Scheme

1. Open `tailwind.config.js`
2. Edit colors in theme.extend.colors
3. Save file
4. Color automatically updates throughout site

### Add a New Page

1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add link in `src/components/Navbar.jsx`
4. Done! Page accessible at /newpage

### Deploy Changes

1. Make edits locally
2. Test with `npm run dev`
3. Commit to Git: `git add . && git commit -m "message"`
4. Push to GitHub: `git push`
5. Vercel auto-deploys! Done!

---

## 🔍 Finding Things

### Where do I find...?

| Looking for... | File Location |
|---|---|
| My content/projects | `src/data/portfolio.js` |
| Hero section text | `src/pages/Home.jsx` |
| About me text | `src/pages/About.jsx` |
| Navigation links | `src/components/Navbar.jsx` |
| Color scheme | `tailwind.config.js` |
| Font settings | `tailwind.config.js` |
| Routes/pages | `src/App.jsx` |
| CSS styles | `src/index.css` or Tailwind classes |
| Images | Anywhere pointing to external URL |
| Social links | `src/data/portfolio.js` |

---

## ⚙️ File Dependencies

```
index.html (entry point)
    ↓
src/main.jsx (React entry)
    ↓
src/App.jsx (main component with routing)
    ├→ Navbar.jsx
    ├→ main content (pages)
    │   ├→ Home.jsx
    │   ├→ Projects.jsx
    │   ├→ ProjectDetail.jsx
    │   ├→ About.jsx
    │   └→ Resume.jsx
    ├→ ProjectCard.jsx (used in Home & Projects)
    ├→ Timeline.jsx (used in Home & About)
    └→ Footer.jsx

All pages use data from: src/data/portfolio.js
All styled with: Tailwind CSS config
```

---

## 📊 Editing Checklist

Before deploying, check these files:

- [ ] `src/data/portfolio.js` - Your projects and info
- [ ] `src/pages/Home.jsx` - Hero text and photo URLs
- [ ] `src/pages/About.jsx` - Bio and photo URLs
- [ ] `src/components/Navbar.jsx` - Logo text
- [ ] `index.html` - Meta tags and title
- [ ] `tailwind.config.js` - Colors (if customizing)

---

## 🚀 Ready to Edit?

1. Open the project in VS Code
2. Open `src/data/portfolio.js` first
3. Update with your projects and information
4. Run `npm run dev` to see changes
5. Test all pages
6. Deploy when ready!

---

**Happy editing! 🎨**
