// src/components/shared/Button/styles.ts
import styled from 'styled-components';

interface StyledButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export const StyledButton = styled.button.attrs<StyledButtonProps>((props) => ({
  type: props.type || 'button',
}))<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size = 'medium' }) =>
    ({
      small: '0.5rem 1rem',
      medium: '0.75rem 1.5rem',
      large: '1rem 2rem'
    }[size])};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  text-decoration: none;
  
  ${({ variant = 'primary', theme }) =>
    variant === 'primary'
      ? `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    &:hover {
      background-color: ${theme.colors.primary}e6;
    }
  `
      : `
    background-color: ${theme.colors.gray[200]};
    color: ${theme.colors.gray[800]};
    &:hover {
      background-color: ${theme.colors.gray[300]};
    }
  `}
`;