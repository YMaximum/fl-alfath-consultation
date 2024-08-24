import React from "react";
import styled from "styled-components";
import BoltIcon from "./icons/BoltIcon";
import { colors, styleConstants } from "../styles/styles";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import DevGuideIcon from "./icons/DevGuideIcon";
import heroIllustration from "../assets/top-view-local-foods-with-copy-space.png";

const SectionContainer = styled.section`
  margin: 0 auto;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const FirstContentContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: red;
  padding: 2rem 0 8rem 0;
  background-color: rgba(245, 245, 245, 0.459);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 24px;
  box-shadow: 0px 6px 25px -1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 6px 25px -1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 6px 25px -1px rgba(0, 0, 0, 0.2);
  max-width: 1100px;

  @media screen and (max-width: 1100px) {
    margin: 0 1rem;
  }
`;

const FirstContent = styled.div`
  margin: 0 auto;
  max-width: ${styleConstants.containerMaxWidth};
  padding: 0 2rem;
  gap: 0.5rem;
  position: relative;

  img {
    height: 300px;
    position: absolute;
    top: -2rem;
    right: 0;
  }

  div.left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    padding: 0 1rem;
    justify-content: start;
  }
`;

const Headline = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: ${colors.primaryBlack};

  span {
    color: ${colors.primaryGreen};
  }

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

const SubHeadline = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${colors.secondaryText};

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const SecondContent = styled.div`
  margin: 0 auto;
  max-width: ${styleConstants.containerMaxWidth};
  padding: 0 3rem;

  @media screen and (max-width: 800px) {
    padding: 0 2rem;
  }
`;

const SubHero = styled.div`
  width: 100%;
  margin-top: -130px;
  background-color: rgba(245, 245, 245, 0.459);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 24px;
  box-shadow: 0px 6px 25px -1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 6px 25px -1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 6px 25px -1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 3rem;

  @media screen and (max-width: 1100px) {
    margin-top: -100px;
  }

  @media screen and (max-width: 800px) {
    top: 300px;
  }

  @media screen and (max-width: 600px) {
    top: 200px;
    padding: 1.5rem 1.5rem;
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
    fill: ${colors.primaryBlack};
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
        <FirstContentContainer>
          <FirstContent>
            <div className="left">
              <Headline>
                Tingkatkan Keuntungan Hingga 200% dengan{" "}
                <span>Sertifikasi Halal</span>
              </Headline>
              <SubHeadline>
                Raih kepercayaan lebih dari jutaan konsumen muslim dan akses
                pasar global yang lebih luas. Kami akan memandu Anda melalui
                setiap tahap proses sertifikasi halal, sehingga Anda dapat fokus
                pada bisnis inti.
              </SubHeadline>
            </div>
            <img src={heroIllustration} alt="hero illustration" />
          </FirstContent>
        </FirstContentContainer>
        <SecondContent>
          <SubHero>
            <SubHeroPoints>
              <SubHeroPointCard>
                <DevGuideIcon />
                <div>
                  <h3>200+ Klien Senang</h3>
                  <p>
                    Kepuasan Lebih dari 200 perusahaan telah membuktikan bahwa
                    kami memberikan pelayanan terbaik
                  </p>
                </div>
              </SubHeroPointCard>
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
            </SubHeroPoints>
            <SubHeroSecondContent>
              <GettingStartedHeadlines>
                <p>
                  Momen usahamul <span>#saatnyahalal</span>
                </p>
                <p>
                  Percayakan sertifikasi halal Anda pada ahli yang berpengalaman
                </p>
              </GettingStartedHeadlines>
              <a href="#contact">
                <GettingStartedButton>
                  <span>Konsultasi sekarang</span>
                  <ChevronRightIcon />
                </GettingStartedButton>
              </a>
            </SubHeroSecondContent>
          </SubHero>
        </SecondContent>
      </SectionContainer>
    </>
  );
}
