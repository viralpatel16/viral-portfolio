export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <div className="section-label">About Me</div>

        <h2 className="section-title">
          Curious about data.
          <br />
          <span>Focused on impact.</span>
        </h2>

        <p className="section-description">
          I'm Viral Patel, a B.Tech Information Technology student at
          Parul University, graduating in 2027. I enjoy turning data,
          technology, and ideas into practical digital solutions.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card glass-card">
          <h3>Who I am</h3>

          <p>
            My primary interests are Data Analytics, Business
            Intelligence, Artificial Intelligence, and software
            development.
          </p>

          <p>
            I enjoy working with data to discover patterns, create
            visualizations, and communicate insights that can support
            better decisions.
          </p>

          <p>
            Alongside analytics, I explore full-stack development and
            AI-powered applications, which helps me understand both the
            data and the technology behind modern products.
          </p>
        </article>

        <div className="about-stats">
          <article className="stat-card glass-card">
            <span className="stat-number">2027</span>
            <span className="stat-label">
              Expected B.Tech IT Graduation
            </span>
          </article>

          <article className="stat-card glass-card">
            <span className="stat-number">5+</span>
            <span className="stat-label">
              Projects & Practical Builds
            </span>
          </article>

          <article className="stat-card glass-card">
            <span className="stat-number">AI</span>
            <span className="stat-label">
              Exploring intelligent applications
            </span>
          </article>

          <article className="stat-card glass-card">
            <span className="stat-number">∞</span>
            <span className="stat-label">
              Learning, experimenting & improving
            </span>
          </article>
        </div>
      </div>

      <div className="certifications-grid">
        <article className="certification-card glass-card">
          <span className="certification-badge">
            Certification
          </span>

          <h3>Machine Learning Using Python</h3>

          <p>
            Infosys Springboard
          </p>
        </article>

        <article className="certification-card glass-card">
          <span className="certification-badge">
            Certification
          </span>

          <h3>Data Analytics Foundations</h3>

          <p>
            DeepLearning.AI
          </p>
        </article>

        <article className="certification-card glass-card">
          <span className="certification-badge">
            Certification
          </span>

          <h3>Chat with Your Data: Generative AI-Powered SQL Data Analysis</h3>

          <p>
            Vanderbilt University · Coursera
          </p>
        </article>
      </div>
    </section>
  );
}