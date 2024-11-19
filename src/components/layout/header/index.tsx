// src/components/layout/Header/index.tsx
import { useState } from 'react';
import Container from '../../shared/container';
import { 
  StyledHeader, 
  HeaderContent, 
  Logo, 
  NavLinks, 
  NavLink,
  MobileMenuButton 
} from './styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Projets', href: '#projects' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Logo>Portfolio</Logo>
          
          <NavLinks>
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </NavLinks>
          
          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Menu
          </MobileMenuButton>
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;