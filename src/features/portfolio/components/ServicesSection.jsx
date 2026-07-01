import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection({ services }) {
  return (
    <section className="section-pad about-section" id="about">
      <div className="about-copy">
        <SectionHeading eyebrow="About" title="I design and build product flows that feel deliberate, fast, and reliable." />
        <p className="about-lede">
          I am a Full Stack Developer based in Lahore, Pakistan, with a passion for building scalable web applications.
          I am currently pursuing a Bachelor's degree in Computer Science and continuously expanding my skills in modern
          web technologies. I enjoy turning complex problems into elegant, user-friendly solutions.
        </p>
        <div className="about-stats" aria-label="Portfolio highlights">
          <article>
            <strong>2+</strong>
            <span>Years Experience</span>
          </article>
          <article>
            <strong>5+</strong>
            <span>Projects Built</span>
          </article>
          <article>
            <strong>10+</strong>
            <span>Technologies</span>
          </article>
        </div>
      </div>

      <div className="service-grid" aria-label="Core capabilities">
        {services.map((service, index) => (
          <motion.article
            className="service-card"
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
          >
            <div className="icon-badge">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
