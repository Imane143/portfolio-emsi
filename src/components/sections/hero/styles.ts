// src/components/sections/Hero/styles.ts
import styled from 'styled-components';

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Subtitle = styled.h2`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  color: ${({ theme }) => theme.colors.gray[600]};
  font-weight: 400;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ScrollDown = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 0.9rem;
  
  &::after {
    content: '';
    width: 2px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.gray[400]};
    animation: scrollDown 2s ease-in-out infinite;
  }
  
  @keyframes scrollDown {
    0% {
      transform: scaleY(0);
      transform-origin: top;
    }
    50% {
      transform: scaleY(1);
      transform-origin: top;
    }
    50.1% {
      transform: scaleY(1);
      transform-origin: bottom;
    }
    100% {
      transform: scaleY(0);
      transform-origin: bottom;
    }
  }
`;