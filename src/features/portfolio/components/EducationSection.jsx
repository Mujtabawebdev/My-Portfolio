import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function EducationSection({ education }) {
  return (
    <section className="section-pad education-section" id="education">
      <SectionHeading eyebrow="Education" title="Academic foundation behind my full-stack development work." />

      <div className="education-grid">
        {education.map((item, index) => (
          <motion.article
            className="education-card"
            key={item.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="education-status">{item.period}</div>
            <h3>{item.degree}</h3>
            <p className="muted">{item.institution}</p>
            {item.meta ? <p className="education-meta">{item.meta}</p> : null}
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
