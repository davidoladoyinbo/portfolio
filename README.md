# David Oladoyinbo — Personal Portfolio Website

Personal portfolio website for **David Oladoyinbo**, Computer Science Undergraduate at Crawford University, built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Key Features

- **Fixed Vertical Sidebar Navigation**: Matching the clean award-winning template design with circular profile photo, live availability indicator, social links, and smooth section jump anchors.
- **Responsive Mobile Navigation**: Sleek mobile drawer with touch backdrop and smooth hamburger animation.
- **Dynamic Typewriter Headline**: Cycling through student and developer roles with custom accent highlight and blinking cursor.
- **About Section**: Clean profile presentation, genuine academic timeline, and hands-on learning pillars.
- **Hands-on Capabilities**: Cards detailing web development, cybersecurity support, UI implementation, and Git collaboration.
- **Skills & Learning Focus**: Structured categories (Programming & Web, Cybersecurity & IT Operations, Tools & Workflow).
- **Projects Gallery**: Real projects including personal portfolio build and CBT center security support.
- **Career & Education Timeline**: Features the **Cybersecurity Internship at LASU-18 CBT Center (Jul - Oct 2026)** and **B.Sc. Computer Science at Crawford University (2024 - 2028)**.
- **Contact Form**: Direct contact cards, email inquiry, and interactive message dispatch.
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
