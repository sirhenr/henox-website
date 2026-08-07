# Henox Business Consultant Website

A modern, responsive website for Henox Business Consultant Limited - Kenya's premier document digitization specialists.

## 🚀 Features

- **Modern React/TypeScript Application** - Built with cutting-edge web technologies
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **SEO Optimized** - Comprehensive meta tags and structured data
- **Interactive Components** - Quote calculator, testimonials carousel, contact forms
- **Performance Optimized** - Fast loading with lazy loading and optimized images
- **Google Analytics Ready** - Integrated analytics tracking
- **Professional Design** - Modern gradients, animations, and hover effects

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: Wouter
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS animations

## 📁 Project Structure

```
henox-website/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── index.css      # Global styles
│   └── index.html         # Main HTML template
├── server/                # Backend API (Node.js/Express)
├── shared/                # Shared types and schemas
└── dist/                  # Built files for production
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Static Hosting)

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   - Push your code to a GitHub repository
   - Go to repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/docs" folder (or use GitHub Actions)

3. **Configure custom domain** (optional):
   - Add `CNAME` file with your domain name
   - Update DNS settings to point to GitHub Pages

### Option 2: Netlify (Recommended)

1. **Connect GitHub repository**:
   - Sign up at [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build settings**:
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment variables**:
   - Add `VITE_GA_MEASUREMENT_ID` with your Google Analytics ID

### Option 3: Vercel

1. **Deploy with Vercel**:
   - Sign up at [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect the Vite configuration

2. **Configure environment**:
   - Add environment variables in Vercel dashboard
   - Set `VITE_GA_MEASUREMENT_ID` for analytics

### Option 4: Traditional Web Hosting

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Upload dist folder**:
   - Upload contents of `dist/` folder to your web hosting provider
   - Ensure your hosting supports single-page applications (SPA)

## 🔧 Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/henox-website.git
   cd henox-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file:
   ```
   VITE_GA_MEASUREMENT_ID=your_google_analytics_id
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**:
   Navigate to `http://localhost:5173`

## 📊 Analytics Setup

1. **Get Google Analytics ID**:
   - Go to [Google Analytics](https://analytics.google.com)
   - Create a new property
   - Copy your Measurement ID (starts with "G-")

2. **Add to environment**:
   - For local development: Add to `.env` file
   - For production: Add to your hosting platform's environment variables

## 🎨 Customization

### Colors
Update the color scheme in `client/src/index.css`:
```css
:root {
  --primary: hsl(207, 100%, 25%);    /* Deep blue */
  --accent: hsl(25, 95%, 53%);       /* Orange accent */
  /* Add your brand colors here */
}
```

### Content
- **Services**: Update `client/src/components/sections/services-grid.tsx`
- **Testimonials**: Update `client/src/components/sections/testimonials.tsx`
- **Contact Info**: Update contact details in multiple components
- **About Us**: Modify `client/src/pages/about.tsx`

### Images
Replace placeholder images with your own:
- Add images to `client/public/` folder
- Update image paths in components
- Optimize images for web (WebP format recommended)

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images and fonts
- Fast loading on mobile networks

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data for search engines
- XML sitemap (can be generated)
- Fast loading speeds

## 📞 Contact Integration

The website includes multiple contact methods:
- **Phone**: +254 793 382 838
- **Email**: info@henoxbusiness.co.ke
- **WhatsApp**: Integrated click-to-chat
- **Contact Form**: With email validation

## 🛡️ Security

- HTTPS enforced
- Form validation and sanitization
- No sensitive data in frontend code
- Secure headers configuration

## 📄 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions about the website:
- **Email**: tech@henoxbusiness.co.ke
- **Phone**: +254 793 382 838
- **GitHub Issues**: Use the repository issues tab

## 📄 License

© 2025 Henox Business Consultant Limited. All rights reserved.

---

**Built with ❤️ for Kenya's document digitization leader**