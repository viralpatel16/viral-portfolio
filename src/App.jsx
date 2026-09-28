import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="home" className="foundation-hero">
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
            interested in data analytics, visualization, and
            technology-driven solutions.
          </p>

          <a className="hero-button" href="#projects">
            Explore my portfolio ↗
          </a>
        </section>

        <About />
        <Skills />
        <Projects />
        <Contact />
        
      </main>
    </div>
  );
}

export default App;