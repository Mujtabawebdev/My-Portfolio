import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection({ projects }) {
  return (
    <section className="section-pad projects-section" id="projects">
      <SectionHeading eyebrow="Projects" title="Real-world full-stack projects built with modern web technologies." />

      <div className="project-grid">
        {projects.map((project, index) => {
          const Card = project.repoUrl ? motion.a : motion.article;

          return (
            <Card
              className={`project-card${project.featured ? " project-featured" : ""}${project.repoUrl ? " project-link" : ""}`}
              key={project.title}
              href={project.repoUrl}
              target={project.repoUrl ? "_blank" : undefined}
              rel={project.repoUrl ? "noreferrer" : undefined}
              aria-label={project.repoUrl ? `Open ${project.title} GitHub repository` : undefined}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              {project.image ? (
                <motion.div
                  className="project-media"
                  initial={{ clipPath: "inset(0 0 100% 0)" }}
                  whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.img
                    className="project-image"
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    initial={{ scale: 1.12 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.div>
              ) : (
                <div className={`project-top ${project.visualClass}`}>
                  <span>{project.initials}</span>
                  <p>{project.subtitle}</p>
                </div>
              )}
              <div className="project-body">
                <div className="project-meta">{project.meta}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
