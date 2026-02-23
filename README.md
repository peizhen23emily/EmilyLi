# Emily Li Personal Portfolio Website

A modern, fully responsive portfolio website for Peizhen (Emily) Li - UX/Product Designer.

## Features

✨ **Modern Design**
- Clean, minimal aesthetic with soft beige/cream background and dark navy text
- Fully responsive design (desktop, tablet, mobile)
- Smooth animations and transitions

📱 **Pages Included**
- **Home Page** - Hero section with name, tagline, quick navigation cards, featured projects, and timeline preview
- **Projects Page** - Grid layout with project filtering by tags
- **Project Detail Pages** - Individual project pages with full case studies, process, and outcomes
- **About Page** - Bio, skills, full timeline of experience and education, and personal interests
- **Resume Page** - Professional summary, highlights, experience, education, and certifications

🎨 **Components**
- Sticky navigation bar
- Interactive project cards
- Timeline component (alternating left/right on desktop, single column on mobile)
- Responsive navigation with mobile menu
- Professional footer

## Tech Stack

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Vercel** - Deployment platform

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm (or yarn)

### Installation

1. **Clone the repository and navigate to the project:**
```bash
cd emily-li-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Project Structure

```
emily-li-portfolio/
├── public/                 # Static files
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Timeline.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── About.jsx
│   │   └── Resume.jsx
│   ├── data/              # Data files
│   │   └── portfolio.js   # Projects, experience, skills data
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── index.html             # HTML entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Customization

### Update Portfolio Data

Edit `src/data/portfolio.js` to update:
- Projects information and images
- Experience timeline entries
- Skills and expertise
- Social links and contact information

### Update Colors

Edit `tailwind.config.js` to customize the color palette:
- `cream` - Background color (#f5f1ed)
- `beige` - Secondary background (#ede8e0)
- `dark` - Primary text color (#1a1a1a)
- `navy` - Accent color (#2c3e50)

### Update Professional Photo

Replace the image URLs in:
- `src/pages/Home.jsx` - Hero section photo
- `src/pages/About.jsx` - About page photo

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Import project in Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Choose "Other" as framework
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Deploy!

3. **Add custom domain:**
   - In Vercel dashboard, go to Settings > Domains
   - Add your domain (e.g., emilyli.com)
   - Follow DNS configuration instructions from your domain provider

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add your custom domain in Netlify dashboard

## Performance Optimizations

- **Image Optimization**: Use appropriately sized images and consider web-friendly formats (WebP)
- **Code Splitting**: Vite automatically code-splits for optimal loading
- **Lazy Loading**: Consider adding lazy loading for off-screen images
- **CDN**: Both Vercel and Netlify provide global CDN distribution

## SEO

Update `index.html` meta tags:
```html
<meta name="description" content="Your description here" />
<meta name="keywords" content="UX Designer, Product Designer, etc." />
<meta name="author" content="Peizhen (Emily) Li" />
```

## Best Practices

1. **Keep project data updated** - Regularly update projects and experience in `data/portfolio.js`
2. **Optimize images** - Use tools like TinyPNG or ImageOptim to reduce file sizes
3. **Test responsiveness** - Test on multiple devices and screen sizes
4. **Performance monitoring** - Use Vercel's analytics to monitor performance
5. **SEO** - Use descriptive page titles and meta descriptions

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project filtering with more advanced search
- [ ] Newsletter signup
- [ ] Analytics integration
- [ ] Contact form with email notifications
- [ ] Animation library (Framer Motion)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Peizhen (Emily) Li. All rights reserved.

## Support

For questions or issues, contact: emily@emilyli.com

---

**Happy building! 🚀**
