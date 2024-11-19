import { motion } from 'framer-motion';
import Container from '../../shared/container';
import { skillsData } from '../../../data/skills';
import {
  SkillsSection,
  SkillsHeader,
  Title,
  Subtitle,
  SkillsGrid,
  SkillCategory,
  CategoryTitle,
  SkillsList,
  SkillItem,
  SkillName,
  SkillLevel,
  LevelDot
} from './styles';

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SkillsHeader>
            <Title>Mes Compétences</Title>
            <Subtitle>
              Un aperçu de mes compétences techniques et professionnelles
            </Subtitle>
          </SkillsHeader>
        </motion.div>

        <SkillsGrid>
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <SkillCategory>
                <CategoryTitle>{category.title}</CategoryTitle>
                <SkillsList>
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <SkillItem>
                        <SkillName>{skill.name}</SkillName>
                        <SkillLevel>
                          {[1, 2, 3, 4, 5].map((value) => (
                            <LevelDot
                              key={value}
                              filled={value <= skill.level}
                            />
                          ))}
                        </SkillLevel>
                      </SkillItem>
                    </motion.div>
                  ))}
                </SkillsList>
              </SkillCategory>
            </motion.div>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;