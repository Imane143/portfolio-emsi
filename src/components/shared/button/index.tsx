import { ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  border: none;
  
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

const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;