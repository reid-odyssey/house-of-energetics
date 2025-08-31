# House of Energetics - Marketing Site

A modern, responsive marketing website built with Next.js, Tailwind CSS, and shadcn/ui components. Designed for deployment on Webflow Cloud via GitHub integration.

## Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **TypeScript** for type safety
- **Responsive design** optimized for all devices
- **Clean, modern UI** inspired by successful food/wellness brands
- **Webflow deployment ready**

## Design Inspiration

The site follows clean, modern design patterns similar to successful wellness brands, featuring:
- Minimal hero sections with bold typography
- Product showcase with flavor/variant cards
- Clean navigation and mobile-responsive layout
- Focus on health benefits and lifestyle messaging
- Professional color scheme with green accent colors

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd house-of-energetics
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Deployment

This project is configured for deployment on Webflow Cloud through GitHub integration:

- Static export enabled (`output: 'export'`)
- Custom dist directory for Webflow compatibility
- Trailing slashes enabled
- Optimized for static hosting

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Header navigation
│   ├── hero-section.tsx  # Hero/landing section
│   ├── product-showcase.tsx # Product display
│   ├── features-section.tsx # Features/benefits
│   └── footer.tsx        # Footer component
├── lib/                  # Utility functions
└── public/              # Static assets
```

## Customization

### Brand Colors
Update the color scheme in `tailwind.config.js` and component files to match your brand.

### Content
Modify the content in each component file:
- Hero messaging in `components/hero-section.tsx`
- Product information in `components/product-showcase.tsx`
- Company information in `components/footer.tsx`

### Styling
The site uses Tailwind CSS with shadcn/ui components. Customize styles by:
- Updating Tailwind classes in components
- Modifying the design system in `tailwind.config.js`
- Adding custom CSS in `app/globals.css`

## License

This project is private and proprietary.