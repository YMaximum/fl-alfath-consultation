import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/styles";
import DevGuideIcon from "./icons/DevGuideIcon";
import GroupPersonIcon from "./icons/GroupPersonIcon";

const SectionContainer = styled.section`
  width: 100%;
  padding: 4rem 0 5rem 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    ${colors.primaryGreenLighter} 50%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const ContentContainer = styled.div`
  position: relative;
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

const Description = styled.p`
  font-size: 17px;
  color: ${colors.secondaryText};
  line-height: 1.6;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

interface ServiceCardProps {
  $delay?: number;
  $isVisible: boolean;
}

const ServiceCard = styled.div<ServiceCardProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(20px)"};
  transition-delay: ${({ $delay }) => $delay || 0}ms;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 12px 35px rgba(0, 170, 91, 0.15);
    border-color: ${colors.primaryGreenLight};
  }

  .icon-wrapper {
    width: 60px;
    height: 60px;
    background: ${colors.primaryGreenLighter};
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
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

  h3.service {
    font-weight: 700;
    font-size: 20px;
    color: ${colors.primaryBlack};
    margin: 0;
  }

  p.desc {
    font-size: 15px;
    color: ${colors.secondaryText};
    line-height: 1.6;
    margin: 0;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: ${colors.primaryGreen};
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      gap: 0.75rem;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill={colors.primaryGreen}
  >
    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
  </svg>
);

export default function ServicesSection(): React.ReactElement {
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

  const services = [
    {
      icon: <GroupPersonIcon />,
      title: "Konsultasi Gratis",
      description:
        "Butuh informasi lebih lanjut? Konsultasikan semua pertanyaan Anda dengan ahli kami secara gratis. Kami siap membantu Anda memahami proses sertifikasi halal.",
      link: "#contact",
      linkText: "Mulai konsultasi",
    },
    {
      icon: <DevGuideIcon />,
      title: "Pendampingan Penuh",
      description:
        "Tenang saja, kami akan mengurus semua prosesnya. Anda hanya perlu fokus pada bisnis Anda. Tim profesional kami akan mendampingi setiap langkah.",
      link: "#contact",
      linkText: "Pelajari lebih lanjut",
    },
  ];

  return (
    <SectionContainer ref={sectionRef}>
      <ContentContainer>
        <HeaderSection>
          <Heading>
            <span>Solusi</span> Lengkap Sertifikasi Halal
          </Heading>
          <Description>
            Dapatkan sertifikat halal dengan mudah dan cepat. Kami akan memandu
            Anda dari awal hingga akhir, mulai dari konsultasi gratis hingga
            sertifikat terbit.
          </Description>
        </HeaderSection>
        <CardsWrapper>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              $delay={index * 150}
              $isVisible={isVisible}
            >
              <div className="icon-wrapper">{service.icon}</div>
              <h3 className="service">{service.title}</h3>
              <p className="desc">{service.description}</p>
              <a href={service.link}>
                {service.linkText}
                <ChevronIcon />
              </a>
            </ServiceCard>
          ))}
        </CardsWrapper>
      </ContentContainer>
    </SectionContainer>
  );
}
