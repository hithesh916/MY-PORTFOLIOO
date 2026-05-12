"use client";

import { useEffect, useRef } from "react";
import "./portfolio.css";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = containerRef.current.querySelectorAll(
      ".fade-in, .section-title, .exp-item, .contact-block"
    );
    elements.forEach((el) => {
      observer.observe(el);
    });

    // Reveal text staggered effect
    const spans = containerRef.current.querySelectorAll(".reveal-text span");
    spans.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("visible");
      }, 100 * idx);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio-wrapper" ref={containerRef}>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
      
      <div className="noise"></div>

      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            HITHESH<span className="dot">.</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about" className="nav-item">About</a></li>
            <li><a href="#projects" className="nav-item">Work</a></li>
            <li><a href="#experience" className="nav-item">Experience</a></li>
            <li><a href="#contact" className="nav-item">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-text mx-auto text-center flex flex-col items-center">
              <div className="badge">Available for Work</div>
              <h1 className="reveal-text">
                <span>Software Developer</span> <br /> <span>& Vibe Coder.</span>
              </h1>
              <p className="hero-desc fade-in">
                I am Hithesh, a Computer Science & Business System student passionate about building robust web architectures and writing code that passes the vibe check.
              </p>
              <div className="hero-actions fade-in justify-center">
                <a href="#projects" className="btn btn-primary">
                  View Projects <i className="ri-arrow-right-line"></i>
                </a>
                <a href="mailto:vshithesh@gmail.com" className="btn btn-outline">
                  Let's Talk <i className="ri-mail-line"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about section-padding" id="about">
          <div className="container section-grid">
            <div className="section-title">
              <h2>[01] About</h2>
            </div>
            <div className="section-content">
              <h3 className="sharp-heading">
                Bridging the gap between <span>business strategy</span> and <span>technical execution</span>.
              </h3>
              <p className="text-secondary">
                Based in Chennai, India, currently pursuing my degree at SRM Institute of Science and Technology. My approach combines clean code architecture with creative problem-solving to deliver tech solutions that matter.
              </p>

              <div className="skills-grid mt-4">
                <div className="skill-col">
                  <h4>Expertise</h4>
                  <ul className="sharp-list">
                    <li>Software Development</li>
                    <li>Vibe Coding & UI/UX</li>
                    <li>Project Management</li>
                    <li>Web Development (HTML/CSS/JS)</li>
                  </ul>
                </div>
                <div className="skill-col">
                  <h4>Timeline</h4>
                  <ul className="sharp-list">
                    <li>
                      <strong>2022 - 2026</strong> <br /> SRM Institute of Science & Technology <br /> <span className="text-muted">CS & Business System</span>
                    </li>
                    <li>
                      <strong>2008 - 2022</strong> <br /> Loyola Matriculation School
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="projects section-padding" id="projects">
          <div className="container section-grid">
            <div className="section-title">
              <h2>[02] Work</h2>
            </div>
            <div className="section-content">

              <div className="project-card fade-in">
                <div className="project-info">
                  <span className="project-number">01</span>
                  <h3>Retail Dashboard Application</h3>
                  <p className="text-secondary">
                    An interactive web application visualizing key retail metrics (sales, profit, customer trends) built with robust software architecture.
                  </p>
                  <div className="tags">
                    <span>Power BI</span>
                    <span>Software Developer</span>
                    <span>Vibe Coder</span>
                  </div>
                  <a href="https://github.com/hithesh916/Retail-PowerBI-Analytics-Dashboard.git" target="_blank" rel="noreferrer" className="project-link">
                    View Source <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
                <div className="project-img">
                  <img src="https://i.postimg.cc/d3XGp6hq/Screenshot-2025-08-05-002703.png" alt="Power BI Dashboard" />
                </div>
              </div>

              <div className="project-card fade-in mt-5">
                <div className="project-info">
                  <span className="project-number">02</span>
                  <h3>PinBRO Visual Discovery</h3>
                  <p className="text-secondary">
                    A Pinterest-style web application featuring a dynamic masonry grid, live tag-based filtering, and a sleek user interface constructed from modern web technologies.
                  </p>
                  <div className="tags">
                    <span>HTML/CSS</span>
                    <span>JavaScript</span>
                    <span>UI/UX</span>
                  </div>
                  <a href="https://hithesh916.github.io/pinBRO-project-web-/" target="_blank" rel="noreferrer" className="project-link">
                    Live App <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
                <div className="project-img">
                  <img src="https://i.postimg.cc/V6gRGX96/Whats-App-Image-2025-08-05-at-12-29-34-AM.jpg" alt="PinBRO Project" />
                </div>
              </div>

              <div className="project-card fade-in mt-5">
                <div className="project-info">
                  <span className="project-number">03</span>
                  <h3>AI Resume Matcher</h3>
                  <p className="text-secondary">
                    An AI-powered document alignment platform that evaluates resumes against targeted job roles, generating precision match scores and identifying critical skill gaps across PDF, DOCX, and TXT formats.
                  </p>
                  <div className="tags">
                    <span>Machine Learning</span>
                    <span>Data Parsing</span>
                    <span>Web Architecture</span>
                  </div>
                  <a href="https://hithesh916.github.io/-Resume-Matcher-Project/" target="_blank" rel="noreferrer" className="project-link">
                    Live App <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
                <div className="project-img">
                  <img src="assets/resume_matcher.png" alt="AI Resume Matcher Project" />
                </div>
              </div>

              <div className="project-card fade-in mt-5">
                <div className="project-info">
                  <span className="project-number">04</span>
                  <h3>Learn Data Analytics</h3>
                  <p className="text-secondary">
                    An interactive educational platform designed to streamline the learning process for software development and analytics, featuring structured resources and dynamic insights.
                  </p>
                  <div className="tags">
                    <span>Web Architecture</span>
                    <span>Software Developer</span>
                    <span>Frontend</span>
                  </div>
                  <a href="https://hithesh916.github.io/learn-data-analytics/" target="_blank" rel="noreferrer" className="project-link">
                    Live App <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
                <div className="project-img">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Learn Data Analytics Project" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="experience section-padding" id="experience">
          <div className="container section-grid">
            <div className="section-title">
              <h2>[03] Experience</h2>
            </div>
            <div className="section-content">

              <div className="exp-item fade-in">
                <div className="exp-header">
                  <h3>Working Committee Member</h3>
                  <span className="exp-date">Current</span>
                </div>
                <h4 className="exp-company">NIC College Club</h4>
                <p className="text-secondary">
                  Organized and coordinated college events, workshops, and seminars ensuring smooth execution. Managed cross-functional logistics and communication between students and faculty teams for technical activities.
                </p>
              </div>

              <div className="exp-item border-top fade-in">
                <div className="exp-header">
                  <h3>Volunteering & Outreach</h3>
                  <span className="exp-date">Past</span>
                </div>
                <h4 className="exp-company">Aide et Action</h4>
                <p className="text-secondary">
                  Conducted career-building workshops for underprivileged students. Mentored individuals and delivered educational outreach programming dedicated to community development.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact section-padding" id="contact">
          <div className="container section-grid">
            <div className="section-title">
              <h2>[04] Connect</h2>
            </div>
            <div className="section-content contact-flex">
              <h2 className="sharp-heading">Ready to build something <br /> extraordinary?</h2>

              <div className="contact-links mt-4">
                <a href="mailto:vshithesh@gmail.com" className="contact-block">
                  <span className="contact-label"><i className="ri-mail-line"></i> Email</span>
                  <span className="contact-value">vshithesh@gmail.com</span>
                </a>
                <a href="tel:+916381188916" className="contact-block">
                  <span className="contact-label"><i className="ri-phone-line"></i> Phone</span>
                  <span className="contact-value">+91 63811 88916</span>
                </a>
                <a href="https://www.linkedin.com/in/hithesh-sundararajan/" target="_blank" rel="noreferrer" className="contact-block">
                  <span className="contact-label"><i className="ri-linkedin-fill"></i> LinkedIn</span>
                  <span className="contact-value">hithesh-sundararajan</span>
                </a>
                <div className="contact-block" style={{ cursor: "default" }}>
                  <span className="contact-label"><i className="ri-map-pin-line"></i> Location</span>
                  <span className="contact-value">Chennai, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-flex">
          <div className="logo">HITHESH<span className="dot">.</span></div>
          <p className="text-muted">© 2026 Engineering the future.</p>
        </div>
      </footer>
    </div>
  );
}
