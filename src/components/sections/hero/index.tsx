import { motion } from 'framer-motion';
import Container from '../../shared/container';
import {
  HeroSection,
  HeroContent,
  Title,
  Subtitle,
  ButtonGroup
} from './styles';

const Hero = () => {
  const titleAnimation = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <HeroSection id="home">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <HeroContent>
            <motion.div variants={titleAnimation}>
              <Title>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Développeur
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Web
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Full Stack
                </motion.span>
              </Title>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Subtitle>
                Je crée des expériences web innovantes et intuitives
              </Subtitle>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ButtonGroup>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                 <motion.button
  className="btn btn-primary"
  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  whileHover={{
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)"
  }}
  style={{
    backgroundColor: '#9b59b6',  // couleur mauve
    color: '#fff',               // couleur du texte en blanc
    border: 'none', 
    fontSize:'1.5rem'   ,         // enlever la bordure par défaut
    padding: '10px 20px',        // ajouter du padding pour rendre le bouton plus grand
    borderRadius: '5px',         // arrondir les coins
    cursor: 'pointer',           // changer le curseur quand on survole le bouton
    transition: 'all 0.3s ease', // pour une transition fluide
  }}
>
  Voir mes projets
</motion.button>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    className="btn btn-secondary"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    whileHover={{
                      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)"
                    }}
                    style={{
                       
                        fontSize:'1.5rem'   ,         // enlever la bordure par défaut
                        marginTop:'0.5rem',
                        display:'block'
                      }}
                  >
                    Me contacter
                  </motion.button>
                </motion.div>
              </ButtonGroup>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="scroll-indicator"
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                ↓
              </motion.div>
            </motion.div>
          </HeroContent>
        </motion.div>
      </Container>
    </HeroSection>
  );
};

export default Hero;