import React from "react";
import { createRoot } from "react-dom/client";
import { Mail, ArrowUpRight, Code2, Database, Monitor } from "lucide-react";
import "./style.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
];

const projects = [
  {
    title: "DriveEase — Car Rental System",
    description:
      "A car rental management project with car listings, user accounts, bookings, and an admin workflow.",
    stack: "MERN Stack",
    link: "https://github.com/YOUR-GITHUB-USERNAME",
  },
  {
    title: "Project Two",
    description:
      "Replace this card with another project you have actually built. Explain the problem it solves and its key features.",
    stack: "Add your technology",
    link: "https://github.com/YOUR-GITHUB-USERNAME",
  },
  {
    title: "Project Three",
    description:
      "Add a practical, assignment, or personal project here. Include a live demo or source-code link when available.",
    stack: "Add your technology",
    link: "https://github.com/YOUR-GITHUB-USERNAME",
  },
];

function App() {
  return (
    <div className="page">
      <nav className="nav container">
        <a className="brand" href="#home">
          portfolio<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">
          Let's connect <ArrowUpRight size={16} />
        </a>
      </nav>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot"></span> MCA STUDENT · ASPIRING
              DEVELOPER
            </div>
            <h1>
              Building useful things
              <br />
              for the <em>web.</em>
            </h1>
            <p className="hero-text">
              Hi, I'm <strong>Your Name</strong> — an MCA student interested in
              full-stack development, clean interfaces, and solving real-world
              problems through code.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button secondary" href="#contact">
                Contact me
              </a>
            </div>
            <div className="social-row">
              <span>GH</span>
              <span>in</span>{" "}
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative developer card">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="code-card">
              <div className="card-top">
                <span></span>
                <span></span>
                <span></span>
                <small>developer.js</small>
              </div>
              <div className="code-lines">
                <p>
                  <b>const</b> developer = {"{"}
                </p>
                <p className="indent">
                  name: <i>'Adarsh Shrivastav'</i>,
                </p>
                <p className="indent">
                  role: <i>'MCA Student'</i>,
                </p>
                <p className="indent">loves: [</p>
                <p className="indent more">
                  <i>'Building projects'</i>,
                </p>
                <p className="indent more">
                  <i>'Learning daily'</i>
                </p>
                <p className="indent">]</p>
                <p>{"}"};</p>
                <p className="code-comment">// always improving ✦</p>
              </div>
              <div className="floating-badge">
                <Code2 size={17} /> Learning by building
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </section>

        <section id="about" className="section container">
          <div className="section-label">01 / ABOUT</div>
          <div className="section-content about-grid">
            <h2>
              A curious mind.
              <br />
              <em>A practical approach.</em>
            </h2>
            <div>
              <p className="large-copy">
                I'm pursuing a Master of Computer Applications (MCA) and
                developing my skills in web technologies through coursework and
                hands-on projects.
              </p>
              <p>
                I enjoy turning ideas into working applications, learning how
                the frontend and backend fit together, and improving my code one
                step at a time. This portfolio documents my learning and
                projects.
              </p>
              <div className="mini-stats">
                <div>
                  <strong>MCA</strong>
                  <span>Education</span>
                </div>
                <div>
                  <strong>Web</strong>
                  <span>Area of interest</span>
                </div>
                <div>
                  <strong>Build</strong>
                  <span>Learn by doing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-label">02 / TOOLKIT</div>
            <div className="section-heading">
              <h2>
                Technologies I'm <em>learning.</em>
              </h2>
              <p>
                Update this list to match the tools you can confidently discuss.
              </p>
            </div>
            <div className="skills-grid">
              <article className="skill-card">
                <Monitor size={24} />
                <h3>Frontend</h3>
                <p>Building responsive and accessible user interfaces.</p>
                <div className="tags">
                  {skills.slice(0, 4).map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </article>
              <article className="skill-card">
                <Database size={24} />
                <h3>Backend & Data</h3>
                <p>Learning APIs, server-side logic, and data storage.</p>
                <div className="tags">
                  {skills.slice(4, 7).map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </article>
              <article className="skill-card">
                <Code2 size={24} />
                <h3>Tools & Workflow</h3>
                <p>Writing code, tracking changes, and debugging projects.</p>
                <div className="tags">
                  <span>VS Code</span>
                  <span>Git</span>
                  <span>GitHub</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="section-heading">
            <h2>
              Projects in <em>progress.</em>
            </h2>
            <p>A selection of academic and personal work.</p>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className="project-top">
                  <span>0{i + 1}</span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={"Open " + p.title}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                <div className="project-icon">
                  <Code2 size={24} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-stack">{p.stack}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="education-band">
          <div className="container education-inner">
            <div>
              <div className="section-label">04 / EDUCATION</div>
              <h2>
                Learning today.
                <br />
                <em>Building for tomorrow.</em>
              </h2>
            </div>
            <div className="education-card">
              <span>POSTGRADUATE STUDY</span>
              <h3>Master of Computer Applications (MCA)</h3>
              <p>Your college or university name</p>
              <small>Update with your actual course details</small>
            </div>
          </div>
        </section>

        <section id="contact" className="section container contact-section">
          <div className="section-label">05 / CONTACT</div>
          <div className="contact-box">
            <div>
              <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
              <h2>
                Let's make something
                <br />
                <em>meaningful.</em>
              </h2>
            </div>
            <a className="button primary" href="mailto:YOUR-EMAIL@example.com">
              Say hello <Mail size={17} />
            </a>
          </div>
          <div className="profile-links">
            <a
              href="https://github.com/shrivastavadarsh76-a11y"
              target="_blank"
              rel="noreferrer"
            >
              <span>GH</span> GitHub <ArrowUpRight size={14} />
            </a>

            <a
              href="https://www.linkedin.com/in/adarsh-shrivastav-585b52447"
              target="_blank"
              rel="noreferrer"
            >
              <span>in</span> LinkedIn <ArrowUpRight size={14} />
            </a>

            <a href="mailto:shrivastavadarsh76@gmail.com">
              <Mail size={18} /> Email <ArrowUpRight size={14} />
            </a>
          </div>{" "}
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            portfolio<span>.</span>
          </a>
          <p>Designed and built with React.</p>
          <p>© {new Date().getFullYear()} Your Name</p>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
