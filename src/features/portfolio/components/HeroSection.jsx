import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import ofcPic from "../../../assets/portfolio/ofc-pic.png";

export function HeroSection({ hero, stats }) {
  const [experienceStat] = stats;

  return (
    <section className="hero section-pad" id="top">
      <div className="hero-orbit" aria-hidden="true"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p className="hero-subtitle">{hero.subtitle}</p>
        <p className="hero-text">{hero.description}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href={hero.primaryAction.href}>
            {hero.primaryAction.label}
          </a>
          <a className="btn btn-ghost" href={hero.secondaryAction.href} target="_blank" rel="noreferrer">
            {hero.secondaryAction.label}
          </a>
          <a className="btn btn-contact-icon" href="#contact" aria-label="Contact Mujtaba">
            <FiMessageCircle aria-hidden="true" />
            <span>Contact Us</span>
          </a>
        </div>

        <div className="availability-card">
          <span className="status-dot"></span>
          <span>{hero.availability}</span>
        </div>
      </motion.div>

      <motion.aside
        className="hero-visual"
        aria-label="Developer portfolio visual"
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-showcase">
          <img src={ofcPic} alt="Muhammad Mujtaba working at a laptop" className="hero-slide" />
        </div>
        <div className="showcase-indicator" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <motion.div className="floating-card top-card" whileHover={{ y: -4 }}>
          <strong>{experienceStat.value}</strong>
          <span>{experienceStat.label}</span>
        </motion.div>
      </motion.aside>
    </section>
  );
}
