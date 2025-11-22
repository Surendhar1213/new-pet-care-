# Babet Pet Care - React Conversion

This is a React (Vite + JSX) conversion of the Babet Pet Care HTML template from ThemeForest. The original `home-7-op.html` file has been converted into a React application with all sections split into separate components.

## Features

- ✅ All sections converted to React components
- ✅ Original design, animations, and layout preserved
- ✅ All assets (CSS, JS, images, fonts) included
- ✅ Swiper.js integration for sliders
- ✅ Responsive design maintained

## Project Structure

```
├── public/
│   └── assets/          # All CSS, JS, images, fonts from template
├── src/
│   ├── components/      # React components for each section
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── CursorFollower.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── Preloader.jsx
│   │   ├── Pricing.jsx
│   │   ├── ScrollTop.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   ├── Testimonial.jsx
│   │   ├── Video.jsx
│   │   └── WhyChooseUs.jsx
│   ├── styles/
│   │   └── index.css    # CSS imports
│   ├── utils/
│   │   └── initScripts.js  # JavaScript initialization
│   ├── App.jsx          # Main app component
│   └── main.jsx        # Entry point
└── index.html
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Components

All sections from the original HTML have been converted into separate React components:

- **Header**: Navigation and header section
- **Hero**: Hero slider section
- **About**: About section with counters
- **Marquee**: Scrolling marquee section
- **Services**: Services slider section
- **Gallery**: Image gallery section
- **Testimonial**: Testimonials slider
- **WhyChooseUs**: Why choose us section
- **Video**: Video section
- **Pricing**: Pricing plans with monthly/yearly toggle
- **Team**: Team members section
- **Contact**: Contact form section
- **Blog**: Blog posts section
- **Footer**: Footer section

## Notes

- The template's JavaScript files (jQuery, app.min.js, main.js) are loaded dynamically to ensure compatibility
- All animations and interactions from the original template are preserved
- Image paths have been updated to work with the public folder structure
- Swiper.js is used for all slider functionality

## Browser Support

This project supports all modern browsers that support React and ES6+.

