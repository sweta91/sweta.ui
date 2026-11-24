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
  Sparkles,
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
    skills: ['REST API integration', 'Supabase', 'Database fundamentals', 'Payment integration', 'Razorpay'],
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

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar wrap">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">S</span>
          <span>SWETA<span className="muted">.PATIL</span></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['About', 'Experience', 'Skills', 'Work', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href={`mailto:${email}`}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line" /></div>
          <p className="hero-kicker">Hello, I&apos;m Sweta Patil</p>
          <h1>Building digital<br /><span className="gradient-text">experiences</span><br />with purpose.</h1>
          <p className="hero-description">Senior UI Developer &amp; Frontend Engineer with <strong>10+ years of experience</strong> creating intuitive, responsive and high-quality web experiences.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="#contact">Get in touch <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-meta"><span><b>10+</b> years building for the web</span><span className="meta-divider" /><span><b>UI × Engineering</b> my sweet spot</span></div>
        </div>

        <div className="hero-visual" aria-label="Decorative frontend engineering graphic">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
          <div className="code-window">
            <div className="window-bar"><span /><span /><span /><small>sweta.tsx</small></div>
            <div className="code-content">
              <p><i>01</i> <em>const</em> developer = {'{'}</p>
              <p><i>02</i> &nbsp;name: <b>&apos;Sweta Patil&apos;</b>,</p>
              <p><i>03</i> &nbsp;role: <b>&apos;Frontend Engineer&apos;</b>,</p>
              <p><i>04</i> &nbsp;experience: <b>&apos;10+ years&apos;</b>,</p>
              <p><i>05</i> &nbsp;specialization: [</p>
              <p><i>06</i> &nbsp;&nbsp;<b>&apos;React&apos;</b>, <b>&apos;Next.js&apos;</b>,</p>
              <p><i>07</i> &nbsp;&nbsp;<b>&apos;UI Engineering&apos;</b>,</p>
              <p><i>08</i> &nbsp;&nbsp;<b>&apos;Payment Integration&apos;</b></p>
              <p><i>09</i> &nbsp;],</p>
              <p><i>10</i> &nbsp;building: <b>&apos;MediBook&apos;</b></p>
              <p><i>11</i> {'}'}</p>
              <p className="code-cursor"><i>12</i> <span /></p>
            </div>
          </div>
          <div className="float-chip chip-react"><span>⚛</span> React</div>
          <div className="float-chip chip-next">▲ Next.js</div>
          <div className="float-chip chip-ui"><Palette size={15} /> UI craft</div>
          <div className="visual-caption"><span className="caption-line" /> Thoughtful design. Solid code.</div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-icon"><ArrowDownRight size={15} /></span> SCROLL TO EXPLORE</a>
      </section>

      <section className="section wrap" id="about">
        <div className="section-heading"><p className="eyebrow">01 / A LITTLE ABOUT ME</p><h2>Design-minded.<br /><span className="muted">Engineering-led.</span></h2></div>
        <div className="about-grid">
          <div className="about-lead"><p className="large-copy">I work at the intersection of <span className="accent">clean code</span>, thoughtful UX and the details that make digital products feel effortless.</p></div>
          <div className="about-detail">
            <p>I&apos;m a Senior UI Developer with over a decade of experience creating accessible, responsive and scalable interfaces. I enjoy solving user-interface challenges and bringing thoughtful visual systems to life.</p>
            <p>My work combines strong frontend fundamentals with React and Next.js development, practical UI/UX thinking, API and payment integrations, and a continuous curiosity for modern tools.</p>
            <div className="about-links">
              <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
              <a href={behanceUrl} target="_blank" rel="noreferrer">Behance <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="experience">
        <div className="wrap">
          <div className="section-heading row-heading"><div><p className="eyebrow">02 / THE JOURNEY</p><h2>Experience &amp;<br /><span className="muted">impact.</span></h2></div><p className="heading-note">A decade of turning requirements into reliable, human-friendly interfaces.</p></div>
          <div className="timeline">
            {experience.map((item, i) => (
              <div className="timeline-item" key={item.role}>
                <div className="timeline-marker">0{i + 1}</div>
                <div className="timeline-main"><div className="timeline-top"><h3>{item.role}</h3><span>{item.period}</span></div><p>{item.description}</p></div>
                <BriefcaseBusiness className="timeline-icon" size={22} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap" id="skills">
        <div className="section-heading row-heading"><div><p className="eyebrow">03 / MY TOOLKIT</p><h2>Tools I use to<br /><span className="muted">make it happen.</span></h2></div><p className="heading-note">Frontend foundations, modern frameworks, data services and payment workflows.</p></div>
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return <article className="skill-card" key={group.title}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-count">{String(group.skills.length).padStart(2, '0')} SKILLS</span></div>
              <h3>{group.title}</h3>
              <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>;
          })}
        </div>
        <div className="integration-note"><CreditCard size={18} /><span>Payment integration</span><Database size={18} /><span>Supabase database</span></div>
      </section>

      <section className="section section-alt" id="work">
        <div className="wrap">
          <div className="section-heading row-heading"><div><p className="eyebrow">04 / SELECTED WORK</p><h2>Projects &amp;<br /><span className="muted">experiments.</span></h2></div><p className="heading-note">A focused selection of healthcare product development and React practice.</p></div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.tone}`} key={project.number}>
                <div className="project-art">
                  <span className="project-number">/{project.number}</span>
                  <div className="art-orbit art-orbit-one" /><div className="art-orbit art-orbit-two" />
                  <div className="art-window"><div className="art-window-head"><span /><span /><span /></div><div className="art-window-body"><div className="art-sidebar" /><div className="art-content"><div /><div /><div /><div /></div></div></div>
                  <span className="project-status">{project.status}</span>
                </div>
                <div className="project-info">
                  <p className="project-type">{project.type}</p>
                  <div className="project-title-row"><h3>{project.name}</h3><a href={project.href} target="_blank" rel="noreferrer" aria-label={project.linkLabel}><ArrowUpRight size={19} /></a></div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} <ExternalLink size={13} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap" id="learning">
        <div className="learning-card">
          <div><p className="eyebrow">05 / ALWAYS LEARNING</p><h2>Curiosity keeps<br /><span className="muted">the code fresh.</span></h2><p>Continuously growing across modern frontend architecture, React, Next.js, databases and Generative AI.</p></div>
          <div className="learning-list">
            <div><span>01</span><b>React – Basic &amp; Advanced</b><small>Coursera</small></div>
            <div><span>02</span><b>Generative AI: Prompt Engineering Basics</b><small>Certification completed</small></div>
            <div><span>03</span><b>Modern frontend development</b><small>Hands-on project learning</small></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="wrap contact-inner">
          <p className="eyebrow">06 / WHAT&apos;S NEXT?</p>
          <h2>Have a good<br />project in <span className="gradient-text">mind?</span></h2>
          <p className="contact-copy">I&apos;m open to Senior UI Developer, Senior Frontend Engineer and Frontend Lead opportunities. Let&apos;s make something meaningful.</p>
          <a className="button button-primary contact-button" href={`mailto:${email}`}>Say hello <ArrowUpRight size={17} /></a>
          <div className="contact-bottom">
            <a className="contact-email" href={`mailto:${email}`}>{email}</a>
            <div className="social-links">
              <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={behanceUrl} target="_blank" rel="noreferrer" aria-label="Behance"><Palette /></a>
              <a href={`mailto:${email}`} aria-label="Email"><Mail /></a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">S</span><span>SWETA<span className="muted">.PATIL</span></span></a><span>Designed with intention. Built with care.</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
