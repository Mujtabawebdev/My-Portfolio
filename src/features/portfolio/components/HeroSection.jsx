import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import ofcPic from "../../../assets/portfolio/ofc-pic.png";

export function HeroSection({ hero, stats }) {
  const [experienceStat] = stats;

  return (
    <section className="hero section-pad" id="top">
      <motion.div
        className="hero-orbit"
        aria-hidden="true"
        animate={{ rotate: [-12, 3, -12], borderRadius: ["38% 62% 54% 46%", "57% 43% 36% 64%", "38% 62% 54% 46%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 aria-label={hero.title}>
          {hero.title.split(" ").map((word, index) => (
            <motion.span
              className="hero-title-word"
              key={`${word}-${index}`}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        {hero.subtitle ? <p className="hero-subtitle">{hero.subtitle}</p> : null}
        <p className="hero-text">{hero.description}</p>

        <motion.div
          className="hero-actions"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.48 } } }}
        >
          <motion.a variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="btn btn-primary" href={hero.primaryAction.href} whileTap={{ scale: 0.96 }}>
            {hero.primaryAction.label}
          </motion.a>
          <motion.a variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="btn btn-ghost" href={hero.secondaryAction.href} target="_blank" rel="noreferrer" whileTap={{ scale: 0.96 }}>
            {hero.secondaryAction.label}
          </motion.a>
          <motion.a variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="btn btn-contact-icon" href="#contact" aria-label="Contact Mujtaba" whileTap={{ scale: 0.96 }}>
            <FiMessageCircle aria-hidden="true" />
            <span>Contact Us</span>
          </motion.a>
        </motion.div>

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
        <motion.div
          className="hero-showcase"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={ofcPic} alt="Muhammad Mujtaba working at a laptop" className="hero-slide" />
        </motion.div>
        <div className="showcase-indicator" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <motion.div
          className="floating-card top-card"
          animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.04 }}
        >
          <strong>{experienceStat.value}</strong>
          <span>{experienceStat.label}</span>
        </motion.div>
      </motion.aside>
    </section>
  );
}
