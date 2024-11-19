import { motion } from 'framer-motion';
import Container from '../../shared/container';
import { projects } from '../../../data/project';
import {
  ProjectsSection,
  ProjectsHeader,
  Title,
  Subtitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechTag,
  ProjectLinks
} from './styles';

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <ProjectsHeader>
            <Title>Mes Projets</Title>
            <Subtitle>
              Découvrez une sélection de mes projets récents, démontrant
              mes compétences en développement web.
            </Subtitle>
          </ProjectsHeader>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ProjectsGrid>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <ProjectCard>
                  <ProjectImage>
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    />
                  </ProjectImage>
                  
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    
                    <TechStack>
                      {project.technologies.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <TechTag>{tech}</TechTag>
                        </motion.div>
                      ))}
                    </TechStack>
                    
                    <ProjectLinks>
                    <motion.a
  href={project.demoUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
  whileHover={{ 
    scale: 1.05,
    transition: { duration: 0.2 }
  }}
  whileTap={{ 
    scale: 0.95,
    transition: { duration: 0.1 }
  }}
  style={{
    backgroundColor: '#9b59b6',  // couleur mauve
    color: '#fff',               // texte en blanc
    padding: '10px 20px',        // padding pour le confort
    borderRadius: '5px',         // bords arrondis
    textDecoration: 'none',      // enlever le soulignement
    display: 'inline-block',     // s'assurer que c'est en ligne
    cursor: 'pointer',           // curseur en forme de main
    transition: 'all 0.3s ease', // pour une transition fluide
  }}
>
  Voir la démo
</motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ 
                          scale: 0.95,
                          transition: { duration: 0.1 }
                        }}
                      >
                        Code source
                      </motion.a>
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              </motion.div>
            ))}
          </ProjectsGrid>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;