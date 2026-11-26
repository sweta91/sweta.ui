'use client';

import { useEffect, useState } from 'react';
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher, { type Language } from './LanguageSwitcher';
import { translate } from './translations';


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
  Sparkles,
} from 'lucide-react';



const skillGroups = [
  { title: 'Frontend development', icon: Code2, skills: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'jQuery', 'TypeScript fundamentals'] },
  { title: 'UI engineering', icon: Palette, skills: ['Responsive design', 'Pixel-perfect implementation', 'Figma', 'Accessibility', 'Flexbox & Grid', 'Tailwind CSS', 'Bootstrap', 'BEM'] },
  
{
  title: 'Tools & platforms',
  icon: MonitorSmartphone,
  skills: [
    'Git',
    'GitHub',
    'Vercel',
    'WordPress',
    'REST API integration',
    'VS Code',
    'Supabase Database',
    'Payment Integration',
    'Razorpay',
  ],
},
  { title: 'Emerging technologies', icon: Sparkles, skills: ['Generative AI', 'Prompt engineering', 'AI-assisted development', 'Google Stitch'] },
];

const projects = [
  { number: '01', name: 'Pulseboard', type: 'SaaS analytics dashboard · Next.js', description: 'A functional SaaS analytics dashboard featuring revenue insights, KPI comparisons, customer management, transaction tracking and date filters. Integrated with Supabase and PostgreSQL.', tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL'], status: 'Live', tone: 'teal', href: 'https://pulse-dashboard-saas.vercel.app/' },
  { number: '02', name: 'MediBook', type: 'Healthcare · Next.js', description: 'A healthcare appointment platform concept with doctor discovery, specialty filters, doctor profiles and appointment booking flows.', tags: ['Next.js', 'React', 'TypeScript', 'SCSS'], status: 'In development', tone: 'blue', href: 'https://medibook-healthcare-platform.vercel.app/' },
  { number: '03', name: 'Personal portfolio', type: 'Personal brand · Web', description: 'A portfolio focused on frontend engineering, UI craft, selected work and professional experience.', tags: ['React', 'Next.js', 'UI design'], status: 'Redesigning', tone: 'teal', href: 'https://sweta91.github.io/sweta.ui/' },
];

const experience = [
  { role: 'Senior UI Developer / Frontend Engineer', period: '10+ years of experience', description: 'Building responsive, scalable web interfaces; translating product requirements and design systems into polished user experiences. Add your exact employers, titles and dates here.' },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-language');
    if (saved && ['en', 'es', 'fr', 'de', 'zh'].includes(saved)) setLanguage(saved as Language);
  }, []);
  const changeLanguage = (next: Language) => {
    setLanguage(next);
    window.localStorage.setItem('portfolio-language', next);
  };
  const t = (text: string) => translate(language, text);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
      <header className="topbar wrap">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">S</span><span>SWETA<span className="muted">.PATIL</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
  {['About','Experience','Skills','Work','Contact'].map(item => (
    <a
      key={item}
      href={`#${item.toLowerCase()}`}
      onClick={closeMenu}
    >
      {t(item)}
    </a>
  ))}
   <ThemeSwitcher />
   <LanguageSwitcher language={language} onChange={changeLanguage} />
  <a className="nav-cta" href="mailto:swetapatil1991@gmail.com">
    {t("Let's talk")} <ArrowUpRight size={15}/>
  </a>
</nav>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> {t("AVAILABLE FOR OPPORTUNITIES")} <span className="eyebrow-line"/></div>
          <p className="hero-kicker">{t("Hello, I’m Sweta Patil")}</p>
          <h1>{t("I build digital")}<br/><span className="gradient-text">{t("experiences")}</span><br/>{t("that feel right.")}</h1>
          <p className="hero-description">
            {t("Senior UI Developer & Frontend Engineer with ")}
            <strong>{t("10+ years of experience")}</strong>
            {t(" turning complex ideas into intuitive, responsive and high-performing web experiences.")}
          </p>
          <div className="hero-actions"><a className="button button-primary" href="#work">{t("Explore my work")} <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#contact">{t("Get in touch")} <ArrowDownRight size={17}/></a></div>
          <div className="hero-meta"><span><b>10+</b> {t("years building for the web")}</span><span className="meta-divider"/><span><b>UI × Engineering</b> {t("my sweet spot")}</span></div>
        </div>
        <div className="hero-visual" aria-label="Decorative frontend engineering graphic">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>

