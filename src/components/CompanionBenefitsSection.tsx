import React from "react";
import styled from "styled-components";
import { colors, styleConstants } from "../styles/styles";
import HealthAndSafetyIcon from "./icons/HealthAndSafetyIcon";
import InvestmentIcon from "./icons/InvestmentIcon";
import TimerIcon from "./icons/TimerIcon";

const SectionContainer = styled.section`
  width: 100%;
  padding: 4rem 0;
  background-color: rgb(240, 240, 240);
  border-radius: 24px 24px 0 0;

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
  text-align: center;
  margin-bottom: 2rem;

  span {
    color: ${colors.primaryGreen};
  }

  @media screen and (max-width: 600px) {
    text-align: start;
    font-size: 24px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #00aa5b10;
  padding: 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  svg {
    fill: ${colors.primaryGreen};
    width: 50px;
    height: 50px;
  }

  h3.subtitle {
    color: ${colors.primaryGreen};
    font-size: 18px;
    font-weight: 600;
  }

  p.content {
    font-size: 14px;
    line-height: 20px;
  }

  &:hover {
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 600px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export default function CompanionBenefitsSection(): React.ReactElement {
  const benefits = [
    {
      subTitle: "Tenang dan Aman",
      content:
        "Anda akan didampingi oleh tenaga profesional yang berpengalaman dalam proses sertifikasi halal, memastikan setiap langkah berjalan dengan lancar.",
      illustration: <HealthAndSafetyIcon />,
    },
    {
      subTitle: "Investasi yang Cerdas",
      content:
        "Biaya yang Anda keluarkan akan memberikan manfaat jangka panjang yang signifikan, dengan dampak yang jauh lebih besar untuk bisnis Anda.",
      illustration: <InvestmentIcon />,
    },
    {
      subTitle: "Proses Cepat dan Efisien",
      content:
        "Kami akan mengatasi setiap hambatan yang mungkin muncul dalam proses sertifikasi, memberikan solusi yang tepat sehingga proses dapat selesai dengan cepat.",
      illustration: <TimerIcon />,
    },
  ];

  return (
    <>
      <SectionContainer>
        <ContentContainer>
          <Heading>
            Keuntungan jasa <span>pendampingan</span> kami
          </Heading>
          <CardContainer>
            {benefits.map((item, index) => (
              <Card key={index}>
                {item.illustration}
                <h3 className="subtitle">{item.subTitle}</h3>
                <p className="content">{item.content}</p>
              </Card>
            ))}
          </CardContainer>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
