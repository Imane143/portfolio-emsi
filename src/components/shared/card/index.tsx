// src/components/shared/Card/index.tsx
import { ReactNode } from 'react';
import { StyledCard, CardHeader, CardTitle, CardContent } from './styles';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const Card = ({ title, children, className }: CardProps) => {
  return (
    <StyledCard className={className}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};

export default Card;