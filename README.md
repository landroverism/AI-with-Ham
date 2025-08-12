# AI Training Landing Page

A responsive, accessible landing page for a 1-month AI training program targeting non-technical clients in Kenya.

## Features

- **Responsive Design**: Mobile-first approach with full tablet and desktop support
- **Accessibility**: Semantic HTML, keyboard navigation, ARIA attributes, and alt text
- **Smooth Navigation**: Sticky header with smooth scrolling to sections
- **Interactive Elements**: Expandable roadmap cards, session breakdown accordion, FAQ section
- **Local Payment Integration**: M-Pesa payment information and Kenyan context
- **Downloadable Resources**: PDF brochure and training materials

## Tech Stack

- **React 19** with Vite for fast development
- **Tailwind CSS** for styling with custom teal/sky color scheme
- **No external dependencies** beyond the build tools

## Project Structure

```
src/
├── components/           # React components for each section
│   ├── Header.jsx       # Sticky navigation with mobile menu
│   ├── Hero.jsx         # Main hero section with CTAs
│   ├── About.jsx        # Value proposition and features
│   ├── Roadmap.jsx      # 4-week learning roadmap
│   ├── SessionBreakdown.jsx  # Detailed session accordion
│   ├── Pricing.jsx      # Pricing packages and payment terms
│   ├── Resources.jsx    # Training materials and downloads
│   ├── CapstoneExamples.jsx  # Project examples
│   ├── Testimonials.jsx # Student testimonials
│   ├── FAQ.jsx          # Frequently asked questions
│   ├── Contact.jsx      # Contact form and CTAs
│   └── Footer.jsx       # Footer with links and contact info
├── data/                # Static data files
│   ├── roadmap.js       # 4-week training roadmap data
│   └── pricing.js       # Pricing and package information
├── App.tsx              # Main app component
├── main.tsx             # React entry point
└── index.css            # Global styles and Tailwind imports

public/
└── assets/
    └── 1-Month_AI_Training_for_Non-Techie_Client.pdf  # Training brochure
```

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Content Customization

### Training Brochure
Replace the placeholder PDF at `public/assets/1-Month_AI_Training_for_Non-Techie_Client.pdf` with your actual training brochure.

### Contact Information
Update the contact details in:
- `src/components/Contact.jsx` (email addresses)
- `src/components/Footer.jsx` (phone numbers and social links)

### Payment Information
Update M-Pesa payment details in:
- `src/components/Pricing.jsx` (payment instructions)

### Content Updates
- Roadmap data: `src/data/roadmap.js`
- Pricing data: `src/data/pricing.js`
- Testimonials: `src/components/Testimonials.jsx`
- FAQ content: `src/components/FAQ.jsx`

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels and expanded states for interactive elements
- Keyboard navigation support for all interactive elements
- Focus indicators for better keyboard navigation
- Alt text for all images and icons
- Color contrast ratios meet WCAG guidelines

## Mobile Responsiveness

- Mobile-first design approach
- Hamburger menu for mobile navigation
- Responsive grid layouts that adapt to screen size
- Touch-friendly button sizes and spacing
- Optimized typography scaling across devices

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Performance

- Optimized bundle size with Vite
- Lazy loading for images
- Minimal external dependencies
- Fast loading with efficient CSS

## Deployment

The site is static and can be deployed to any hosting service:
- Netlify
- Vercel
- GitHub Pages
- Traditional web hosting

Build the project with `npm run build` and deploy the `dist/` folder.
