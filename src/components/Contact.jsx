function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <p className="section-label">CONTACT</p>

        <h2>Let's build something reliable.</h2>

        <p className="contact-description">
          Interested in working together, discussing DevOps and cloud
          infrastructure, or solving an interesting engineering problem?
          Feel free to reach out.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:your-email@example.com"
            className="contact-button"
          >
            Get In Touch ↗
          </a>

          <a
            href="https://www.linkedin.com/in/manglesh-yadav-05045b1ba/"
            target="_blank"
            rel="noreferrer"
            className="contact-secondary"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;