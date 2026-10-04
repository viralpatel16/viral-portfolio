import "./Contact.css";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@viralpatel16",
    url: "https://github.com/viralpatel16",
  },
  {
    name: "LinkedIn",
    handle: "Viral Patel",
    url: "https://www.linkedin.com/in/viral-patel-1032512bb/",
  },
  {
    name: "LeetCode",
    handle: "@Viral_Patel9816",
    url: "https://leetcode.com/u/Viral_Patel9816/",
  },
  {
    name: "Kaggle",
    handle: "@viralpatel09",
    url: "https://www.kaggle.com/viralpatel09",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-wrapper">
        <div className="contact-content">
          <div className="section-label">Let's Connect</div>

          <h2 className="section-title">
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p className="section-description">
            I'm always open to interesting projects, internship
            opportunities, collaborations, and conversations around
            technology, data, and AI.
          </p>

          <a
            className="contact-email"
            href="mailto:viral.k0907@gmail.com"
          >
            <span>viral.k0907@gmail.com</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-side">
          <div className="contact-card glass-card">
            <span className="contact-card-label">
              CURRENTLY
            </span>

            <h3>Open to opportunities</h3>

            <p>
              Data Analytics · Business Intelligence ·
              AI · Software Development
            </p>

            <div className="availability">
              <span></span>
              Available for collaboration
            </div>
          </div>

          <div className="social-grid">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="social-card glass-card"
              >
                <div>
                  <strong>{social.name}</strong>
                  <span>{social.handle}</span>
                </div>

                <span
                  className="social-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="portfolio-footer">
        <span>© {new Date().getFullYear()} Viral Patel</span>
        <span>Built with React · Vite</span>
      </footer>
    </section>
  );
}