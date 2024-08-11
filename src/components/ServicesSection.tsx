import React from "react";
import styled from "styled-components";
import { colors, styleConstants } from "../styles/styles";
import DevGuideIcon from "./icons/DevGuideIcon";
import GroupPersonIcon from "./icons/GroupPersonIcon";
import DotIllustration from "./icons/DotIllustration";

const SectionContainer = styled.section`
  width: 100%;
  padding: 2rem 0 4rem 0;
  background-color: rgb(240, 240, 240);
  border-radius: 24px 24px 0 0;
`;

const ContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${styleConstants.containerMaxWidth};
  padding: 0 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  min-height: 300px;

  div.illustration-dot {
    position: absolute;
    bottom: 0;

    svg {
      path {
        fill: #00800061;
        stroke: #00800061;
      }
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    div.illustration-dot {
      visibility: hidden;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 600;

  span {
    color: ${colors.primaryGreen};
  }

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: ${colors.secondaryText};
`;

const LeftWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const RightWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;

  svg {
    fill: ${colors.primaryGreen};
    height: 50px;
    width: 50px;
  }

  h3.service {
    font-weight: 600;
    font-size: 18px;
  }

  p.desc {
    font-size: 14px;
  }

  &:hover {
    background-color: #e4e4e4;
  }
`;

export default function ServicesSection(): React.ReactElement {
  return (
    <>
      <SectionContainer>
        <ContentContainer>
          <div className="illustration-dot">
            <DotIllustration />
          </div>
          <LeftWrapper>
            <Heading>
              <span>Jasa</span> yang kami tawarkan
            </Heading>
            <Description>
              Dapatkan Sertifikasi Halal dengan Mudah Bersama Kami. Dengan
              pengalaman yang luas, kami akan mendampingi Anda mulai dari
              penyusunan dokumen, pendaftaran, pemeriksaan, hingga sertifikat
              halal terbit. Kami hadir untuk mendukung perjalanan bisnis Anda
              sepanjang proses ini.
            </Description>
          </LeftWrapper>
          <RightWrapper>
            <ServiceCard>
              <GroupPersonIcon />
              <h3 className="service">Konsultasi</h3>
              <p className="desc">
                Tanyakan semua hal seputar sertifikasi halal dan regulasi yang
                berlaku saat ini.
              </p>
            </ServiceCard>
            <ServiceCard>
              <DevGuideIcon />
              <h3 className="service">Pendampingan</h3>
              <p className="desc">
                Pendaftaran halal usahamu akan kami susun sesuai dengan data dan
                resep usahamu.
              </p>
            </ServiceCard>
          </RightWrapper>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
