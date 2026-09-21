import { getPortfolioData } from "../api/portfolio.api";
import { ContactSection } from "../components/ContactSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { EducationSection } from "../components/EducationSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { HeroSection } from "../components/HeroSection";
import { PortfolioFooter } from "../components/PortfolioFooter";
import { PortfolioHeader } from "../components/PortfolioHeader";
import { PortfolioAssistant } from "../components/PortfolioAssistant";
import { ProjectsSection } from "../components/ProjectsSection";
import { ServicesSection } from "../components/ServicesSection";
import { SkillsSection } from "../components/SkillsSection";
import { MotionEffects } from "../components/MotionEffects";

export function PortfolioPage() {
  const portfolio = getPortfolioData();

  return (
    <div className="page-shell">
      <MotionEffects />
      <PortfolioHeader navItems={portfolio.navItems} />
      <main>
        <HeroSection hero={portfolio.hero} stats={portfolio.stats} />
        <ServicesSection services={portfolio.services} />
        <ExperienceSection experience={portfolio.experience} />
        <EducationSection education={portfolio.education} />
        <CertificationsSection certifications={portfolio.certifications} />
        <SkillsSection skills={portfolio.skills} />
        <ProjectsSection projects={portfolio.projects} />
        <ContactSection contact={portfolio.contact} />
      </main>
      <PortfolioAssistant />
      <PortfolioFooter />
    </div>
  );
}

