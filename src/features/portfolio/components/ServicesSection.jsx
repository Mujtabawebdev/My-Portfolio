import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection({ services }) {
  return (
    <section className="section-pad about-section" id="about">
      <div className="about-copy">
        <SectionHeading eyebrow="About" title="I design and build product flows that feel deliberate, fast, and reliable." />
        <p className="about-lede">
          I am a full-stack developer in Lahore who turns product requirements into reliable, production-ready software.
          My work spans responsive interfaces, secure APIs, relational and document databases, real-time systems, and
          AI-powered experiences—from initial architecture through deployment.
        </p>
        <div className="about-stats" aria-label="Portfolio highlights">
          <article>
            <strong>1+</strong>
            <span>Years Full-stack Experience</span>
          </article>
          <article>
            <strong>3+</strong>
            <span>Production Projects</span>
          </article>
          <article>
            <strong>25+</strong>
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
