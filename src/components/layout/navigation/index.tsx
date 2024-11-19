// src/components/layout/Navigation/index.tsx
import { useState } from 'react';
import {
  Nav,
  DesktopMenu,
  MobileMenu,
  NavLink,
  MenuButton
} from './styles';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Projets', href: '#projects' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Nav>
      <DesktopMenu>
        {navItems.map((item) => (
          <NavLink 
            key={item.href} 
            href={item.href}
            onClick={handleNavClick}
          >
            {item.label}
          </NavLink>
        ))}
      </DesktopMenu>

      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? 'Fermer' : 'Menu'}
      </MenuButton>

      <MobileMenu isOpen={isMenuOpen}>
        {navItems.map((item) => (
          <NavLink 
            key={item.href} 
            href={item.href}
            onClick={handleNavClick}
          >
            {item.label}
          </NavLink>
        ))}
      </MobileMenu>
    </Nav>
  );
};

export default Navigation;