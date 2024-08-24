import React from "react";
import styled from "styled-components";
import { colors, styleConstants } from "../styles/styles";
import halalLogo from "../assets/logo-halal-indonesia.png";
import lppomLogo from "../assets/lppom-mui-logo.webp";
import itbLogo from "../assets/logo-itb-1024.png";

const SectionContainer = styled.section`
  width: 100%;
  padding: 5rem 0;

  @media screen and (max-width: 600px) {
    padding: 2rem 0;
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

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 1rem;

  span {
    color: ${colors.primaryGreen};
  }

  @media screen and (max-width: 600px) {
    text-align: start;
    font-size: 24px;
    margin-bottom: 1rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div.left {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      line-height: 24px;
    }
  }

  div.logos {
    display: flex;
    justify-content: center;
    gap: 1rem;

    img {
      height: 100px;
    }
  }

  @media screen and (max-width: 800px) {
    div.logos {
      img {
        height: 80px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    div.left {
      p {
        line-height: 20px;
        font-size: 14px;
      }
    }

    div.logos {
      img {
        height: 60px;
      }
    }
  }

  @media screen and (max-width: 450px) {
    div.logos {
      flex-direction: column;
      align-items: center;

      img {
        width: fit-content;
      }
    }
  }
`;

export default function AboutUs(): React.ReactElement {
  return (
    <>
      <SectionContainer id="about">
        <ContentContainer>
          <Heading>
            <span>Tentang</span> kami
          </Heading>
          <Card>
            <div className="left">
              <p>
                Didirikan oleh Naufal Alfath, alumni Teknik Pangan ITB dengan
                pengalaman sebagai auditor halal LPPOM. Kami hadir untuk
                membantu bisnis Anda meraih sertifikasi halal. Dengan
                pengetahuan mendalam tentang standar halal, kami siap memandu
                Anda melalui setiap tahap proses.
              </p>
            </div>
            <div className="logos">
              <img src={halalLogo} alt="halal logo indonesia" />
              <img src={lppomLogo} alt="lppom logo" />
              <img src={itbLogo} alt="itb logo" />
            </div>
          </Card>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
