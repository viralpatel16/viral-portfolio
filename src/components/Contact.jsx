
import "./Contact.css";

const profiles = [
  {
    name: "GitHub",
    description: "Explore my code and projects",
    url: "https://github.com/viralpatel16",
    icon: "GH",
  },
  {
    name: "LinkedIn",
    description: "Connect with me professionally",
    url: "https://www.linkedin.com/in/viral-patel-1032512bb/",
    icon: "in",
  },
  {
    name: "LeetCode",
    description: "See my coding practice",
    url: "https://leetcode.com/u/Viral_Patel9816/",
    icon: "LC",
  },
  {
    name: "Kaggle",
    description: "Explore my data science profile",
    url: "https://www.kaggle.com/viralpatel09",
    icon: "KG",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-content">
        <p className="section-label">LET'S CONNECT</p>

        <h2>
          Have an idea?
          <br />
          <span>Let's build something.</span>
        </h2>

        <p className="contact-intro">
          I'm interested in opportunities to learn, collaborate,
          and work on meaningful projects in data analytics
          and technology. Feel free to connect with me.
        </p>

        <div className="contact-profiles">
          {profiles.map((profile) => (
            <a
              className="contact-card"
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              key={profile.name}
            >
              <span className="contact-icon">
                {profile.icon}
              </span>

              <span className="contact-card-text">
                <strong>{profile.name}</strong>
                <small>{profile.description}</small>
              </span>

              <span className="contact-arrow">↗</span>
            </a>
          ))}
        </div>

        <p className="contact-footer">
          Viral Patel · B.Tech Information Technology · 2027
        </p>
      </div>
    </section>
  );
}