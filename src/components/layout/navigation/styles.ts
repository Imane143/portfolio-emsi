// src/components/layout/Navigation/styles.ts
import styled from 'styled-components';

interface MobileMenuProps {
  isOpen: boolean;
}

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const DesktopMenu = styled.div`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform ${({ theme }) => theme.transitions.default};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.gray[700]};
  text-decoration: none;
  font-weight: 500;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  cursor: pointer;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;