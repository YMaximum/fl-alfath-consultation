import React from "react";
import styled from "styled-components";
import { colors, styleConstants } from "../styles/styles";
import forestHillLogo from "../assets/forest-hills-ciwidey-logo.png";
import muviJayaBlessindoLogo from "../assets/muvi-jaya-blessindo.png";
import repeatedSquareDark from "../assets/repeated-square-dark.webp";
import quoteImg from "../assets/left-quote-svgrepo-com.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SectionContainer = styled.section`
  width: 100%;
  margin-bottom: 100px;
  background-image: url(${repeatedSquareDark});
  border-radius: 24px 24px 0 0;
  padding: 2rem 0;

  @media screen and (max-width: 600px) {
    margin-bottom: 50px;
  }
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: ${styleConstants.containerMaxWidth};
  padding: 5rem 2rem 2rem 2rem;
  position: relative;

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${colors.primaryWhite};

  span {
    color: ${colors.secondaryText};
  }

  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
`;

const TestimonyContainer = styled(Carousel)`
  background-color: ${colors.primaryWhite};
  border-radius: 1rem;
  box-shadow: 0px 8px 0px 0px ${colors.primaryGreen} inset;
  -webkit-box-shadow: 0px 8px 0px 0px ${colors.primaryGreen} inset;
  -moz-box-shadow: 0px 8px 0px 0px ${colors.primaryGreen} inset;
`;

const TestimonyCard = styled.div`
  position: relative;
  padding: 1.5rem;

  img.quote-img {
    position: absolute;
    height: 60px;
    opacity: 0.1;
    top: 3%;
    left: 2%;
  }

  div.testimony {
    color: ${colors.primaryBlack};
    line-height: 24px;
    transition: all 0.3s;
    font-weight: 400;
    font-size: 14px;
  }

  div.profile {
    margin-top: 1rem;
    display: flex;
    width: 100%;
    justify-content: space-between;

    img {
      height: 70px;
      width: fit-content;
    }

    p.company {
      color: ${colors.primaryGreen};
      font-weight: 700;
      font-size: 16px;
    }
  }
`;

export default function TestimonialSection(): React.ReactElement {
  const testimonialData = [
    {
      company: "Hotel Forest Hill Ciwidey",
      profileLogo: forestHillLogo,
      testimony:
        "Saya atas nama management mengucapkan banyak terimakasih kepada tim Falhalal dan jajaran team MUI Jabar khususnya yang telah membantu pengajuan Sertifikat Halal Restaurant kami. Terimakasih banyak sudah sabar dan tanggap membantu kami yang masih awam dalam pengurusan izin tersebut dari awal hingga akhir, memberikan penjelasan yang sangat detail dan juga mendampingi kami sampai ke langkah-langkah penggunaan beberapa portal pengajuan.",
    },
    {
      company: "PT Muvi Jaya Blessindo",
      profileLogo: muviJayaBlessindoLogo,
      testimony:
        "Prosesnya sangat cepat dan informatif, dari awal pendaftaran sampe terbit sertifikat halal tidak ada kendala sama sekali, tim auditnya juga baik.",
    },
  ];

  return (
    <>
      <SectionContainer id="testimony">
        <ContentContainer>
          <Heading>
            Apa kata <span>mereka?</span>
          </Heading>
          <TestimonyContainer
            additionalTransfrom={0}
            autoPlaySpeed={3000}
            centerMode={false}
            arrows={false}
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
                items: 2,
                slidesToSlide: 1,
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
                items: 1,
                slidesToSlide: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            slidesToSlide={1}
            swipeable
          >
            {testimonialData.map((item, index) => (
              <TestimonyCard key={index}>
                <img className="quote-img" src={quoteImg} alt="quote image" />
                <div className={`testimony`}>{item.testimony}</div>
                <div className="profile">
                  <p className="company">{item.company}</p>
                  <img src={item.profileLogo} alt="profile" />
                </div>
              </TestimonyCard>
            ))}
          </TestimonyContainer>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
