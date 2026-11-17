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
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1000);

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
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`app ${loading ? "is-loading" : ""}`}>
      {loading && (
        <div className="page-loader" aria-label="Loading portfolio">
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

      <Navbar />

      <main>
        <section
          id="home"
          className="foundation-hero reveal is-visible"
        >
          <div className="hero-glow"></div>

          <div className="hero-content">
            <p className="eyebrow">
              DATA ANALYTICS · BUSINESS INTELLIGENCE · TECHNOLOGY
            </p>

            <h1>
              Turning data into
              <br />
              <span>meaningful insights.</span>
            </h1>

            <p className="hero-description">
              I'm Viral Patel, a B.Tech Information Technology student
              focused on Data Analytics and Business Intelligence.
              I work with Python, SQL, Excel, and Power BI to explore
              data, build useful visualizations, and solve practical
              problems.
            </p>

            <div className="hero-actions">
              <a className="hero-button" href="#projects">
                Explore my projects
                <span>↗</span>
              </a>

              <a className="hero-secondary" href="#contact">
                Let's connect
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <i></i>
                B.Tech IT · 2027
              </span>
              <span>Data Analyst · BI Analyst</span>
              <span>Python · SQL · Power BI</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
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

        <div className="reveal">
          <About />
        </div>

        <div className="reveal">
          <Skills />
        </div>

        <div className="reveal">
          <Projects />
        </div>

        <div className="reveal">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
