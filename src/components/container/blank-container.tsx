import styled from 'styled-components';

interface BlankContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const BlankContainer = ({
  children,
  className
}: BlankContainerProps) => {
  return (
    <BlankContainerWrapper className={className}>
      {children}
    </BlankContainerWrapper>
  );
};

const BlankContainerWrapper = styled.div`
  width: 100%;

  max-width: 1440px;
  min-height: calc(100vh - 134px);

  margin: 0;
`;
