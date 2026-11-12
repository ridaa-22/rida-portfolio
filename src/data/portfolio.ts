import { Globe, LineChart, type LucideIcon } from 'lucide-react';

export const SITE_NAME = 'Rida';
export const SITE_TITLE = 'Full-Stack Web Developer & Data Science Enthusiast';
export const SITE_BIO =
  'Web development student at Aptech Pakistan with hands-on experience in MERN stack, WordPress, and data science. Experienced in building full projects end-to-end, from data pipelines to e-commerce stores.';
export const CONTACT_EMAIL = 'ridaaslam400@gmail.com';
export const CONTACT_LOCATION = 'Karachi, Pakistan';
export const GITHUB_URL = 'https://github.com/ridaa-22';

export const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'GitHub Stats', href: '#github-stats' },
  { label: 'Contact', href: '#contact' },
];

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Web Development',
    icon: Globe,
    skills: [
      'MERN Stack',
      'React',
      'Node.js',
      'Laravel',
      'ASP.NET Core',
      'PHP',
      'JavaScript',
      'Tailwind / Bootstrap',
      'Figma',
    ],
  },
  {
    title: 'Data Science & Tools',
    icon: LineChart,
    skills: [
      'Python',
      'Pandas',
      'Apache Spark',
      'FastAPI',
      'MongoDB',
      'MySQL',
      'Git / GitHub',
      'Framer Motion',
      'Hostinger',
    ],
  },
];

export interface Project {
  title: string;
  summary: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl: string;
}

export const projects: Project[] = [
  {
    title: 'DineIQ Analytics',
    summary:
      'Restaurant analytics platform built with 11 relational tables, Python and Spark ML pipelines, a FastAPI service, and a Node + MongoDB backend.',
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Python', 'Apache Spark', 'FastAPI', 'Node.js', 'MongoDB', 'MySQL'],
    sourceUrl: GITHUB_URL,
  },
  {
    title: 'Naqsh Handicraft Store',
    summary:
      'A live e-commerce store for handmade bangles, built on Hostinger with WordPress and WooCommerce and a cash-on-delivery checkout.',
    image: '/images/herpc4.jpg',
    tags: ['WordPress', 'WooCommerce', 'Hostinger'],
    sourceUrl: GITHUB_URL,
  },
  {
    title: 'Online Aptitude Test System',
    summary:
      'A multi-role ASP.NET Core MVC and SQL Server application with timed test flows and Excel exports.',
    image: 'https://images.pexels.com/photos/9159001/pexels-photo-9159001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['ASP.NET Core', 'MVC', 'SQL Server', 'Excel Export'],
    sourceUrl: GITHUB_URL,
  },
  {
    title: 'React & ASP.NET Core CRUD Apps',
    summary:
      'Integrated dashboards that connect React front ends to ASP.NET Core APIs through Axios, with Framer Motion animations.',
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React', 'ASP.NET Core', 'Axios', 'Framer Motion'],
    sourceUrl: GITHUB_URL,
  },
];

export const languageBreakdown = [
  { name: 'JavaScript', percent: 38, color: 'bg-yellow-300' },
  { name: 'Python', percent: 27, color: 'bg-amber-300' },
  { name: 'PHP', percent: 17, color: 'bg-violet-400' },
  { name: 'C#', percent: 12, color: 'bg-blue-400' },
  { name: 'Other', percent: 6, color: 'bg-cyan-300' },
];
