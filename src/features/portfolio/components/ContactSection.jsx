import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

const contactItems = [
  {
    label: "Email",
    value: "mujtabanaveed13@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mujtabanaveed13@gmail.com&su=Portfolio%20Inquiry",
    icon: FiMail,
    external: true,
  },
  {
    label: "Number",
    value: "+92 317 0428715",
    href: "tel:+923170428715",
    icon: FiPhone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-mujtaba-dev",
    href: "https://linkedin.com/in/muhammad-mujtaba-dev",
    icon: FiLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/Mujtabawebdev",
    href: "https://github.com/Mujtabawebdev",
    icon: FiGithub,
    external: true,
  },
];

export function ContactSection({ contact }) {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/mujtabanaveed13@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Message failed");
      }

      form.reset();
      setFormStatus("sent");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-copy"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">Contact</p>
        <h2>{contact.title}</h2>
        <p>{contact.description}</p>
        <div className="contact-list">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                className="contact-item"
                href={item.href}
                key={item.label}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                style={{ "--delay": `${index * 70}ms` }}
              >
                <span className="contact-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span>
                  <strong>{item.label}</strong>
                  <em>{item.value}</em>
                </span>
                <FiArrowUpRight className="contact-arrow" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </motion.div>
      <div className="contact-panel">
        <form
          className="contact-form"
          action="https://formsubmit.co/mujtabanaveed13@gmail.com"
          method="post"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="your.email@example.com" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" placeholder="Tell me about your project or role..." rows="5" required></textarea>
          </label>
          <button className="btn btn-primary" type="submit" disabled={formStatus === "sending"}>
            <FiMail aria-hidden="true" />
            {formStatus === "sending" ? "Sending..." : "Send Message"}
          </button>
          {formStatus === "sent" ? <p className="form-status success">Message sent successfully.</p> : null}
          {formStatus === "error" ? (
            <p className="form-status error">Message could not be sent. Please try the email link below.</p>
          ) : null}
        </form>

      </div>
    </section>
  );
}
