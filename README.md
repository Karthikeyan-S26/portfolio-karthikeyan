
# Karthikeyan S - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing the skills, projects, and achievements of Karthikeyan S, a passionate IT student and full-stack developer.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance Focused**: Optimized images, lazy loading, and efficient code
- **Accessibility**: ARIA attributes and keyboard navigation support

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation with smooth scrolling
│   ├── Hero.tsx            # Hero section with typewriter effect
│   ├── About.tsx           # About section with profile info
│   ├── Skills.tsx          # Skills showcase with progress bars
│   ├── Projects.tsx        # Project portfolio with modals
│   ├── Achievements.tsx    # Timeline of achievements
│   ├── Contact.tsx         # Contact form with validation
│   └── Footer.tsx          # Footer with social links
├── pages/
│   ├── Index.tsx           # Main landing page
│   └── NotFound.tsx        # 404 error page
├── hooks/
│   └── use-toast.ts        # Toast notification hook
├── lib/
│   └── utils.ts            # Utility functions
└── App.tsx                 # Main app component
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Clone and Install
```bash
# Clone the repository
git clone https://github.com/karthikeyan/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Customization

### Colors & Themes
The color scheme can be customized in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))'
  },
  // Add custom colors here
}
```

### Content Updates
- **Personal Info**: Update `src/components/About.tsx`
- **Skills**: Modify `src/components/Skills.tsx`
- **Projects**: Update project data in `src/components/Projects.tsx`
- **Achievements**: Edit timeline in `src/components/Achievements.tsx`

### SEO & Meta Tags
Update SEO information in `index.html`:
```html
<title>Your Name - Full Stack Developer</title>
<meta name="description" content="Your description" />
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Build and deploy: `npm run build && npm run deploy`

## 📱 Features Overview

### Navigation
- Sticky navbar with scroll effects
- Smooth scrolling to sections
- Active section highlighting
- Mobile-responsive menu

### Hero Section
- Typewriter animation effect
- Call-to-action buttons
- Scroll indicator
- Gradient backgrounds

### Skills Section
- Interactive skill cards
- Progress bars with animations
- Hover effects
- Grid layout

### Projects Section
- Project cards with hover effects
- Modal popups for detailed views
- Tech stack tags
- External links to demos and code

### Contact Form
- Form validation
- Loading states
- Error handling
- Success feedback

## 🔧 Performance Optimizations

- **Image Optimization**: WebP images with fallbacks
- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Components and images loaded on demand
- **Minification**: CSS and JS minification in production
- **Caching**: Optimized caching headers

## 📈 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Structured data (JSON-LD)
- Sitemap generation
- Robot.txt configuration

## 🛡️ Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Contact

**Karthikeyan S**
- Email: karthikeyan.s@email.com
- LinkedIn: [linkedin.com/in/karthikeyan](https://linkedin.com/in/karthikeyan)
- GitHub: [github.com/karthikeyan](https://github.com/karthikeyan)

---

Built with ❤️ using React & Tailwind CSS
