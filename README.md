# 🚀 Rashmi Jayawardhana - Portfolio
![Screenshot (5)](https://github.com/user-attachments/assets/e00170af-18ee-4c39-91d7-cd41eb2e0e16)

Welcome to my portfolio! I am a **Full-Stack Software Engineer** based in Panadura, Sri Lanka, and a final-year IT undergraduate at the **University of Moratuwa**. I have a year of professional experience building production web and mobile applications with React, Angular, React Native, Spring Boot, and Node.js, and I am currently looking for a Full Stack Software Engineer role.

## 🌐 Live Demo
Check out my portfolio here: **[portfolio-rashmi-jayawardhana.vercel.app](https://portfolio-rashmi-jayawardhana.vercel.app/)**

## 🔧 Technologies Used
- **Framework:** Next.js 15 (App Router), React 19
- **Styling:** Tailwind CSS
- **Animations:** Motion (formerly Framer Motion)
- **Contact form:** Web3Forms
- **Deployment:** Vercel

## 🎨 Features
- **Light theme by default** with a dark mode toggle that remembers the visitor's choice
- **Filterable project showcase** by category (Full-Stack, Mobile, Cloud & DevOps, Machine Learning, QA & Testing, Research)
- **Experience & Education timeline** covering professional work, degree, and DevOps training
- **Core competencies** grouped by languages, frontend, backend, databases, cloud, and tools
- **Active section highlighting** in the navbar as you scroll, plus a back-to-top button
- **Scroll-based animations** to reveal content as it comes into view
- **Contact form** with sending, success, and error states
- **Resume download** straight from the hero section
- **Fully responsive**, with an eye-friendly dark theme designed for comfortable reading

## 📂 Getting Started
To run this project locally, follow these steps:

### 1️⃣ Clone the repository:
```bash
git clone https://github.com/rashmiJayawardhana/rashmi_jayawardhana_portfolio.git
cd rashmi_jayawardhana_portfolio
```

### 2️⃣ Install dependencies:
```bash
npm install
```

### 3️⃣ Start the development server:
```bash
npm run dev
```
Now, open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts
```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # check code quality
```

## 🗂️ Project Structure
```
app/
  components/      UI components (sections plus shared pieces like Section, SectionHeading, ProjectCard)
  layout.js        root layout, fonts, and page metadata
  page.js          assembles the sections in order
assets/            images, indexed in assets.js
data/
  content.js       all written content: projects, experience, skills, services
  profile.js       contact email, social links, and resume path
hooks/             reusable logic: theme, scroll state, active section, contact form
lib/
  contactService.js  sends contact form messages through Web3Forms
public/            resume PDF and static background images
```

The code follows SOLID principles: content is kept separate from components, logic lives in hooks and services, and shared UI is built from reusable components.

## ✏️ Updating Content
Most updates do not require touching any component code:
- **Projects, experience, education, skills, services:** edit `data/content.js`
- **Email, GitHub, LinkedIn, resume path:** edit `data/profile.js`
- **Resume file:** replace the PDF in `public/` (keep the filename in `profile.js` in sync)
- **Theme colours:** edit the `colors` section of `tailwind.config.mjs`

Adding a project with a new category automatically adds a matching filter chip.

## 🚀 Deployment
This project is deployed on Vercel. Every push to `main` triggers a new deployment. To deploy your own version, use the [Vercel platform](https://vercel.com/new).

For more details, check out the [Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying).

---

This portfolio is designed to provide a clean, professional experience with **smooth animations**, a **light and dark theme**, and an **easy-to-maintain codebase**.
