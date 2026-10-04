import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "StudyMate AI",
    status: "Hackathon Project",
    description:
      "An AI-powered study assistant designed to make learning smarter through AI summaries, smart quizzes, flashcards, and study-material uploads.",
    tech: ["React", "Vite", "FastAPI", "AI", "Python"],
    link: "https://studymate-ai-4uu1.onrender.com/",
    linkText: "Live Project",
    featured: true,
  },
  {
    number: "02",
    title: "EnerSense",
    status: "IoT + Analytics",
    description:
      "An IoT-based electrical energy monitoring and diagnostic platform that tracks voltage, current, power, and energy while detecting abnormal conditions.",
    tech: ["ESP32", "IoT", "MERN", "MongoDB", "Analytics"],
    link: "https://enersense.in",
    linkText: "Visit Website",
  },
  {
    number: "03",
    title: "Movie Data Analysis",
    status: "Data Analytics",
    description:
      "A data analytics project focused on exploring movie datasets, identifying trends, and creating meaningful insights using Python, SQL, Excel, and Power BI.",
    tech: ["Python", "SQL", "Excel", "Power BI"],
    link: "https://github.com/viralpatel16",
    linkText: "GitHub Profile",
  },
  {
    number: "04",
    title: "PlanYourTrip",
    status: "Full Stack",
    description:
      "A MERN-based travel planning platform designed to help users organize destinations and create a more convenient travel experience.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/viralpatel16",
    linkText: "GitHub Profile",
  },
  {
    number: "05",
    title: "Python Quiz Game",
    status: "Python Project",
    description:
      "An interactive Python quiz game developed during my internship at UpSkill Campus, featuring question-based gameplay and score tracking.",
    tech: ["Python", "Logic", "CLI", "Game Development"],
    link: "https://github.com/viralpatel16/Upskillcampus",
    linkText: "View on GitHub",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <div className="section-label">Selected Work</div>

        <h2 className="section-title">
          Projects that turn
          <br />
          <span>ideas into solutions.</span>
        </h2>

        <p className="section-description">
          A selection of projects where I combine development, data,
          analytics, AI, and problem-solving to build practical solutions.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card glass-card ${
              project.featured ? "featured" : ""
            }`}
            key={project.number}
          >
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-status">
                {project.status}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-footer">
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkText}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}