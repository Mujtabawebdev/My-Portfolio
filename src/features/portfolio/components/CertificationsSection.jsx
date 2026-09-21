import { motion } from "framer-motion";
import { FiAward, FiArrowUpRight } from "react-icons/fi";
import { SectionHeading } from "./SectionHeading";

export function CertificationsSection({ certifications }) {
  return (
    <section className="section-pad certifications-section" id="certifications">
      <SectionHeading eyebrow="Credentials" title="Learning that strengthens the work." />
      <div className="certification-grid">
        {certifications.map((item, index) => (
          <motion.article
            className="certification-card"
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <span className="certification-icon"><FiAward aria-hidden="true" /></span>
            <div>
              <p>{item.year}</p>
              <h3>{item.title}</h3>
              <span>{item.issuer}</span>
            </div>
            <FiArrowUpRight className="certification-arrow" aria-hidden="true" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
