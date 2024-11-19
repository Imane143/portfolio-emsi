// src/components/sections/Skills/styles.ts
import styled from 'styled-components';

export const SkillsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SkillsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const SkillsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const SkillCategory = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const SkillsList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
  }
`;

export const SkillName = styled.span`
  color: ${({ theme }) => theme.colors.gray[800]};
  font-weight: 500;
  flex: 1;
`;

export const SkillLevel = styled.div`
  display: flex;
  gap: 2px;
`;

export const LevelDot = styled.div<{ filled: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme, filled }) => 
    filled ? theme.colors.primary : theme.colors.gray[200]};
`;