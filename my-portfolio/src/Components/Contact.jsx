function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>If you have any project or job opportunity, feel free to contact me.</p>

          <p><strong>Name:</strong> Ajai S</p>
          <p><strong>Email:</strong> ajai16745@gmail.com</p>
          <p><strong>Phone:</strong> +91 9500522434</p>
          <p><strong>Location:</strong> Salem, Tamil Nadu</p>
        </div>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;