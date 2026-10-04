import { useEffect, useState } from "react";
import "./App.css";
import "./components/Sections.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Page loading animation
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Scroll reveal animation
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`app ${loading ? "is-loading" : ""}`}>
      {/* =========================
          PAGE LOADER
      ========================== */}
      {loading && (
        <div
          className="page-loader"
          aria-label="Loading portfolio"
        >
          <div className="loader-orbit">
            <span></span>
          </div>

          <p>
            VIRAL<span>.</span>
          </p>

          <div className="loader-bar">
            <span></span>
          </div>
        </div>
      )}

      {/* =========================
          NAVBAR
      ========================== */}
      <Navbar />

      <main>
        {/* =========================
            HERO
        ========================== */}
        <section
          id="home"
          className="foundation-hero reveal is-visible"
        >
          <div className="hero-glow"></div>

          <div className="hero-content">
            <p className="eyebrow">
              DATA ANALYTICS · TECHNOLOGY · INNOVATION
            </p>

            <h1>
              Building with data.
              <br />
              <span>Thinking beyond.</span>
            </h1>

            <p className="hero-description">
              I'm Viral Patel, an Information Technology student
              interested in data analytics, visualization, AI,
              and technology-driven solutions.
            </p>

            <div className="hero-actions">
              <a
                className="hero-button"
                href="#projects"
              >
                Explore my portfolio
                <span>↗</span>
              </a>

              <a
                className="hero-secondary"
                href="#contact"
              >
                Let's connect
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <i></i>
                B.Tech IT · 2027
              </span>

              <span>
                Data Analytics & BI
              </span>

              <span>
                AI & Machine Learning
              </span>
            </div>
          </div>

          {/* =========================
              HERO VISUAL
          ========================== */}
          <div
            className="hero-visual"
            aria-hidden="true"
          >
            <div className="orb orb-one"></div>

            <div className="orb orb-two"></div>

            <div className="orb orb-three"></div>

            <div className="data-grid">
              <span>01</span>
              <span>10</span>
              <span>11</span>
              <span>01</span>

              <span>10</span>
              <span>01</span>
              <span>11</span>
              <span>10</span>

              <span>11</span>
              <span>10</span>
              <span>01</span>
              <span>11</span>
            </div>

            <div className="hero-ring ring-one"></div>
            <div className="hero-ring ring-two"></div>
          </div>
        </section>

        {/* =========================
            ABOUT
        ========================== */}
        <div className="reveal">
          <About />
        </div>

        {/* =========================
            SKILLS
        ========================== */}
        <div className="reveal">
          <Skills />
        </div>

        {/* =========================
            PROJECTS
        ========================== */}
        <div className="reveal">
          <Projects />
        </div>

        {/* =========================
            CONTACT
        ========================== */}
        <div className="reveal">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;