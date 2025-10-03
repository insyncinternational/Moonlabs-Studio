# Moonlabs Studio Website

A modern, animated website for Moonlabs Studio - an AI venture builder based in Dubai, UAE.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds
- **Advanced Animations**: Particle systems, 3D effects, magnetic interactions
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: Hover effects, scroll animations, typing effects
- **Performance Optimized**: Minified assets and optimized loading

## 🎨 Creative Animations

- **Particle System**: Floating particles in hero section
- **3D Card Effects**: Hover transformations with depth
- **Magnetic Interactions**: Elements follow mouse movement
- **Parallax Scrolling**: Background elements move at different speeds
- **Typing Effect**: Animated text appearance
- **Ripple Effects**: Scroll-triggered animations
- **Geometric Shapes**: Floating background elements

## 🛠️ Development

### Prerequisites
- Node.js (v14 or higher)
- Python 3 (for local server)

### Local Development
```bash
# Start development server
npm run dev
# or
python -m http.server 8000
```

### Build for Production
```bash
# Install dependencies
npm install

# Build optimized version
npm run build

# Serve production build
npm run serve
```

## 📦 Build System

The project includes a comprehensive build system:

- **Minification**: CSS, JS, and HTML optimization
- **Asset Optimization**: Image compression and optimization
- **Production Ready**: Optimized for deployment

### Build Commands
```bash
npm run build          # Full build process
npm run minify         # Minify all assets
npm run optimize       # Optimize images and assets
npm run deploy         # Deploy to Vercel
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run deploy
```

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist/` folder to your hosting service
3. Configure your domain

### Other Platforms
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Push to gh-pages branch
- **AWS S3**: Upload `dist/` contents to S3 bucket

## 📁 Project Structure

```
moonlabs-studio/
├── index.html          # Home page
├── about.html          # About page
├── bootcamp.html       # Bootcamp page
├── founders.html       # For Founders page
├── portfolio.html      # Portfolio page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment config
├── build.js            # Build script
└── dist/               # Production build output
```

## 🎯 Performance Features

- **Lazy Loading**: Images and content load as needed
- **Optimized Assets**: Minified CSS and JavaScript
- **Caching Headers**: Proper cache control for static assets
- **CDN Ready**: Optimized for content delivery networks

## 🔧 Customization

### Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #667eea;
  --accent-color: #764ba2;
}
```

### Animations
Modify animation timing and effects in `script.js` and `styles.css`.

### Content
Update HTML files with your content and branding.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development: `npm run dev`
4. Build for production: `npm run build`
5. Deploy: `npm run deploy`

## 📄 License

MIT License - feel free to use this project for your own ventures!

---

**Moonlabs Studio** - Building the Future of AI from Dubai to the World 🌍
