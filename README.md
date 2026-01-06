# EduMax Kids - Premier Primary School Website

A modern, elegant website for EduMax Kids primary school built with Next.js 14 and Tailwind CSS. Designed for GitHub Pages static hosting.

![EduMax Kids](https://img.shields.io/badge/EduMax-Kids-1B4332?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- **Modern Design**: Clean, sophisticated aesthetic with warm neutral color palette
- **Responsive**: Fully responsive across all devices
- **Static Export**: Optimized for GitHub Pages deployment
- **Performance**: Fast loading with optimized images
- **SEO Friendly**: Meta tags and semantic HTML
- **Interactive Gallery**: Filterable image gallery with lightbox
- **WhatsApp Integration**: Quick chat functionality
- **Contact Form**: Direct WhatsApp inquiry submission

## 🎨 Design System

### Color Palette
- **Primary**: Deep Forest Green (#1B4332)
- **Secondary**: Warm Terracotta (#C17F59)
- **Accent**: Soft Sage (#A7C4A0)
- **Background**: Warm Cream (#FEFAE0)
- **Text**: Charcoal (#2D3436)

### Typography
- **Headings**: DM Serif Display
- **Body**: Inter

## 📁 Project Structure

```
EduMax-Kids/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About page
│   ├── gallery/page.tsx    # Gallery with filters
│   ├── admissions/page.tsx # Admissions page
│   ├── contact/page.tsx    # Contact with map
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with socials
│   ├── WhatsAppWidget.tsx  # Floating WhatsApp button
│   ├── Logo.tsx            # Logo component
│   ├── GalleryFilter.tsx   # Gallery filter client component
│   └── ContactForm.tsx     # Contact form client component
├── public/
│   └── images/
│       └── principal.png   # Smt. Ratna's photo
├── next.config.js          # Static export config
├── tailwind.config.ts      # Tailwind configuration
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/UtkarshBhardwaj007/EduMax-Kids.git

# Navigate to project directory
cd EduMax-Kids

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

```bash
# Create static export
npm run build
```

The static files will be generated in the `out` directory.

## 📤 Deployment to GitHub Pages

1. **Configure Repository Settings**:
   - Go to your repository Settings > Pages
   - Set source to "GitHub Actions"

2. **Create GitHub Actions Workflow**:
   Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
          
  deploy:
    needs: build-and-deploy
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

3. **Push to GitHub**:
```bash
git add .
git commit -m "Deploy EduMax Kids website"
git push origin main
```

## 📱 Contact Information

- **Phone**: +91 99588 64300
- **Email**: edumaxkids2024@gmail.com
- **Address**: Plot no. 806, Sec 55, Faridabad, Haryana, India
- **WhatsApp**: [Chat Now](https://wa.me/919958864300)

## 👩‍🏫 Principal

**Smt. Ratna** - Founder & Principal
- B.Sc., M.Sc., B.Ed.
- 25+ years of teaching experience

## 📄 License

This project is proprietary and belongs to EduMax Kids.

---

Made with ❤️ for Quality Education

