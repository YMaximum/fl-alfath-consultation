import React from "react";
import styled from "styled-components";
import { colors } from "../styles/styles";
import Carousel from "react-multi-carousel";
import forestHillsLogo from "../assets/forest-hills-ciwidey-logo.png";
import muviJayaBlessindoLogo from "../assets/muvi-jaya-blessindo.png";
import "react-multi-carousel/lib/styles.css";

const SectionContainer = styled.section`
  width: 100%;
  padding: 1rem 0;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 2rem;

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${colors.secondaryText};
  text-transform: uppercase;
  letter-spacing: 2px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
    letter-spacing: 1px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;

  img {
    height: 70px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.6;
    transition: all 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%);
    opacity: 1;
  }

  @media screen and (max-width: 1024px) {
    img {
      height: 55px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0.5rem 1rem;

    img {
      height: 45px;
    }
  }
`;

const DividerLine = styled.div`
  width: 60px;
  height: 2px;
  background: ${colors.primaryGreen};
  margin: 0 auto 1rem;
  border-radius: 2px;
`;

export default function CustomersSection(): React.ReactElement {
  const clients = [
    {
      name: "Forest Hills Ciwidey",
      logo: forestHillsLogo,
      alt: "Hotel Forest Hills Ciwidey - Klien Sertifikasi Halal Falhalal",
    },
    {
      name: "PT Muvi Jaya Blessindo",
      logo: muviJayaBlessindoLogo,
      alt: "PT Muvi Jaya Blessindo - Klien Sertifikasi Halal Falhalal",
    },
  ];

  return (
    <SectionContainer aria-label="Klien kami">
      <ContentContainer>
        <DividerLine />
        <Heading>Dipercaya oleh perusahaan terpercaya</Heading>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          customTransition="transform 500ms ease-in-out"
          draggable
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              slidesToSlide: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 600 },
              items: 2,
              slidesToSlide: 1,
            },
            mobile: {
              breakpoint: { max: 600, min: 0 },
              items: 2,
              slidesToSlide: 1,
            },
          }}
          showDots={false}
          swipeable
          transitionDuration={500}
        >
          {clients.map((client, index) => (
            <LogoContainer key={index}>
              <img src={client.logo} alt={client.alt} loading="lazy" />
            </LogoContainer>
          ))}
        </Carousel>
      </ContentContainer>
    </SectionContainer>
  );
}
