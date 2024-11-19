// src/components/sections/About/styles.ts
import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const AboutContent = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.primary}40,
      transparent
    );
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  grid-template-columns: 1fr;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const HighlightItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
  
  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;