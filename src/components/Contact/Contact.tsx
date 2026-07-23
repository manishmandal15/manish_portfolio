import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Let's build something amazing together</p>
        </div>

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-info">

            <h3>Contact Information</h3>

            <div className="info-item">
              <FaEnvelope />
              <span>mmanishkumar1121@gmail.com</span>
            </div>

            <div className="info-item">
              <FaPhone />
              <span>+91 62064 54563</span>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt />
              <span>Delhi NCR | Open to Relocate</span>
            </div>

            <div className="social-links">

              <a href="https://github.com/manishmandal15">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/manish-kumar-mandal-50308025b?utm_source=share_via&utm_content=profile&utm_medium=member_android">
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
            />

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;