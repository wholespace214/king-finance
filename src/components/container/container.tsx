import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>;
};

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1440px;

  margin: 0;
`;
