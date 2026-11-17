const certifications = [
  {
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    detail: "Elite · 75% · 12-week course",
  },
  {
    title: "Computer Networks and Internet Protocol",
    issuer: "NPTEL · IIT Kharagpur",
    detail: "Elite",
  },
  {
    title: "Machine Learning Using Python",
    issuer: "Infosys Springboard",
    detail: "Completed",
  },
  {
    title: "Chat with Your Data: Generative AI-Powered SQL Data Analysis",
    issuer: "Vanderbilt University · Coursera",
    detail: "Completed · June 2026",
  },
  {
    title: "Data Analytics Foundations",
    issuer: "DeepLearning.AI",
    detail: "Course completed",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte · Forage",
    detail: "Completed · May 2026",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata · Forage",
    detail: "Completed · May 2026",
  },
];

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
          Parul University, graduating in 2027. My primary career
          interests are Data Analytics and Business Intelligence. I use
          Python, SQL, Excel, and Power BI to explore data, communicate
          insights, and support better decisions.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card glass-card">
          <h3>Who I am</h3>

          <p>
            I enjoy working with data to discover patterns, investigate
            questions, build dashboards, and turn analysis into clear
            takeaways.
          </p>

          <p>
            My project experience includes movie-data analysis and an
            IoT energy-monitoring system. I also explore machine learning,
            AI-powered applications, and full-stack development.
          </p>

          <p>
            I'm currently strengthening my skills and project portfolio
            as I prepare for Data Analyst and BI Analyst opportunities
            after graduating in 2027.
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
            <span className="stat-number">7.87</span>
            <span className="stat-label">
              B.Tech CGPA · Parul University
            </span>
          </article>

          <article className="stat-card glass-card">
            <span className="stat-number">20/20</span>
            <span className="stat-label">
              UpSkill Campus Internship Assessment
            </span>
          </article>

          <article className="stat-card glass-card">
            <span className="stat-number">5+</span>
            <span className="stat-label">
              Projects & Practical Builds
            </span>
          </article>
        </div>
      </div>

      <div className="section-header certifications-heading">
        <div className="section-label">Learning & Credentials</div>
        <h2 className="section-title">
          Certifications & <span>simulations.</span>
        </h2>
        <p className="section-description">
          Courses and practical job simulations across analytics,
          SQL, machine learning, computer networks, and IoT.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification) => (
          <article
            className="certification-card glass-card"
            key={certification.title}
          >
            <span className="certification-badge">
              {certification.detail}
            </span>

            <h3>{certification.title}</h3>

            <p>{certification.issuer}</p>
          </article>
        ))}
      </div>

      <div className="about-card glass-card internship-highlight">
        <span className="certification-badge">Internship Experience</span>
        <h3>Python Programming Intern · UpSkill Campus</h3>
        <p>
          Four-week internship · 22 May – 19 June 2026. Built a Python
          Quiz Game and scored 20/20 in the internship assessment.
        </p>
      </div>
    </section>
  );
}
