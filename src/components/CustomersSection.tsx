import React from "react";
import styled from "styled-components";
import { colors, styleConstants } from "../styles/styles";
import Carousel from "react-multi-carousel";
import logo1 from "../assets/logo-placeholder-1.svg";
import logo2 from "../assets/logo-placeholder-2.svg";
import logo3 from "../assets/logo-placeholder-3.svg";
import logo4 from "../assets/logo-placeholder-4.svg";

const SectionContainer = styled.section`
  width: 100%;
  margin-bottom: 100px;

  @media screen and (max-width: 600px) {
    margin-bottom: 50px;
  }
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
    height: 30px;
  }

  @media screen and (max-width: 1024px) {
    img {
      height: 25px;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      height: 20px;
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
                items: 4,
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
                items: 3,
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
              <img src={logo1} alt="logo" />
            </LogoContainer>
            <LogoContainer>
              <img src={logo2} alt="logo" />
            </LogoContainer>
            <LogoContainer>
              <img src={logo3} alt="logo" />
            </LogoContainer>
            <LogoContainer>
              <img src={logo4} alt="logo" />
            </LogoContainer>
          </Carousel>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
