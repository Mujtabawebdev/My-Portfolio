import { useActiveSection } from "../hooks/useActiveSection";
import { useMobileNav } from "../hooks/useMobileNav";
import { useStickyHeader } from "../hooks/useStickyHeader";

export function PortfolioHeader({ navItems }) {
  const isScrolled = useStickyHeader();
  const { isOpen, toggleNav, closeNav } = useMobileNav();
  const activeSection = useActiveSection(navItems.map((item) => item.href.replace("#", "")));

  return (
    <header className={`site-header${isScrolled ? " scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="Muhammad Mujtaba Naveed home">
        <span className="brand-mark">M</span>
        <span className="brand-name">Muhammad Mujtaba</span>
      </a>

      <button className="nav-toggle" type="button" aria-expanded={isOpen} aria-controls="site-nav" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="site-nav" className={`site-nav${isOpen ? " open" : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.href ? "active" : ""}
            onClick={closeNav}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
