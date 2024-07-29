import React from "react";
import styled from "styled-components";
import { styleConstants } from "../styles/styles";

const SectionContainer = styled.section`
  width: 100%;
  margin-bottom: 100px;

  @media screen and (max-width: 600px) {
    margin-bottom: 50px;
  }
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: ${styleConstants.containerMaxWidth};
  padding: 0 2rem;

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export default function HalalExplanationSection(): React.ReactElement {
  return (
    <>
      <SectionContainer>
        <ContentContainer></ContentContainer>
      </SectionContainer>
    </>
  );
}
