                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="content-section" id="projects">
        <div className="section-heading">
          <span>04 / SELECTED WORK</span>
          <h2>Projects I&apos;m proud of.</h2>
          <p>
            A selection of frontend projects and practical
            implementations.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-${project.tone}`}
              key={project.number}
            >
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-status">{project.status}</span>
              </div>

              <div className="project-icon">
                {project.number === '01' ? (
                  <MonitorSmartphone size={30} />
                ) : (
                  <Code2 size={30} />
                )}
              </div>

              <span className="project-type">{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel}
                <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <span className="contact-eyebrow">05 / GET IN TOUCH</span>

        <h2>
          Let&apos;s build something
          <span> meaningful.</span>
        </h2>

        <p>
          Have an opportunity, project or idea in mind?
          I would love to hear from you.
        </p>

        <a href={`mailto:${email}`} className="btn-primary">
          <Mail size={18} /> Say hello
        </a>

        <div className="contact-links">
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <Linkedin size={17} /> LinkedIn
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
          <a href={behanceUrl} target="_blank" rel="noreferrer">
            <Palette size={17} /> Behance
          </a>
          <a href={`mailto:${email}`}>
            <Mail size={17} /> Email
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#home" className="brand">
          <span className="brand-mark">SP.</span>
          Sweta Patil
        </a>

        <p>Designed and built with React &amp; Next.js.</p>

        <a href="#home" aria-label="Back to top">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </main>
  );
}
