import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/styles";
import halalLogo from "../assets/logo-halal-indonesia.png";
import lppomLogo from "../assets/lppom-mui-logo-circle.png";
import itbLogo from "../assets/logo-itb-1024.png";

const SectionContainer = styled.section`
  width: 100%;
  padding: 4rem 0 5rem 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    ${colors.primaryGreenLighter} 50%,
    rgba(255, 255, 255, 0) 100%
  );

  @media screen and (max-width: 600px) {
    padding: 2.5rem 0;
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
  max-width: 700px;
  margin: 0 auto 2.5rem auto;
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
  line-height: 1.7;
  font-weight: 400;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

interface LogoItemProps {
  $delay?: number;
  $isVisible: boolean;
}

const LogoItem = styled.div<LogoItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.5s ease;
  transition-delay: ${({ $delay }) => $delay || 0}ms;

  img {
    height: 90px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  p {
    font-size: 12px;
    color: ${colors.secondaryText};
    font-weight: 500;
    text-align: center;
  }

  &:hover {
    img {
      filter: grayscale(0%);
      opacity: 1;
      transform: scale(1.05);
    }
  }

  &.lppom img {
    height: 100px;
  }

  @media screen and (max-width: 600px) {
    img {
      height: 60px;
    }

    &.lppom img {
      height: 70px;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 200px;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${colors.primaryGreen} 50%,
    transparent 100%
  );
  margin: 0 auto;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div<LogoItemProps>`
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.5s ease;
  transition-delay: ${({ $delay }) => $delay || 0}ms;

  h4 {
    color: ${colors.primaryGreen};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colors.secondaryText};
    font-size: 14px;
    line-height: 1.5;
  }
`;

export default function AboutUs(): React.ReactElement {
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

  const features = [
    {
      title: "Alumni ITB",
      description: "Lulusan Teknik Pangan ITB dengan pengetahuan mendalam.",
    },
    {
      title: "Auditor LPPOM",
      description: "Pengalaman langsung sebagai auditor halal LPPOM.",
    },
    {
      title: "Profesional",
      description: "Tim berpengalaman dan berdedikasi tinggi.",
    },
  ];

  return (
    <SectionContainer id="about" ref={sectionRef}>
      <ContentContainer>
        <HeaderSection>
          <Heading>
            <span>Tentang</span> Kami
          </Heading>
          <Description>
            Didirikan oleh Naufal Alfath, alumni Teknik Pangan ITB dengan
            pengalaman sebagai auditor halal LPPOM. Kami hadir untuk membantu
            bisnis Anda meraih sertifikasi halal dengan pengetahuan mendalam
            tentang standar halal.
          </Description>
        </HeaderSection>

        <CardContainer>
          <FeatureGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index} $delay={index * 100} $isVisible={isVisible}>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </FeatureCard>
            ))}
          </FeatureGrid>

          <Divider />

          <LogoSection>
            <LogoItem $delay={0} $isVisible={isVisible}>
              <img
                src={halalLogo}
                alt="Logo Halal Indonesia - Badan Penyelenggara Jaminan Produk Halal"
                loading="lazy"
              />
              <p>BPJPH Halal Indonesia</p>
            </LogoItem>
            <LogoItem className="lppom" $delay={100} $isVisible={isVisible}>
              <img
                src={lppomLogo}
                alt="Logo LPPOM MUI - Lembaga Pengkajian Pangan Obat-obatan dan Kosmetika"
                loading="lazy"
              />
              <p>LPPOM MUI</p>
            </LogoItem>
            <LogoItem $delay={200} $isVisible={isVisible}>
              <img
                src={itbLogo}
                alt="Logo Institut Teknologi Bandung"
                loading="lazy"
              />
              <p>Institut Teknologi Bandung</p>
            </LogoItem>
          </LogoSection>
        </CardContainer>
      </ContentContainer>
    </SectionContainer>
  );
}
