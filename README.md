# Codrithm - Developer Community Website

A modern, responsive website for Codrithm, a developer community platform built with React.js and Tailwind CSS.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Multiple Pages**:
  - Home: Introduction with hero section and feature highlights
  - About: Community mission, vision, and core values
  - Team: Meet the team members with social links
  - Events: Upcoming workshops, webinars, and meetups
  - Resources: Curated learning materials and tools
  - Join: Registration form and community links

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd github-practice
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx     # Top navigation bar
│   └── Footer.jsx         # Footer component
├── pages/
│   ├── HomePage.jsx       # Home page
│   ├── AboutPage.jsx      # About page
│   ├── TeamPage.jsx       # Team page
│   ├── EventsPage.jsx     # Events page
│   ├── ResourcesPage.jsx  # Resources page
│   └── JoinPage.jsx       # Join/Registration page
├── App.jsx                # Main app component with routing
├── index.css              # Tailwind and custom styles
└── main.jsx               # React entry point
```

## Customization

### Colors

Modify the color theme in `tailwind.config.js`. The default colors are:

- Primary: Blue (#0ea5e9 - #0c2d48)
- Accent: Purple (#8b5cf6)

### Content

Update the content in each page file to match your community's information:

- Team members in `TeamPage.jsx`
- Events in `EventsPage.jsx`
- Resources in `ResourcesPage.jsx`
- Links in `Navigation.jsx` and `Footer.jsx`

## Features Included

- ✅ Responsive Navigation with mobile menu
- ✅ Beautiful Hero sections
- ✅ Feature cards and highlights
- ✅ Team member showcase with social links
- ✅ Event listing with full details
- ✅ Curated resource sections
- ✅ Registration form with validation
- ✅ Community links integration
- ✅ Contact information
- ✅ FAQ section
- ✅ Statistics showcase
- ✅ Call-to-action buttons throughout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please reach out to hello@codrithm.com
