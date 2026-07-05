import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import BoltIcon from "./icons/BoltIcon";
import { colors } from "../styles/styles";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import DevGuideIcon from "./icons/DevGuideIcon";
import heroIllustration from "../assets/top-view-local-foods-with-copy-space.png";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const SectionContainer = styled.section`
  margin: 0 auto;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const FirstContentContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 2.5rem 0 9rem 0;
  background: linear-gradient(
    135deg,
    rgba(245, 245, 245, 0.9) 0%,
    rgba(255, 255, 255, 0.7) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0px 10px 40px -5px rgba(0, 0, 0, 0.1);
  max-width: 1100px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primaryGreen} 0%, #00d665 100%);
  }

  @media screen and (max-width: 1100px) {
    margin: 0 1rem;
  }
`;

const FirstContent = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 2rem;
  gap: 0.5rem;
  position: relative;

  img {
    height: 320px;
    position: absolute;
    top: -2rem;
    right: 0;
    animation: ${float} 4s ease-in-out infinite;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
  }

  div.left {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 70%;
  }

  @media screen and (max-width: 800px) {
    img {
      display: none;
    }

    div.left {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 1.5rem;
    justify-content: start;
  }
`;

const Headline = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${colors.primaryBlack};
  line-height: 1.2;
  letter-spacing: -0.02em;

  span {
    color: ${colors.primaryGreen};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: ${colors.primaryGreenLight};
      z-index: -1;
      border-radius: 4px;
    }
  }

  @media screen and (max-width: 780px) {
    font-size: 34px;
  }

  @media screen and (max-width: 600px) {
    font-size: 28px;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

const SubHeadline = styled.h3`
  font-size: 17px;
  font-weight: 500;
  line-height: 1.7;
  color: ${colors.secondaryText};
  max-width: 540px;

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

const SecondContent = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 3rem;

  @media screen and (max-width: 800px) {
    padding: 0 2rem;
  }
`;

const SubHero = styled.div`
  width: 100%;
  margin-top: -130px;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0px 10px 40px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 3rem;
  position: relative;

  @media screen and (max-width: 1100px) {
    margin-top: -100px;
  }

  @media screen and (max-width: 800px) {
    top: 300px;
  }

  @media screen and (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const SubHeroPoints = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SubHeroPointCard = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.primaryGreenLighter};
    transform: translateX(4px);
  }

  svg {
    fill: ${colors.primaryGreen};
    width: 32px;
    height: 32px;
    min-width: 32px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      font-size: 18px;
      font-weight: 700;
      color: ${colors.primaryBlack};
    }

    p {
      font-size: 14px;
      color: ${colors.secondaryText};
      line-height: 1.5;
    }
  }

  @media screen and (max-width: 600px) {
    div {
      h3 {
        font-size: 16px;
      }
    }
  }
`;

const SubHeroSecondContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const GettingStartedHeadlines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    &:first-child {
      font-size: 18px;
      font-weight: 700;

      span {
        color: ${colors.primaryGreen};
      }
    }

    &:nth-child(2) {
      font-size: 15px;
      font-weight: 500;
      color: ${colors.secondaryText};
    }
  }
`;

const GettingStartedButton = styled.button`
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, ${colors.primaryBlack} 0%, #1a1a4a 100%);
  color: white;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 36, 0.3);

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 36, 0.4);

    svg {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(0, 0, 36, 0.3);
  }
`;

interface AnimatedDivProps {
  $delay?: number;
  $isVisible: boolean;
}

const AnimatedDiv = styled.div<AnimatedDivProps>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.6s ease;
  transition-delay: ${({ $delay }) => $delay || 0}ms;
`;

export default function HeroSection(): React.ReactElement {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <SectionContainer id="hero" ref={sectionRef}>
      <FirstContentContainer>
        <FirstContent>
          <div className="left">
            <Headline>
              Tingkatkan Keuntungan Hingga 200% dengan{" "}
              <span>Sertifikasi Halal</span>
            </Headline>
            <SubHeadline>
              Raih kepercayaan lebih dari jutaan konsumen muslim dan akses pasar
              global yang lebih luas. Kami akan memandu Anda melalui setiap tahap
              proses sertifikasi halal, sehingga Anda dapat fokus pada bisnis
              inti.
            </SubHeadline>
          </div>
          <img
            src={heroIllustration}
            alt="Makanan halal Indonesia - Sertifikasi halal untuk produk Anda"
            loading="eager"
          />
        </FirstContent>
      </FirstContentContainer>
      <SecondContent>
        <SubHero>
          <SubHeroPoints>
            <AnimatedDiv $isVisible={isVisible} $delay={0}>
              <SubHeroPointCard>
                <DevGuideIcon />
                <div>
                  <h3>200+ Klien Senang</h3>
                  <p>
                    Lebih dari 200 perusahaan telah membuktikan bahwa kami
                    memberikan pelayanan terbaik
                  </p>
                </div>
              </SubHeroPointCard>
            </AnimatedDiv>
            <AnimatedDiv $isVisible={isVisible} $delay={100}>
              <SubHeroPointCard>
                <BoltIcon />
                <div>
                  <h3>2+ Tahun Pengalaman</h3>
                  <p>
                    Memahami setiap tantangan yang Anda hadapi dalam proses
                    sertifikasi halal
                  </p>
                </div>
              </SubHeroPointCard>
            </AnimatedDiv>
            <AnimatedDiv $isVisible={isVisible} $delay={200}>
              <SubHeroPointCard>
                <BoltIcon />
                <div>
                  <h3>Proses Cepat, Hasil Terjamin</h3>
                  <p>
                    Dapatkan sertifikat halal Anda dalam waktu 1 bulan tanpa
                    mengorbankan kualitas
                  </p>
                </div>
              </SubHeroPointCard>
            </AnimatedDiv>
          </SubHeroPoints>
          <SubHeroSecondContent>
            <GettingStartedHeadlines>
              <p>
                Momen usahamu <span>#saatnyahalal</span>
              </p>
              <p>Percayakan sertifikasi halal Anda pada ahli berpengalaman</p>
            </GettingStartedHeadlines>
            <a href="#contact" aria-label="Konsultasi sekarang">
              <GettingStartedButton>
                <span>Konsultasi sekarang</span>
                <ChevronRightIcon />
              </GettingStartedButton>
            </a>
          </SubHeroSecondContent>
        </SubHero>
      </SecondContent>
    </SectionContainer>
  );
}
