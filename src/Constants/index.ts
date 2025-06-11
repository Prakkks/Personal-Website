export const titles = [
  "Electronics, Communication and Information Engineer",
  "Aspiring Web Developer",
  "ML/Robotics Learner"
];


export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Education',
    href: '#education',
  },
  {
    id: 4,
    name: 'Certifications',
    href: '#internship',
  },
  {
    id: 5,
    name: 'Projects',
    href: '#project',
  },
  {
    id: 6,
    name: 'Contact',
    href: '#contact',
  },

];


type Vec3 = [number, number, number];

interface Sizes {
  deskScale: number;
  deskPosition: Vec3;
  cubePosition: Vec3;
  reactLogoPosition: Vec3;
  ringPosition: Vec3;
  targetPosition: Vec3;
}

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean,
  isTab: boolean
): Sizes => {
  return {
    deskScale: isSmall ? 0.6 : isMobile ? 0.7 : isTab ? 0.8 : isTablet ? 0.9 : 1,
    deskPosition: isSmall? [0,8.5,0] : isMobile ? [2, 3.5, 0] : [2, 0, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};


export const myProjects = [
  {
    category: 'Web Development',
    title: 'Podcastr - AI Podcast Platform',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    category: 'Web Development',
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    category: 'Web Development',
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    category: 'Machine Learning',
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    category: 'Data Science',
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const EducationHistory = [
  {
    id: 1,
    name: 'Kantipur Engineering College',
    pos: ' Bachelor of Engineering in Electronics, Communication and Information',
    duration: '2020 - 2025',
    title: "Completed my undergraduate studies with a focus on software development, data structures, and emerging technologies like AI and web-based systems.",
    icon: '/public/assets/keclogo.jpg',
    animation: 'Action-Salute',
  },
  {
    id: 2,
    name: 'Nepal Police School',
    pos: '+2 Science',
    duration: '2018 - 2020',
    title: "Completed higher secondary education with a major in Science acheiving CGPA 3.63, developing a strong foundation in Science and Mathematics.",
    icon: '/assets/NPSlogo.png',
    animation: 'Action-Victory',
  },
  {
    id: 3,
    name: 'New Vision Academy ',
    pos: 'Secondary Education Examination (SEE)',
    duration: '2018',
    title: "Completed my secondary education with 3.70 GPA, where I built strong academic habits and participated in various extracurricular activities.",
    icon: '/assets/nva.jpg',
    animation: 'Action-Idle',
  },
];


export const skill_set =[
    { name: 'HTML', icon: 'assets/icons/html-5.png' },
    { name: 'CSS', icon: '/assets/icons/css-3.png' },
    { name: 'JavaScript', icon: '/assets/icons/js.png' },
    { name: 'ReactJS', icon: '/assets/icons/structure.png' },
    { name: 'ThreeJS', icon: '/assets/icons/three.png' },
    { name: 'TailwindCSS', icon: '/assets/icons/tw.png' },


    { name: 'MySQL', icon: '/assets/icons/mysql.png' },


    { name: 'Python', icon: 'assets/icons/python.png' },
    { name: 'TensorFlow', icon: 'assets/icons/tensorflow.png' },
    { name: 'Scikit-Learn', icon: 'assets/icons/skl.png' },
    { name: 'MediaPipe', icon: '/assets/icons/mediapipe.webp' },
    { name: 'OpenCV', icon: 'assets/icons/opencv.png' },
    { name: 'Robotics', icon: '/assets/icons/robo.png' },

];

  export const internships = [
    { id: 1, title: "Index IT Hub Nepal", period: "Dec 2024- Feb 2025", role: "Data & ML Intern" },
    { id: 2, title: "Nepal Telecom", period: "Apr - May 2024", role: "Telecommunication and Networking Intern" },
  ];

  export const certifications = [
  { id: 1, title: "Data Science with Python", provider: "Evolve IT Hub Nepal", date: " Nov 2024" , link:""},
  { id: 2, title: "Become a Python Master", provider: "Programiz", date: "Mar 2025" , link:"https://programiz.pro/certificates/BDB509F19222"},
  { id: 3, title: "Master DSA with Python", provider: "Programiz", date: "June 2025" , link:"https://programiz.pro/certificates/549784EAA0C8"},
   { id: 4, title: "AWS Cloud Clubs Generative AI Camper", provider: "AWS User Group", date: "Jul 2024" , link:"https://www.credly.com/badges/580afe3c-2372-407f-8d7c-3aad1b318e60/linked_in_profile"},
  { id: 5, title: "Learn SQL Basis", provider: "Programiz", date: "Mar 2025" , link:"https://programiz.pro/certificates/080A4C117D53"},
  { id: 6, title: "AWS Cloud Club Nepal Cohort-I ", provider: "AWS Cloud Club Nepal", date: "Sep 2024" , link:""},
];

