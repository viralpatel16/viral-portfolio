import "./Sections.css";
export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <p className="section-intro">
          A little about my journey, interests, and what I'm building.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-main">
          <h3>Turning curiosity into practical solutions.</h3>

          <p>
            I'm Viral Patel, a B.Tech Information Technology student
            with a strong interest in Data Analytics, Business
            Intelligence, and emerging technologies.
          </p>

          <p>
            I enjoy working with data, discovering meaningful
            patterns, and presenting insights in a clear and
            understandable way. I also like building practical
            technology projects that solve real-world problems.
          </p>

          <p>
            Through academic and personal projects, I've explored
            data analysis, dashboard development, Python programming,
            and full-stack application development. I'm continuously
            learning and improving my technical and problem-solving
            skills.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-card">
            <span className="detail-icon">🎓</span>
            <div>
              <h4>Education</h4>
              <p>B.Tech in Information Technology</p>
            </div>
          </div>

          <div className="detail-card">
            <span className="detail-icon">📊</span>
            <div>
              <h4>Primary Interest</h4>
              <p>Data Analytics & Business Intelligence</p>
            </div>
          </div>

          <div className="detail-card">
            <span className="detail-icon">💡</span>
            <div>
              <h4>What I Enjoy</h4>
              <p>Analyzing data and building useful solutions</p>
            </div>
          </div>

          <div className="detail-card">
            <span className="detail-icon">🚀</span>
            <div>
              <h4>Currently Exploring</h4>
              <p>Data Science, AI & Machine Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}