<div className="code-window">
  <div className="window-bar">
    <span />
    <span />
    <span />
    <small>sweta.tsx</small>
  </div>

  <div className="code-content">
    <p><i>01</i> <em>const</em> developer = {'{'}</p>
    <p><i>02</i> &nbsp;name: <b>&apos;Sweta Patil&apos;</b>,</p>
    <p><i>03</i> &nbsp;role: <b>&apos;Senior Frontend Engineer&apos;</b>,</p>
    <p><i>04</i> &nbsp;experience: <b>&apos;10+ years&apos;</b>,</p>
    <p><i>05</i> &nbsp;specialization: [</p>
    <p><i>06</i> &nbsp;&nbsp;<b>&apos;React&apos;</b>, <b>&apos;Next.js&apos;</b>,</p>
    <p><i>07</i> &nbsp;&nbsp;<b>&apos;JavaScript&apos;</b>, <b>&apos;TypeScript&apos;</b>,</p>
    <p><i>08</i> &nbsp;&nbsp;<b>&apos;UI Engineering&apos;</b>,</p>
    <p><i>09</i> &nbsp;&nbsp;<b>&apos;Responsive Design&apos;</b></p>
    <p><i>10</i> &nbsp;],</p>
    <p><i>11</i> &nbsp;currentlyBuilding: <b>&apos;Pulseboard&apos;</b></p>
    <p><i>12</i> {'}'}</p>
    <p className="code-cursor"><i>13</i> <span /></p>
  </div>
