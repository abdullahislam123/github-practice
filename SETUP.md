# Codrithm Website - Setup Instructions

## Quick Start Guide

### 1. Install Dependencies

Open the terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including React, React Router, and Tailwind CSS.

### 2. Start Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production-ready build.

## What's Included

### Pages (6 Total)

1. **Home Page** - Hero section, features, stats, and CTA
2. **About Page** - Mission, vision, core values, and target audience
3. **Team Page** - 6 team members with roles and social profiles
4. **Events Page** - 6 upcoming events with full details
5. **Resources Page** - Learning materials organized by category
6. **Join Page** - Registration form and community links

### Components

- **Navigation** - Responsive navbar with mobile menu
- **Footer** - Links, social media, and branding

### Design Features

- Modern gradient colors (Blue & Purple theme)
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Interactive buttons and hover effects
- Clean typography with proper spacing
- Icon support using Lucide Icons

## Customization Tips

### Change Colors

Edit `tailwind.config.js` and modify the color values under `theme.extend.colors`

### Update Team Members

Edit `src/pages/TeamPage.jsx` - modify the `team` array with your team details

### Add/Remove Events

Edit `src/pages/EventsPage.jsx` - modify the `events` array

### Update Navigation Links

Edit `src/components/Navigation.jsx` - modify the `links` array

### Change Community Links

Edit `src/pages/JoinPage.jsx` - modify the `communityLinks` array

## Key Features

✨ **Beautiful UI** - Modern design with gradient backgrounds
📱 **Responsive** - Works perfectly on all devices
🎨 **Tailwind CSS** - Utility-first styling for easy customization
⚡ **Fast** - Built with Vite for optimal performance
🔄 **Smooth Navigation** - React Router for seamless page transitions
📋 **Reusable Components** - Clean component structure
♿ **Accessible** - Semantic HTML and proper ARIA attributes

## File Structure

```
github-practice/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── TeamPage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── ResourcesPage.jsx
│   │   └── JoinPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel detects it's a Vite project and builds automatically

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Update `vite.config.js` with your repository name in the base
2. Run: `npm run build`
3. Push the `dist` folder to `gh-pages` branch

## Next Steps

1. Replace placeholder content with your actual community information
2. Add real images/emojis instead of placeholders
3. Connect the form to a backend or email service
4. Customize colors to match your brand
5. Add analytics (Google Analytics, etc.)
6. Deploy to production

## Support & Questions

Need help? Check the comments in the code or refer to:

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
