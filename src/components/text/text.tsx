import styled from 'styled-components';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// ====================
// Normal text component
// ====================
export const Text = ({ children, className, onClick }: TextProps) => {
  return (
    <TextWrapper className={className} onClick={onClick}>
      {children}
    </TextWrapper>
  );
};

const TextWrapper = styled.p`
  margin: 0;
  padding: 0;
`;
