import user_image from './user-image.png';
import link from './link.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import intellij from './intellij.png';
import WebStorm from './WebStorm.png';
import MySQL from './MySQL.png';
import PostgreSQL from './PostgreSQL.png';
import MSSQL from './MSSQL.png';
import androidstudio from './androidstudio.png';
import figma from './figma.png';
import git from './git.png';
import gimp from './gimp.png';
import canva from './canva.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile_img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    link,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    androidstudio,
    intellij,
    WebStorm,
    MySQL,
    MSSQL,
    PostgreSQL,
    figma,
    git,
    gimp,
    canva,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const GITHUB_PROFILE = 'https://github.com/rashmiJayawardhana';
export const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/rashmijayawardhana/';
export const HACKERRANK_PROFILE = 'https://www.hackerrank.com/profile/rashmijayawardh1';
export const EMAIL = 'rashmijayawardhana2001@gmail.com';

export const workData = [
    {
        title: 'Microservices Platform on Managed Kubernetes',
        type: 'Group', year: '2026',
        category: 'Cloud & DevOps',
        description: 'Designed and deployed a five-service e-commerce platform on AWS EKS Fargate with Terraform IaC and GitHub Actions CI/CD. Owned cost management (~50% reduction) and disaster recovery planning.',
        tech: ['Flask', 'Express', 'React', 'AWS EKS', 'Terraform', 'GitHub Actions'],
        link: 'https://github.com/isuruij/CloudMart',
        linkLabel: 'View Code',
    },
    {
        title: 'Project Management System for Construction Companies',
        type: 'Group', year: '2024', org: 'Mentored by LSEG',
        category: 'Full-Stack',
        description: 'Web and mobile platform for five user roles covering project, task, and inventory management, with real-time low-stock and email notifications. Owned the admin/client modules and JWT auth.',
        tech: ['React', 'Tailwind CSS', 'Flutter', 'Spring Boot', 'MySQL', 'Socket.IO'],
        link: 'https://github.com/Jayaweera123/Ascendia-',
        linkLabel: 'View Code',
    },
    {
        title: 'Real-Time Task & Messaging App',
        type: 'Individual', year: '2025',
        category: 'Full-Stack',
        description: 'Real-time messaging app on a hybrid REST/WebSocket architecture with push notifications, optimistic UI updates, offline queue handling, and automatic socket reconnection. Delivered in four days.',
        tech: ['React Native', 'TypeScript', 'Redux Toolkit', 'Node.js', 'Socket.IO', 'MySQL'],
        link: 'https://github.com/rashmiJayawardhana/Real-Time_Tasks_App',
        linkLabel: 'View Code',
    },
    {
        title: 'YouTube Upload Success Predictor for Sri Lankan Creators',
        type: 'Individual', year: '2025',
        category: 'Machine Learning',
        description: 'XGBoost classifier (71.4% accuracy, 0.814 AUC-ROC) on pre-upload video features, using channel-relative labelling to prevent data leakage, with SHAP-based explanations served through Streamlit.',
        tech: ['Python', 'XGBoost', 'SHAP', 'Streamlit'],
        link: 'https://youtube-performance-predictor.streamlit.app/',
        linkLabel: 'Live Demo',
    },
    {
        title: 'QA Test Automation Suite',
        type: 'Group', year: '2025',
        category: 'QA & Testing',
        description: 'Designed UI and API test cases from SRS documents, automated test scenarios, generated Allure reports, and configured CI builds.',
        tech: ['Cypress', 'Cucumber BDD', 'Swagger', 'Allure', 'Jenkins'],
        link: 'https://github.com/GihanShavinda/ITFac_Batch21_Group32',
        linkLabel: 'View Code',
    },
    {
        title: 'Flight Tracking & Travel Management App',
        type: 'Individual', year: '2024',
        category: 'Mobile',
        description: 'Full-stack mobile app for real-time flight tracking with secure authentication and a responsive Android and iOS interface.',
        tech: ['React Native', 'PostgreSQL', 'Zustand', 'Clerk', 'Tailwind CSS'],
        link: 'https://github.com/rashmiJayawardhana/OnTheWay',
        linkLabel: 'View Code',
    },
    {
        title: 'Task Manager Application',
        type: 'Individual', year: '2025',
        category: 'Full-Stack',
        description: 'Task-tracking web app with CRUD operations, status filtering, threaded comments, JWT authentication, and role-based access, containerized with Docker Compose.',
        tech: ['Angular', 'Angular Material', 'Spring Boot', 'Spring Security', 'MySQL'],
        link: 'https://github.com/rashmiJayawardhana/Task_Manager_App',
        linkLabel: 'View Code',
    },
    {
        title: 'Automated Lecture Video Summarization',
        type: 'Group', year: '2025',
        category: 'Research',
        description: 'Co-developed a four-module deep learning pipeline condensing 60-minute lectures into narrated summaries. Owned Keyframe Detection (ResNet-50 + BiLSTM), reaching F1 = 0.87 on a 23,402-segment annotated dataset.',
        tech: ['PyTorch', 'Whisper', 'BERT', 'ViT', 'FastAPI', 'Supabase'],
        link: 'https://github.com/rashmiJayawardhana/lecture-video-summarizer',
        linkLabel: 'View Code',
    },
    {
        title: 'Cost-Performance Trade-offs in Cloud-Based LLM Inference',
        type: 'Individual', year: '2025',
        category: 'Research',
        description: 'Reviewing AI/ML optimization techniques for cloud-based LLM serving across scheduling, deployment architecture, interruptible capacity, sparse models, and prompt reuse, synthesizing them into one cost-versus-latency view.',
        tech: ['Review Paper'],
        link: 'https://drive.google.com/drive/folders/1Q98TZl39vAFWB8EK3BoQdV7gp8YI9LD4?usp=sharing',
        linkLabel: 'Read Paper',
        status: 'In Progress',
    },
]

