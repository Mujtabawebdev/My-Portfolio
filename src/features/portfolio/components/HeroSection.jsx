import { motion } from "framer-motion";
import ofcPic from "../../../assets/portfolio/ofc-pic.png";
import petsVetaPreview from "../../../assets/portfolio/pets-veta-preview.svg";
import pearlyxPreview from "../../../assets/portfolio/pearlyx-preview.svg";
import studentTeacherPreview from "../../../assets/portfolio/student-teacher-preview.svg";

const heroSlides = [
  { src: ofcPic, alt: "Muhammad Mujtaba working at a laptop" },
  { src: petsVetaPreview, alt: "Pets Veta project preview" },
  { src: pearlyxPreview, alt: "Instagram Clone project preview" },
  { src: studentTeacherPreview, alt: "Student Teacher Portal project preview" },
];

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
          {heroSlides.map((slide, index) => (
            <img
              src={slide.src}
              alt={slide.alt}
              className="hero-slide"
              key={slide.alt}
              style={{ "--slide-index": index }}
            />
          ))}
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
