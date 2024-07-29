import React from "react";
import styled from "styled-components";
import BoltIcon from "./icons/BoltIcon";
import { colors, styleConstants } from "../styles/styles";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import DevGuideIcon from "./icons/DevGuideIcon";

const SectionContainer = styled.section`
  margin: 0 auto;
  max-width: ${styleConstants.containerMaxWidth};
  padding: 0 2rem;
  margin-bottom: 170px;

  @media screen and (max-width: 780px) {
    margin-bottom: 250px;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 350px;
    padding: 0 1rem;
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 400px;
  }

  @media screen and (max-width: 350px) {
    margin-bottom: 450px;
  }
`;

const Hero = styled.div`
  width: 100%;
  height: 500px;
  background-color: #f1fff6;
  border-radius: 24px;
  box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.2),
    0px 0 90px 49px rgba(0, 0, 0, 0.3) inset;
  -webkit-box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.2),
    0px 0 90px 49px rgba(0, 0, 0, 0.3) inset;
  -moz-box-shadow: 0px 6px 12px -1px rgba(0, 0, 0, 0.2),
    0px 0 90px 49px rgba(0, 0, 0, 0.3) inset;
  position: relative;
  padding: 4rem 6%;

  @media screen and (max-width: 600px) {
    height: 300px;
  }
`;

const FirstContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 50%;

  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

const Name = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;

const Headline = styled.h2`
  font-size: 40px;
  font-weight: 600;

  @media screen and (max-width: 780px) {
    font-size: 32px;
  }

  @media screen and (max-width: 600px) {
    font-size: 28px;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

const SubHero = styled.div`
  width: 90%;
  background-color: rgba(245, 245, 245, 0.459);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 24px;
  box-shadow: 0px 6px 25px -1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 6px 25px -1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 6px 25px -1px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 400px;
  left: 5%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 3rem;

  @media screen and (max-width: 780px) {
    top: 300px;
  }

  @media screen and (max-width: 600px) {
    top: 200px;
    padding: 2rem 2rem;
  }
`;

const SubHeroPoints = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SubHeroPointCard = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;

  svg {
    fill: ${colors.secondaryText};
    width: 24px;
    height: 24px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      color: ${colors.secondaryText};
    }
  }
`;

const SubHeroSecondContent = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const GettingStartedHeadlines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  p {
    &:first-child {
      font-size: 16px;
      font-weight: 700;

      span {
        color: ${colors.primaryGreen};
      }
    }

    &:nth-child(2) {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

const GettingStartedButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: ${colors.primaryBlack};
  color: white;
  border: none;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s;

  svg {
    scale: 0.8;
  }

  &:hover {
    background-color: #000000b5;
  }

  &:active {
    scale: 0.95;
  }
`;

export default function HeroSection(): React.ReactElement {
  return (
    <>
      <SectionContainer id="hero">
        <Hero>
          <FirstContentContainer>
            <Name>Fal Consulting</Name>
            <Headline>
              Raih Pasar Lebih Luas dengan Sertifikasi Halal untuk Bisnis Anda.
            </Headline>
          </FirstContentContainer>
          <SubHero>
            <SubHeroPoints>
              <SubHeroPointCard>
                <DevGuideIcon />
                <div>
                  <h3>200+ Sertifikasi</h3>
                  <p>
                    Kami telah berpartisipasi dalam 200+ proses sertifikasi
                    halal
                  </p>
                </div>
              </SubHeroPointCard>
              <SubHeroPointCard>
                <BoltIcon />
                <div>
                  <h3>2+ Tahun</h3>
                  <p>Pengalaman 2+ tahun dengan regulasi halal terbaru</p>
                </div>
              </SubHeroPointCard>
              <SubHeroPointCard>
                <BoltIcon />
                <div>
                  <h3>1 Bulan Saja</h3>
                  <p>
                    Hanya butuh 1 bulan untuk jaminan terbit sertifikat halal
                  </p>
                </div>
              </SubHeroPointCard>
            </SubHeroPoints>
            <SubHeroSecondContent>
              <GettingStartedHeadlines>
                <p>
                  Ini adalah momen usahamu, <span>saatnya halal</span>
                </p>
                <p>Gunakan layanan kami sekarang</p>
              </GettingStartedHeadlines>
              <a href="#contact">
                <GettingStartedButton>
                  <span>Konsultasi sekarang</span>
                  <ChevronRightIcon />
                </GettingStartedButton>
              </a>
            </SubHeroSecondContent>
          </SubHero>
        </Hero>
      </SectionContainer>
    </>
  );
}
