function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <p className="section-label">CONTACT</p>

        <h2>Let's build something reliable.</h2>

        <p className="contact-description">
          I'm open to interesting engineering opportunities,
          DevOps and SRE discussions and challenging technical problems.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:mangleshyadav5456@gmail.com"
            className="contact-button"
          >
            Get In Touch ↗
          </a>

          <a
            href="https://www.linkedin.com/in/mangleshy23"
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