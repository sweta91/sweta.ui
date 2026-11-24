'use client';

import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  MonitorSmartphone,
  Palette,
  X,
  Database,
  CreditCard,
  ExternalLink,
} from 'lucide-react';

const email = 'swetapatil1991@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/sweta-patil-a5711a69/';
const githubUrl = 'https://github.com/sweta91';
const behanceUrl = 'https://www.behance.net/swetapatil';

const skillGroups = [
  {
    title: 'Frontend development',
    icon: Code2,
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'jQuery'],
  },
  {
    title: 'UI engineering & design',
    icon: Palette,
    skills: ['Responsive design', 'Pixel-perfect UI', 'Figma', 'Accessibility', 'Flexbox & Grid', 'Tailwind CSS', 'Bootstrap', 'BEM'],
  },
  {
    title: 'Backend, data & integrations',
    icon: Database,
    skills: ['REST API integration', 'Supabase', 'Supabase Database', 'Database fundamentals', 'Payment integration', 'Razorpay'],
  },
  {
    title: 'Tools & modern workflow',
    icon: MonitorSmartphone,
    skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'WordPress', 'Generative AI', 'Prompt engineering', 'Google Stitch'],
  },
];

const projects = [
  {
    number: '01',
    name: 'MediBook',
    type: 'Healthcare platform · Next.js',
    description: 'A healthcare appointment platform featuring doctor discovery, specialty filters, doctor profiles and appointment-booking flows. Built as a hands-on product project.',
    tags: ['Next.js', 'React', 'TypeScript', 'SCSS', 'REST API'],
    status: 'In development',
    tone: 'blue',
    href: 'https://github.com/sweta91/medibook-healthcare-platform',
    linkLabel: 'View MediBook repository',
  },
  {
    number: '02',
    name: 'React fundamentals',
    type: 'React learning project',
    description: 'A practical showcase of React fundamentals, including component-based UI, props, state, event handling and reusable interface patterns.',
    tags: ['React', 'JavaScript', 'Components', 'State'],
    status: 'Learning project',
    tone: 'violet',
    href: githubUrl,
    linkLabel: 'Explore GitHub projects',
  },
  {
    number: '03',
    name: 'React website UI',
    type: 'Responsive website · React',
    description: 'A frontend website showcase focused on responsive layouts, reusable sections, interactive elements and consistent UI implementation.',
    tags: ['React', 'Responsive UI', 'CSS', 'Reusable components'],
    status: 'Frontend showcase',
    tone: 'mint',
    href: githubUrl,
    linkLabel: 'Explore GitHub projects',
  },
];

const experience = [
  {
    role: 'Senior UI Developer / Frontend Engineer',
    period: '10+ years of experience',
    description: 'Creating responsive, scalable web interfaces and translating product requirements and design systems into polished user experiences. Focused on frontend engineering, UI quality, usability and maintainable components.',
  },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
