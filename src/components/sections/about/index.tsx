// src/components/sections/About/index.tsx
import Container from '../../shared/container';
import {
  AboutSection,
  AboutContent,
  AboutText,
  Title,
  Description,
  ImageContainer,
  HighlightsList,
  HighlightItem
} from './styles';

const About = () => {
  const highlights = [
    'Développement Web Full Stack',
    'React & TypeScript',
    'Node.js & Express',
    'Bases de données SQL & NoSQL',
    'UI/UX Design',
    'Méthodes Agiles'
  ];

  return (
    <AboutSection id="about">
      <Container>
        <AboutContent>
          <AboutText>
            <Title>À propos de moi</Title>
            <Description>
              Je suis un développeur web passionné par la création d'applications 
              web modernes et performantes. Avec une solide expérience en 
              développement front-end et back-end, je m'efforce de créer des 
              solutions innovantes qui répondent aux besoins des utilisateurs.
            </Description>
            <HighlightsList>
              {highlights.map((item, index) => (
                <HighlightItem key={index}>{item}</HighlightItem>
              ))}
            </HighlightsList>
          </AboutText>
          
          <ImageContainer>
            <img 
              src="/profile-image.jpg" 
              alt="Profile"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/600x400';
              }}
            />
          </ImageContainer>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;