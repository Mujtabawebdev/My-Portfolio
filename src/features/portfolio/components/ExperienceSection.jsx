import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection({ experience }) {
  return (
    <section className="section-pad" id="experience">
      <SectionHeading eyebrow="Experience" title="A timeline of practical product work and engineering growth." />

      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={`${item.role}-${item.period}`}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="timeline-date">{item.period}</div>
            <div className="timeline-card">
              <h3>{item.role}</h3>
              <p className="muted">{item.company}</p>
              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