</div>

          <div className="float-chip chip-react"><span>⚛</span> React</div><div className="float-chip chip-next">▲ Next.js</div><div className="float-chip chip-ui"><Palette size={15}/> UI craft</div>
          <div className="visual-caption"><span className="caption-line"/> {t("Thoughtful design. Solid code.")}</div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-icon"><ArrowDownRight size={15}/></span> {t("SCROLL TO EXPLORE")}</a>
      </section>

      <section className="section wrap" id="about">
        <div className="section-heading"><p className="eyebrow">{t("01 / A LITTLE ABOUT ME")}</p><h2>{t("Design-minded.")}<br/><span className="muted">{t("Engineering-led.")}</span></h2></div>
        <div className="about-grid"><div className="about-lead"><p className="large-copy"> 
          {t("I sit at the intersection of ")}
          <span className="accent">{t("clean code")}</span>, 
          {t("thoughtful UX and the details that make a product feel effortless.")}</p>
          </div><div className="about-detail"><p>{t("I’m a Senior UI Developer with over a decade of experience creating accessible, responsive and scalable interfaces. I enjoy collaborating with design and product teams, solving real user problems and bringing thoughtful visual systems to life.")}</p><p>{t("My work blends strong frontend fundamentals with modern React and Next.js development, practical UI/UX thinking and a continuous curiosity for emerging tools.")}</p><div className="about-links"><a href="https://github.com/sweta91" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/sweta-patil-a5711a69/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a></div></div></div>
      </section>

      <section className="section section-alt" id="experience"><div className="wrap"><div className="section-heading row-heading"><div><p className="eyebrow">{t("02 / THE JOURNEY")}</p><h2>{t("Experience &")}<br/><span className="muted">{t("impact.")}</span></h2></div><p className="heading-note">{t("A decade of turning requirements into reliable, human-friendly interfaces.")}</p></div><div className="timeline">{experience.map((item, i) => <div className="timeline-item" key={item.role}><div className="timeline-marker">0{i+1}</div><div className="timeline-main"><div className="timeline-top"><h3>{t(item.role)}</h3><span>{item.period}</span></div><p>{t(item.description)}</p></div><BriefcaseBusiness className="timeline-icon" size={22}/></div>)}</div><p className="edit-note">{t("Experience timeline is a starter entry. Replace with verified employer names, dates and achievements before publishing.")}</p></div></section>

      <section className="section wrap" id="skills"><div className="section-heading row-heading"><div><p className="eyebrow">{t("03 / MY TOOLKIT")}</p><h2>{t("Tools I use to")}<br/><span className="muted">{t("make it happen.")}</span></h2></div><p className="heading-note">{t("A practical mix of frontend foundations, modern frameworks and design sensibility.")}</p></div><div className="skills-grid">{skillGroups.map(group => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={19}/></span><span className="skill-count">{String(group.skills.length).padStart(2,'0')} {t("SKILLS")}</span></div><h3>{t(group.title)}</h3><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>})}</div></section>

      <section className="section section-alt" id="work"><div className="wrap"><div className="section-heading row-heading"><div><p className="eyebrow">{t("04 / SELECTED WORK")}</p><h2>{t("Some things I’ve")}<br/><span className="muted">{t("been building.")}</span></h2></div><p className="heading-note">{t("A selection of hands-on projects that show my approach to product UI and frontend development.")}</p></div><div className="projects-grid">{projects.map(project => <article className={`project-card ${project.tone}`} key={project.number}><div className="project-art"><span className="project-number">/{project.number}</span><div className="art-orbit art-orbit-one"/><div className="art-orbit art-orbit-two"/><div className="art-window"><div className="art-window-head"><span/><span/><span/></div><div className="art-window-body"><div className="art-sidebar"/><div className="art-content"><div/><div/><div/><div/></div></div></div><span className="project-status">{t(project.status)}</span></div><div className="project-info"><p className="project-type">{t(project.type)}</p><div className="project-title-row"><h3>{project.name}</h3><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight size={19}/></a></div><p className="project-description">{t(project.description)}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>

    
<section className="section wrap" id="learning">
  <div className="learning-card">
    <div>
      <p className="eyebrow">{t("05 / ALWAYS LEARNING")}</p>
      <h2>
        {t("Curiosity keeps")}<br />
        <span className="muted">{t("the code fresh.")}</span>
      </h2>
      <p>
       {t("Continuously growing across modern frontend architecture, React, Next.js, Generative AI and Scrum fundamentals.")}
      </p>
    </div>

    <div className="learning-list">
      <div>
        <span>01</span>
        <b>{t("React – Basic & Advanced")}</b>
        <small>Coursera</small>
      </div>

      <div>
        <span>02</span>
        <b>{t("Generative AI: Prompt Engineering Basics")}</b>
        <small>{t("Certification completed")}</small>
      </div>

      <div>
        <span>03</span>
        <b>{t("Modern frontend development")}</b>
        <small>{t("Hands-on project learning")}</small>
      </div>

      <div>
        <span>04</span>
        <b>{t("Scrum Basic Certification")}</b>
        <small>{t("Certification completed")}</small>
      </div>
    </div>
  </div>
</section>


      
<section className="contact-section" id="contact">
  <div className="wrap contact-inner">
    <p className="eyebrow">{t("06 / WHAT’S NEXT?")}</p>

    <h2>
      {t("Have a good")}<br />
      {t("project in")} <span className="gradient-text">{t("mind?")}</span>
    </h2>

    <p className="contact-copy">
      {t("I'm open to Senior UI Developer, Frontend Engineer and UI Lead opportunities. Let's make something meaningful.")}
    </p>

    <a
      className="button button-primary contact-button"
      href="mailto:swetapatil1991@gmail.com"
    >
      {t("Say hello")} <ArrowUpRight size={17} />
    </a>

    <div className="contact-bottom">
      <span>{t("Vadodara, India · Open to opportunities")}</span>

      <div className="social-links">
        <a
          href="https://github.com/sweta91"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <Github />
        </a>

        <a
          href="https://www.linkedin.com/in/sweta-patil-a5711a69/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <Linkedin />
        </a>

        <a
          href="https://www.behance.net/swetapatil"
          target="_blank"
          rel="noreferrer"
          aria-label="Behance"
          title="Behance"
        >
          <Palette />
        </a>

        <a
          href="https://promptbase.com/profile/swetapatil"
          target="_blank"
          rel="noreferrer"
          aria-label="PromptBase"
          title="PromptBase"
        >
          <Sparkles />
        </a>

        <a
          href="mailto:swetapatil1991@gmail.com"
          aria-label="Email"
          title="Email"
        >
          <Mail />
        </a>
      </div>
    </div>
  </div>
</section>

      <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">S</span><span>SWETA<span className="muted">.PATIL</span></span></a><span>{t("Designed with intention. Built with care.")}</span><a href="#home">{t("BACK TO TOP ↑")}</a></footer>
    </main>
  );
}
