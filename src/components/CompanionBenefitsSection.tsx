import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/styles";
import HealthAndSafetyIcon from "./icons/HealthAndSafetyIcon";
import InvestmentIcon from "./icons/InvestmentIcon";
import TimerIcon from "./icons/TimerIcon";

const SectionContainer = styled.section`
  width: 100%;
  padding: 5rem 0;
  background: linear-gradient(
    180deg,
    ${colors.primaryWhite} 0%,
    rgba(240, 240, 240, 0.5) 100%
  );

  @media screen and (max-width: 600px) {
    padding: 3rem 0;
  }
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 2rem;

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${colors.primaryBlack};
  line-height: 1.2;

  span {
    color: ${colors.primaryGreen};
  }

  @media screen and (max-width: 600px) {
    font-size: 26px;
  }
`;

const Subheading = styled.p`
  font-size: 16px;
  color: ${colors.secondaryText};
  line-height: 1.6;
`;

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

interface CardProps {
  $isVisible: boolean;
  $delay?: number;
}

const Card = styled.div<CardProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid rgba(0, 170, 91, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(30px)"};
  transition-delay: ${({ $delay }) => $delay || 0}ms;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${colors.primaryGreen} 0%,
      #00d665 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 170, 91, 0.15);
    border-color: ${colors.primaryGreenLight};

    &::before {
      opacity: 1;
    }
  }

  .icon-wrapper {
    width: 60px;
    height: 60px;
    background: ${colors.primaryGreenLighter};
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
    transition: all 0.3s ease;
  }

  &:hover .icon-wrapper {
    background: ${colors.primaryGreenLight};
    transform: scale(1.1);
  }

  svg {
    fill: ${colors.primaryGreen};
    width: 32px;
    height: 32px;
  }

  h3.subtitle {
    color: ${colors.primaryBlack};
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  p.content {
    font-size: 15px;
    line-height: 1.7;
    color: ${colors.secondaryText};
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    padding: 1.5rem;

    h3.subtitle {
      font-size: 18px;
    }

    p.content {
      font-size: 14px;
    }
  }
`;

export default function CompanionBenefitsSection(): React.ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <HealthAndSafetyIcon />,
      title: "Tenang dan Aman",
      content:
        "Anda akan didampingi oleh tenaga profesional yang berpengalaman dalam proses sertifikasi halal, memastikan setiap langkah berjalan dengan lancar.",
    },
    {
      icon: <InvestmentIcon />,
      title: "Investasi yang Cerdas",
      content:
        "Biaya yang Anda keluarkan akan memberikan manfaat jangka panjang yang signifikan, dengan dampak yang jauh lebih besar untuk bisnis Anda.",
    },
    {
      icon: <TimerIcon />,
      title: "Proses Cepat dan Efisien",
      content:
        "Kami akan mengatasi setiap hambatan yang mungkin muncul dalam proses sertifikasi, memberikan solusi yang tepat sehingga proses dapat selesai dengan cepat.",
    },
  ];

  return (
    <SectionContainer ref={sectionRef}>
      <ContentContainer>
        <HeaderSection>
          <Heading>
            Keuntungan Jasa <span>Pendampingan</span> Kami
          </Heading>
          <Subheading>
            Nikmati kemudahan dan keamanan dalam proses sertifikasi halal bersama
            kami
          </Subheading>
        </HeaderSection>
        <CardContainer>
          {benefits.map((benefit, index) => (
            <Card key={index} $isVisible={isVisible} $delay={index * 150}>
              <div className="icon-wrapper">{benefit.icon}</div>
              <h3 className="subtitle">{benefit.title}</h3>
              <p className="content">{benefit.content}</p>
            </Card>
          ))}
        </CardContainer>
      </ContentContainer>
    </SectionContainer>
  );
}
