# Premium Personal Portfolio Website

A modern, high-performance personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**, inspired by modern creative agency aesthetics and personal portfolio templates.

![Portfolio Preview](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Key Features

- **Fixed Vertical Sidebar Navigation**: Matching the modern award-winning template design with circular profile badge, live availability indicator, social links, and smooth section jump anchors.
- **Responsive Mobile Navigation**: Sleek glassmorphic mobile drawer with touch backdrop and smooth hamburger animation.
- **Dynamic Typewriter Headline**: Cycling through professional titles with custom accent highlight and blinking cursor.
- **About Section**: High-resolution profile showcase, key metrics/stats counters, narrative bio, and core engineering philosophy pillars.
- **Specialized Services**: Attractive hover-glow cards detailing technical capabilities and deliverables.
- **Skills & Tech Stack**: Interactive category selector (Frontend, Backend, DevOps) with animated percentage progress bars and tool pill cloud.
- **Portfolio & Case Studies**: Categorized project filter (Full Stack, E-Commerce, AI & Tools, UI/UX, Fintech, Productivity) with interactive preview modal, live demo links, and GitHub source links.
- **Career & Education Timeline**: Dual-column trajectory tracking professional experience, milestones, degrees, and cloud certifications.
- **Client Endorsements / Testimonials**: 5-star verified testimonial cards.
- **Interactive Contact Form**: Complete client-side validation, direct contact info cards, response window badge, and celebratory confetti burst upon dispatch.
- **Theme Switcher**: Smooth Dark / Light mode toggle with persistent `localStorage` memory.
- **Scroll Progress & Back-to-Top**: Reading progress bar and responsive floating action button.

---

## 🛠️ Content Customization

All personal information, projects, skills, services, and social links are centrally configured in **`src/data/portfolioData.js`**.

To customize the website for yourself:
1. Open `src/data/portfolioData.js`.
2. Update:
   - `fullName`: Your name
   - `professionalTitles`: List of titles to type out in the hero section
   - `avatar` & `aboutImage`: Image URLs
   - `email` & `phone`: Contact details
   - `socials`: Your GitHub, LinkedIn, Twitter/X, Instagram URLs
   - `skillsData`: Your tech stack and skill levels
   - `projectsData`: Your projects, descriptions, tags, and URLs
   - `experienceData` & `educationData`: Your career history and credentials
   - `testimonialsData`: Client reviews or endorsements

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/davidoladoyinbo/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
npm run build
```
The optimized production bundle will be output to the `dist/` directory.

---

## 📄 License
MIT © David Oladoyinbo
