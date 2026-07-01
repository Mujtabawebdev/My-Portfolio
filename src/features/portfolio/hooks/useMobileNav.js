import { useState } from "react";

export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    toggleNav: () => setIsOpen((current) => !current),
    closeNav: () => setIsOpen(false),
  };
}
