# Yaara Design - Website Specification

## 1. Project Overview
- **Project Name**: Yaara Design Website
- **Type**: Multi-section single-page fashion brand website
- **Core Functionality**: A modern, mobile-first fashion portfolio website for a costume/fashion designer with enquiry functionality
- **Target Users**: Young adults, women, performers seeking unique designer outfits and custom costumes

## 2. UI/UX Specification

### Layout Structure
- **Header**: Fixed navigation with logo, menu links, CTA button
- **Hero Section**: Full-width with headline, subheadline, CTA
- **Services Preview**: Horizontal scrollable cards on mobile, grid on desktop
- **About Section**: Split layout with image and text
- **Gallery Section**: Masonry/grid style portfolio
- **Services Full Page**: Detailed service cards
- **Contact Section**: Form + social links
- **Footer**: Brand info, quick links, social

### Responsive Breakpoints
- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3-4 columns)

### Visual Design

#### Color Palette
- **Primary**: #2C2C2C (Charcoal)
- **Secondary**: #F5F0EB (Warm Cream)
- **Accent**: #D4A574 (Warm Beige/Gold)
- **Accent Light**: #E8DDD4 (Soft Blush)
- **Background**: #FDFBF9 (Off White)
- **Text Primary**: #2C2C2C
- **Text Secondary**: #6B6B6B
- **Text Light**: #FFFFFF
- **Border**: #E5E0DB

#### Typography
- **Headings**: 'Cormorant Garamond', serif (elegant, editorial)
- **Body**: 'Jost', sans-serif (modern, clean)
- **Font Sizes**:
  - H1: 56px (desktop), 36px (mobile)
  - H2: 42px (desktop), 28px (mobile)
  - H3: 24px (desktop), 20px (mobile)
  - Body: 16px
  - Small: 14px

#### Spacing System
- Section padding: 100px vertical (desktop), 60px (mobile)
- Container max-width: 1200px
- Card padding: 32px
- Gap between elements: 24px

#### Visual Effects
- Subtle shadows: 0 8px 32px rgba(44,44,44,0.08)
- Hover transitions: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Scroll animations: fade-in-up with stagger
- Image hover: scale(1.03)
- Button hover: background shift with subtle lift
- Smooth scroll behavior

### Components

#### Navigation
- Logo: "YAARA" in Cormorant Garamond + "DESIGN" small
- Menu links: Home, About, Services, Gallery, Contact
- CTA button: "Order Now"
- Mobile: Hamburger menu with slide-in drawer

#### Hero Section
- Background: Soft cream with subtle pattern overlay
- Decorative element: Hand-drawn style border
- Headline: "Custom or flourish Fashion Made With Love"
- Subheadline: "Handcrafted designer outfits tailored to your unique style"
- CTA: "Order Your Outfit" button
- Tagline badge: "Made with love 🧶"

#### Services Cards
- Icon (emoji or CSS)
- Service title
- Short description
- "Know More" link

#### Gallery Grid
- Masonry-style layout
- Hover: Overlay with "View" text
- Categories: All, Outfits, Costumes, Styling

#### About Section
- Large editorial image placeholder
- Brand story text
- Designer philosophy

#### Contact Section
- Enquiry form: Name, Phone, Service Type, Message
- WhatsApp button (floating)
- Instagram link
- Response message

#### Footer
- Brand logo
- Quick links
- Instagram handle: @yaaraadesigns
- Copyright: © Yaara Design

## 3. Functionality Specification

### Core Features
1. **Smooth Scroll Navigation**: Click links to scroll to sections
2. **Mobile Menu**: Hamburger toggle with animated drawer
3. **Gallery Filter**: Filter by category (CSS-based)
4. **Contact Form**: Form validation with visual feedback
5. **Floating WhatsApp**: Fixed position button
6. **Scroll Animations**: Intersection Observer for fade effects
7. **Parallax**: Subtle parallax on hero section

### User Interactions
- Hover effects on all cards and buttons
- Form field focus states
- Menu active state based on scroll position
- Image lazy loading placeholders

### Edge Cases
- Form validation: Required fields, phone number format
- Empty gallery: Show placeholder message
- Long text: Truncate with ellipsis

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] Soft neutral cream/beige palette applied
- [ ] Elegant serif headings visible
- [ ] All 5 main sections present
- [ ] Gallery grid displays properly
- [ ] Floating WhatsApp button visible
- [ ] Mobile menu works on small screens

### Functional Checkpoints
- [ ] Navigation scrolls to sections smoothly
- [ ] Mobile hamburger menu toggles
- [ ] Contact form validates and shows feedback
- [ ] WhatsApp link opens correctly
- [ ] All hover animations work

### SEO Checkpoints
- [ ] Meta description present
- [ ] Title tag present
- [ ] Proper heading hierarchy
- [ ] Alt text on images

## 5. Content

### Hero Section
- Headline: "Custom Fashion Made With Love"
- Subheadline: "Handcrafted designer outfits and custom costumes tailored to your unique style. Every piece tells a story of creativity and craftsmanship."
- CTA: "Order Your Outfit"
- Tagline: "Made with love 🧶"

### Services (4)
1. **Custom Outfits**: "Bespoke clothing designed and stitched exclusively for you"
2. **Designer Wear**: "Ready-to-wear collections featuring contemporary elegance"
3. **Costume Design**: "Custom costumes for performances, events, and special occasions"
4. **Personal Styling**: "One-on-one consultation to curate your perfect wardrobe"

### About Section
- Title: "The Story of Yaara Design"
- Content: "Yaara Design was born from a passion for creating beautiful, one-of-a-kind fashion pieces. We believe that every person deserves to wear something that reflects their unique personality and style. Our approach combines traditional craftsmanship with contemporary design, resulting in outfits that are both timeless and uniquely yours. Each piece is made with love, attention to detail, and a commitment to quality."

### Gallery Categories
- All
- Custom Outfits
- Designer Wear
- Costume Designs

### CTA Texts
- "Design Your Dream Outfit"
- "Start Your Custom Order"
- "Let's Create Something Beautiful"

### Contact Form
- Fields: Name, Phone Number, Service Interested In, Message
- Submit button: "Send Enquiry"
- Success message: "Thank you! We'll get back to you soon."

### Footer
- Instagram: @yaaraadesigns
- Copyright: © Yaara Design

### SEO Keywords
- Costume designer
- Fashion designer
- Custom outfits
- Designer wear
- Personalized fashion styling
- Handcrafted fashion
