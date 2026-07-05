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
  padding: 2.5rem 0 6rem 0;
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primaryGreen} 0%, #00d665 100%);
    border-radius: 24px 24px 0 0;
  }

  @media screen and (max-width: 1100px) {
    margin: 0 1rem;
  }

  @media screen and (max-width: 600px) {
    padding: 2rem 0 4rem 0;
  }
`;

const FirstContent = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 2rem;
  gap: 0.5rem;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    height: 280px;
    object-fit: contain;
    animation: ${float} 4s ease-in-out infinite;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
    flex-shrink: 0;
    margin-left: 2rem;
  }

  div.left {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    flex: 1;
    max-width: 60%;
  }

  @media screen and (max-width: 900px) {
    img {
      height: 220px;
    }

    div.left {
      max-width: 55%;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;

    img {
      display: none;
    }

    div.left {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 1.5rem;
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
      background-color: rgba(0, 170, 91, 0.2);
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
  padding: 0 2rem;
  margin-top: -5rem;
  position: relative;
  z-index: 10;

  @media screen and (max-width: 1100px) {
    margin-top: -4rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
    margin-top: -3rem;
  }
`;

const SubHero = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0px 10px 40px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 2.5rem;
  position: relative;

  @media screen and (max-width: 600px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

const SubHeroPoints = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SubHeroPointCard = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 170, 91, 0.05);
    transform: translateX(4px);
  }

  svg {
    fill: ${colors.primaryGreen};
    width: 32px;
    height: 32px;
    min-width: 32px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      font-size: 17px;
      font-weight: 700;
      color: ${colors.primaryBlack};
      margin: 0;
    }

    p {
      font-size: 14px;
      color: ${colors.secondaryText};
      line-height: 1.5;
      margin: 0;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0.75rem;

    svg {
      width: 28px;
      height: 28px;
      min-width: 28px;
    }

    div {
      h3 {
        font-size: 16px;
      }

      p {
        font-size: 13px;
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
  margin-top: 0.5rem;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const GettingStartedHeadlines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    margin: 0;

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

  @media screen and (max-width: 780px) {
    align-items: center;
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
