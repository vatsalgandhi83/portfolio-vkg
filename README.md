# Portfolio Website - Vatsal Kirtikumar Gandhi

A modern, responsive portfolio website built with Next.js 14 and TypeScript, showcasing my professional experience, education, skills, and projects as a Software Engineer pursuing an MS in Software Engineering at San Jose State University.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app) <!-- Update with your actual URL -->

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Sections](#-sections)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contact](#-contact)
- [License](#-license)

## ✨ Features

- **Responsive Design** - Fully responsive across all devices and screen sizes
- **Modern UI/UX** - Clean, professional design with smooth hover animations
- **Interactive Cursor** - Custom cursor with dynamic background effects
- **Resume Viewer** - Embedded PDF resume with download functionality
- **Timeline Design** - Professional timeline layout for education and experience
- **Dynamic Content** - JSON-based content management for easy updates
- **SEO Optimized** - Proper meta tags and structured data
- **Performance Focused** - Optimized for fast loading and smooth interactions
- **TypeScript** - Full type safety throughout the application
- **Modular Architecture** - Clean, maintainable code structure

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules with custom properties
- **Icons:** Lucide React
- **Fonts:** Geist (Vercel's font family)
- **Deployment:** Vercel (recommended)
- **Version Control:** Git & GitHub

## 🚀 Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vatsalgandhi83/portfolio-vkg.git
   cd portfolio-vkg
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📁 Project Structure

```
portfolio-vkg/
├── public/
│   ├── resume.pdf              # Your resume file
│   ├── sjsu-transcript.pdf     # SJSU transcript (optional)
│   ├── kiit-transcript.pdf     # KIIT transcript (optional)
│   ├── favicon.ico
│   └── images/                 # Project images and assets
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── education/          # Education page with timeline
│   │   ├── experience/         # Experience page with career progression
│   │   ├── projects/           # Projects showcase
│   │   ├── resume/             # Resume viewer with embedded PDF
│   │   ├── skills/             # Skills organized by categories
│   │   ├── layout.tsx          # Root layout with navigation
│   │   ├── globals.css         # Global styles and CSS variables
│   │   └── page.tsx            # Home page with introduction
│   ├── components/             # Reusable components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── CustomCursor.tsx    # Interactive cursor component
│   │   └── ...
│   ├── data/                   # JSON data files
│   │   ├── education.json      # Educational background
│   │   ├── experience.json     # Professional work history
│   │   ├── projects.json       # Featured projects
│   │   └── skills.json         # Technical skills by category
│   └── styles/                 # CSS modules
│       ├── globals.css         # Global styles and theme
│       └── Page.module.css     # Component-specific styles
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## 📖 Sections Overview

### 🏠 Home
- Professional introduction and summary
- Social media links (LinkedIn, GitHub)
- Contact information
- Animated hero section with call-to-action

### 🎓 Education
- **MS in Software Engineering** - San Jose State University (2025-2026)
- **B.Tech in Computer Science** - Kalinga Institute of Industrial Technology (2020-2024)
- University logos and details
- Relevant coursework categorized by specialization
- GPA information with professional styling
- Optional transcript viewing functionality

### 💼 Experience
- **Software Engineering Intern** - Equal Identity Pvt. Ltd. (2023-2024)
- Internal timeline showing career progression within companies
- Detailed responsibilities and technical achievements
- Technology stacks used in each role
- Professional accomplishments

### 🛠 Skills
Technical skills organized into categories:
- **Frontend:** React.js, TypeScript, HTML, CSS, Material-UI
- **Backend:** Java, Python, Node.js, FastAPI, Spring Boot
- **Databases:** MySQL, PostgreSQL, MongoDB, DynamoDB
- **Cloud & DevOps:** AWS services, Docker, Kubernetes, CI/CD
- **Tools:** Git, IntelliJ, Postman, JIRA
- Interactive skill tags with hover effects

### 🚀 Projects
Featured projects including:
- **TravelSwarm AI-Powered Travel Planner** - Distributed backend system with LLM integration
- **SJ Hopes Shelter Coordination Platform** - Full-stack web application
- Technology highlights and GitHub repository links
- Project descriptions with technical details

### 📄 Resume
- Embedded PDF viewer for immediate viewing
- Download functionality for easy access
- Professional resume display without external redirects
- Mobile-responsive design

## 🎨 Customization

### Update Personal Information

1. **Edit JSON data files** in `src/data/` directory:
   - `education.json` - Update university details, coursework, GPA
   - `experience.json` - Add work experience, responsibilities
   - `projects.json` - Showcase your projects with descriptions
   - `skills.json` - Update technical skills by category

2. **Replace resume and transcripts**:
   - Replace `public/resume.pdf` with your updated resume
   - Add transcript PDFs if using transcript viewing feature
   - Update file paths in education.json accordingly

3. **Modify home page content**:
   - Edit `src/app/page.tsx` for personal introduction
   - Update social media links and contact information
   - Customize the hero section content

### Styling Customization

- **Colors and themes:** Modify CSS custom properties in `src/app/globals.css`
- **Component styles:** Update `src/styles/Page.module.css`
- **Typography:** Customize font sizes, weights, and spacing
- **Animations:** Adjust hover effects and transitions

### Interactive Features

- **Custom Cursor:** Modify `src/components/CustomCursor.tsx`
- **Background Effects:** Customize cursor trail and spotlight effects
- **Hover States:** Adjust card hover animations and scaling

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration
4. Automatic deployments on every push

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Deployment Platforms

This Next.js application can also be deployed on:
- **Netlify** - Static site deployment
- **AWS Amplify** - Full-stack deployment
- **Railway** - Container-based deployment  
- **DigitalOcean App Platform** - Managed deployment

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript language reference
- [CSS Modules](https://github.com/css-modules/css-modules) - Modular CSS approach

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - feedback and contributions are welcome!

## 📧 Contact

**Vatsal Kirtikumar Gandhi**
- 📧 Email: vats.gandhi.83@gmail.com
- 📱 Phone: (408) 210-9488
- 💼 LinkedIn: [vatsalgandhi83](https://linkedin.com/in/vatsalgandhi83)
- 🔗 GitHub: [vatsalgandhi83](https://github.com/vatsalgandhi83)
- 📍 Location: San Jose, CA

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **Star this repository if it helped you build your portfolio!**

Built with ❤️ using Next.js, TypeScript, and modern web technologies.