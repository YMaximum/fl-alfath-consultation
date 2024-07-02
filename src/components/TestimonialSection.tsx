import React from "react";
import styled from "styled-components";
import { colors, styleConstants } from "../styles/styles";
import profilePlaceholder from "../assets/profile-placeholder.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 1.5rem;

  span {
    color: ${colors.primaryGreen};
  }
`;

const TestimonyCard = styled.div`
  margin: 0 1rem;

  div.testimony {
    background-color: ${colors.primaryGreen};
    padding: 1.5rem;
    color: ${colors.primaryWhite};
    border-radius: 24px;
    line-height: 24px;
    transition: all 0.3s;
    cursor: pointer;

    &.black {
      background-color: #35493d;
    }

    &:hover {
      box-shadow: 14px 14px 13px -12px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: 14px 14px 13px -12px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 14px 14px 13px -12px rgba(0, 0, 0, 0.4);
    }
  }

  div.profile {
    padding: 1.5rem;
    margin-top: -2.5rem;
    display: flex;
    align-items: end;
    gap: 1.5rem;

    img {
      background-color: ${colors.primaryWhite};
      border-radius: 16px;
      box-shadow: 8px 8px 13px -12px rgba(0, 0, 0, 0.61);
      -webkit-box-shadow: 8px 8px 13px -12px rgba(0, 0, 0, 0.61);
      -moz-box-shadow: 8px 8px 13px -12px rgba(0, 0, 0, 0.61);
      width: 55px;
      height: 55px;
    }

    div.details {
      p.name {
        font-weight: 700;
        font-size: 16px;
      }

      p.company {
        color: ${colors.secondaryText};
        font-weight: 700;
        font-size: 12px;
      }
    }
  }
`;

const CustomCarousel = styled(Carousel)``;

export default function TestimonialSection(): React.ReactElement {
  const testimonialData = [
    {
      name: "Ahmad Yasir",
      company: "PT Dagang",
      testimony:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed eafacere vero! Facilis ex",
    },
    {
      name: "Yasir Ahmad",
      company: "PT Dagang",
      testimony:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed eafacere vero! Facilis ex",
    },
    {
      name: "Muhammad Yasir",
      company: "PT Dagang",
      testimony:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed eafacere vero! Facilis ex",
    },
    {
      name: "Yassar",
      company: "PT Dagang",
      testimony:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed eafacere vero! Facilis ex",
    },
    {
      name: "Pat",
      company: "PT Dagang",
      testimony:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed eafacere vero! Facilis ex",
    },
    {
      name: "Alfath",
      company: "PT Dagang",
      testimony:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed eafacere vero! Facilis ex",
    },
  ];

  return (
    <>
      <SectionContainer id="testimony">
        <ContentContainer>
          <Heading>
            Apa kata <span>mereka?</span>
          </Heading>
          <CustomCarousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
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
                items: 3,
                slidesToSlide: 3,
              },
              mobile: {
                breakpoint: {
                  max: 720,
                  min: 0,
                },
                items: 1,
                slidesToSlide: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 720,
                },
                items: 2,
                slidesToSlide: 2,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {testimonialData.map((item, index) => (
              <TestimonyCard key={index}>
                <div className={`testimony ${index % 2 !== 0 && "black"}`}>
                  {item.testimony}
                </div>
                <div className="profile">
                  <img src={profilePlaceholder} alt="profile" />
                  <div className="details">
                    <p className="name">{item.name}</p>
                    <p className="company">{item.company}</p>
                  </div>
                </div>
              </TestimonyCard>
            ))}
          </CustomCarousel>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