export const serviceData = [
    { icon: 'web', title: 'Web Development', description: 'Build dynamic, responsive web apps with React, Angular, and Next.js, focused on clean UI and real-time features.' },
    { icon: 'mobile', title: 'Mobile App Development', description: 'Develop cross-platform mobile apps with React Native, Flutter, and Expo, focused on performance and smooth UX.' },
    { icon: 'design', title: 'UI/UX Design', description: 'Design clean, usable interfaces in Figma and translate them into pixel-accurate, accessible UI.' },
    { icon: 'backend', title: 'Backend & Cloud Engineering', description: 'Build REST APIs and microservices with Spring Boot and Node.js, deployed with Docker, AWS, and CI/CD pipelines.' },
]

export const infoList = [
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Experience', description: '1 year as a Full-Stack Software Engineer Intern at Creavint, shipping production web & mobile apps' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Sc. (Hons) in Information Technology, University of Moratuwa (2022 - 2026)' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Projects', description: '10+ individual & team projects across web, mobile, cloud, and machine learning' }
];

export const competencies = [
    { category: 'Languages', items: ['Java', 'C++', 'C', 'Python', 'TypeScript', 'JavaScript'] },
    { category: 'Frontend (Web)', items: ['ReactJS', 'Angular', 'Next.js', 'Angular Material', 'Tailwind CSS', 'HTML', 'CSS'] },
    { category: 'Frontend (Mobile)', items: ['Flutter', 'React Native', 'Expo'] },
    { category: 'Backend', items: ['Spring Boot', 'Node.js', 'Django'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MS SQL', 'MongoDB'] },
    { category: 'Cloud & DevOps', items: ['Docker', 'AWS', 'Firebase', 'GitHub Actions'] },
    { category: 'Tools & Testing', items: ['Figma', 'Cypress', 'Cucumber BDD', 'Git'] },
];

export const experienceData = {
    company: 'Creavint',
    role: 'Full Stack Software Engineer Intern',
    period: 'April 2025 - April 2026',
    points: [
        { type: 'Team', text: 'Contributed to a full-stack Logistics Management platform built with React, React Native, Expo, Spring Boot, PostgreSQL, TypeScript, and Tailwind CSS.' },
        { type: 'Team', text: 'Developed a Food Delivery application with a microservices architecture dockerized on an Ubuntu VPS, using React, React Native, Expo, Spring Boot, and PostgreSQL.' },
        { type: 'Individual', text: 'Built a Blog application with Next.js and Backblaze B2 for MDX content management and cloud image storage, plus a Vehicle Rental mobile app frontend in React Native and Expo.' },
        { type: 'Individual', text: 'Developed custom Perfex CRM modules in PHP, MySQL, and jQuery/AJAX, including CRUD operations, role-based access control, transactional emails, file uploads, public customer portals, and self-healing database migrations.' },
    ],
    tech: ['React', 'React Native', 'Expo', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL'],
};

export const educationData = [
    {
        title: 'B.Sc. (Hons) in Information Technology',
        place: 'University of Moratuwa',
        period: '2022 - 2026',
        description: 'Faculty of Information Technology, Moratuwa, Sri Lanka. Final-year undergraduate, graduating 2026.',
    },
    {
        title: 'Linux Systems Administration & DevOps Engineering',
        place: 'WSO2 Training Program',
        period: '2025',
        description: 'Linux, networking, Docker, AWS, Terraform, Ansible, GitHub Actions, ArgoCD, and OpenSearch. Final project: a microservices e-commerce platform with an AI-powered PC Builder on a full CI/CD pipeline.',
    },
];

export const toolsData = [
    assets.vscode, assets.androidstudio, assets.intellij, assets.WebStorm, assets.git, assets.figma, assets.gimp, assets.canva
];