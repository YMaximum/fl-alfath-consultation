import React from "react";
import styled from "styled-components";
import { colors, styleConstants } from "../styles/styles";
import Carousel from "react-multi-carousel";
import forestHillsLogo from "../assets/forest-hills-ciwidey-logo.png";
import muviJayaBlessindoLogo from "../assets/muvi-jaya-blessindo.png";
import "react-multi-carousel/lib/styles.css";

const SectionContainer = styled.section`
  width: 100%;
  margin-bottom: 50px;
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
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: ${colors.secondaryText};

  span {
    color: ${colors.primaryGreen};
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 70px;
  }

  @media screen and (max-width: 1024px) {
    img {
      height: 60px;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      height: 50px;
    }
  }
`;

export default function CustomersSection(): React.ReactElement {
  return (
    <>
      <SectionContainer>
        <ContentContainer>
          <Heading>Pelanggan kami :</Heading>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={1}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            customTransition="all 1s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 2,
                slidesToSlide: 1,
              },
              mobile: {
                breakpoint: {
                  max: 720,
                  min: 0,
                },
                items: 2,
                slidesToSlide: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 720,
                },
                items: 2,
                slidesToSlide: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            swipeable
            transitionDuration={3000}
          >
            <LogoContainer>
              <img src={forestHillsLogo} alt="forest hills ciwidey logo" />
            </LogoContainer>
            <LogoContainer>
              <img src={muviJayaBlessindoLogo} alt="muvi jaya blessindo logo" />
            </LogoContainer>
          </Carousel>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
