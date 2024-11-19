// src/components/layout/Footer/index.tsx
import Container from '../../shared/container';
import {
  StyledFooter,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterLink,
  SocialLinks,
  Copyright
} from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Navigation</FooterTitle>
            <FooterLink href="#home">Accueil</FooterLink>
            <FooterLink href="#about">À propos</FooterLink>
            <FooterLink href="#projects">Projets</FooterLink>
            <FooterLink href="#skills">Compétences</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact</FooterTitle>
            <FooterLink href="mailto:contact@example.com">
              contact@example.com
            </FooterLink>
            <FooterLink href="tel:+212 XXXXXXXXX">++212 XXXXXXXXX</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Réseaux sociaux</FooterTitle>
            <SocialLinks>
              <FooterLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </FooterLink>
              <FooterLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </FooterLink>
              <FooterLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </FooterLink>
            </SocialLinks>
          </FooterSection>
        </FooterContent>

        <Copyright>
          © {currentYear} Mon Portfolio. Tous droits réservés.
        </Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;