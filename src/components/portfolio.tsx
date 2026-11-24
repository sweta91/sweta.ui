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
  ExternalLink,
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
  { number: '01', name: 'MediBook', type: 'Healthcare · Next.js', description: 'A healthcare appointment platform concept with doctor discovery, specialty filters, doctor profiles and appointment booking flows.', tags: ['Next.js', 'React', 'TypeScript', 'SCSS'], status: 'In development', tone: 'blue', href: 'https://github.com/sweta91/medibook-healthcare-platform' },
  { number: '02', name: 'Personal portfolio', type: 'Personal brand · Web', description: 'A portfolio focused on frontend engineering, UI craft, selected work and professional experience.', tags: ['React', 'Next.js', 'UI design'], status: 'Redesigning', tone: 'teal', href: 'https://sweta91.github.io/sweta.ui/' },
];

const experience = [
  { role: 'Senior UI Developer / Frontend Engineer', period: '10+ years of experience', description: 'Building responsive, scalable web interfaces; translating product requirements and design systems into polished user experiences. Add your exact employers, titles and dates here.' },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
      <header className="topbar wrap">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">S</span><span>SWETA<span className="muted">.PATIL</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['About','Experience','Skills','Work','Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="mailto:sweta.patil@example.com">Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line"/></div>
          <p className="hero-kicker">Hello, I’m Sweta Patil</p>
          <h1>I build digital<br/><span className="gradient-text">experiences</span><br/>that feel right.</h1>
          <p className="hero-description">Senior UI Developer & Frontend Engineer with <strong>10+ years of experience</strong> turning complex ideas into intuitive, responsive and high-performing web experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#contact">Get in touch <ArrowDownRight size={17}/></a></div>
          <div className="hero-meta"><span><b>10+</b> years building for the web</span><span className="meta-divider"/><span><b>UI × Engineering</b> my sweet spot</span></div>
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
    <p><i>11</i> &nbsp;currentlyBuilding: <b>&apos;MediBook&apos;</b></p>
    <p><i>12</i> {'}'}</p>
    <p className="code-cursor"><i>13</i> <span /></p>
  </div>
</div>

          <div className="float-chip chip-react"><span>⚛</span> React</div><div className="float-chip chip-next">▲ Next.js</div><div className="float-chip chip-ui"><Palette size={15}/> UI craft</div>
          <div className="visual-caption"><span className="caption-line"/> Thoughtful design. Solid code.</div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-icon"><ArrowDownRight size={15}/></span> SCROLL TO EXPLORE</a>
      </section>

      <section className="section wrap" id="about">
        <div className="section-heading"><p className="eyebrow">01 / A LITTLE ABOUT ME</p><h2>Design-minded.<br/><span className="muted">Engineering-led.</span></h2></div>
        <div className="about-grid"><div className="about-lead"><p className="large-copy">I sit at the intersection of <span className="accent">clean code</span>, thoughtful UX and the details that make a product feel effortless.</p></div><div className="about-detail"><p>I’m a Senior UI Developer with over a decade of experience creating accessible, responsive and scalable interfaces. I enjoy collaborating with design and product teams, solving real user problems and bringing thoughtful visual systems to life.</p><p>My work blends strong frontend fundamentals with modern React and Next.js development, practical UI/UX thinking and a continuous curiosity for emerging tools.</p><div className="about-links"><a href="https://github.com/sweta91" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a></div></div></div>
      </section>

      <section className="section section-alt" id="experience"><div className="wrap"><div className="section-heading row-heading"><div><p className="eyebrow">02 / THE JOURNEY</p><h2>Experience &<br/><span className="muted">impact.</span></h2></div><p className="heading-note">A decade of turning requirements into reliable, human-friendly interfaces.</p></div><div className="timeline">{experience.map((item, i) => <div className="timeline-item" key={item.role}><div className="timeline-marker">0{i+1}</div><div className="timeline-main"><div className="timeline-top"><h3>{item.role}</h3><span>{item.period}</span></div><p>{item.description}</p></div><BriefcaseBusiness className="timeline-icon" size={22}/></div>)}</div><p className="edit-note">Experience timeline is a starter entry. Replace with verified employer names, dates and achievements before publishing.</p></div></section>

      <section className="section wrap" id="skills"><div className="section-heading row-heading"><div><p className="eyebrow">03 / MY TOOLKIT</p><h2>Tools I use to<br/><span className="muted">make it happen.</span></h2></div><p className="heading-note">A practical mix of frontend foundations, modern frameworks and design sensibility.</p></div><div className="skills-grid">{skillGroups.map(group => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={19}/></span><span className="skill-count">{String(group.skills.length).padStart(2,'0')} SKILLS</span></div><h3>{group.title}</h3><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>})}</div></section>

      <section className="section section-alt" id="work"><div className="wrap"><div className="section-heading row-heading"><div><p className="eyebrow">04 / SELECTED WORK</p><h2>Some things I’ve<br/><span className="muted">been building.</span></h2></div><p className="heading-note">A selection of hands-on projects that show my approach to product UI and frontend development.</p></div><div className="projects-grid">{projects.map(project => <article className={`project-card ${project.tone}`} key={project.number}><div className="project-art"><span className="project-number">/{project.number}</span><div className="art-orbit art-orbit-one"/><div className="art-orbit art-orbit-two"/><div className="art-window"><div className="art-window-head"><span/><span/><span/></div><div className="art-window-body"><div className="art-sidebar"/><div className="art-content"><div/><div/><div/><div/></div></div></div><span className="project-status">{project.status}</span></div><div className="project-info"><p className="project-type">{project.type}</p><div className="project-title-row"><h3>{project.name}</h3><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight size={19}/></a></div><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>

      <section className="section wrap" id="learning"><div className="learning-card"><div><p className="eyebrow">05 / ALWAYS LEARNING</p><h2>Curiosity keeps<br/><span className="muted">the code fresh.</span></h2><p>Continuously growing across modern frontend architecture, React, Next.js and Generative AI.</p></div><div className="learning-list"><div><span>01</span><b>React – Basic & Advanced</b><small>Coursera</small></div><div><span>02</span><b>Generative AI: Prompt Engineering Basics</b><small>Certification completed</small></div><div><span>03</span><b>Modern frontend development</b><small>Hands-on project learning</small></div></div></div></section>

      
<section className="contact-section" id="contact">
  <div className="wrap contact-inner">
    <p className="eyebrow">06 / WHAT&apos;S NEXT?</p>

    <h2>
      Have a good<br />
      project in <span className="gradient-text">mind?</span>
    </h2>

    <p className="contact-copy">
      I&apos;m open to Senior UI Developer, Frontend Engineer
      and UI Lead opportunities. Let&apos;s make something meaningful.
    </p>

    <a
      className="button button-primary contact-button"
      href="mailto:swetapatil1991@gmail.com"
    >
      Say hello <ArrowUpRight size={17} />
    </a>

    <div className="contact-bottom">
      <span>Vadodara, India · Open to opportunities</span>

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

      <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">S</span><span>SWETA<span className="muted">.PATIL</span></span></a><span>Designed with intention. Built with care.</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
