import styled from "styled-components";
import { Link } from "react-router-dom";

import { BlankContainer } from "../components/container/blank-container";
import { Text } from "../components/text/text";

export const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <BlankContainer>
        <ContentWrapper>
          <Text404>404</Text404>
          <TextDescription>
            Oops! Look likes something going wrong
          </TextDescription>
          <Text className="center">
            Page Cannot be found! we'll have it figured out in no time.
            Menwhile, cheek out these fresh ideas:
          </Text>
          <BackLink to={"/"}>Go to home</BackLink>
        </ContentWrapper>
      </BlankContainer>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 134px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 134px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 32px;
`;

const Text404 = styled.p`
  margin: 0;

  font-size: 96px;
  font-weight: 700;

  color: ${(props) => props.theme.orange};
`;

const TextDescription = styled.p`
  margin: 0;

  font-size: 32px;
  font-weight: 700;

  text-align: center;

  color: ${(props) => props.theme.black};
`;

const BackLink = styled(Link)`
  padding: 16px 48px;

  font-size: 18px;
  text-decoration: none;

  border: none;
  border-radius: 6px;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.orange};
`;
