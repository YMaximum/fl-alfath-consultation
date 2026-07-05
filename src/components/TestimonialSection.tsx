import React, { useRef } from "react";
import styled from "styled-components";
import { colors } from "../styles/styles";
import forestHillLogo from "../assets/forest-hills-ciwidey-logo.png";
import muviJayaBlessindoLogo from "../assets/muvi-jaya-blessindo.png";
import repeatedSquareDark from "../assets/repeated-square-dark.webp";
import quoteImg from "../assets/left-quote-svgrepo-com.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SectionContainer = styled.section`
  width: 100%;
  background: linear-gradient(180deg, ${colors.primaryBlack} 0%, #1a1a4a 100%);
  border-radius: 24px 24px 0 0;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${repeatedSquareDark});
    background-size: cover;
    opacity: 0.1;
    border-radius: 24px 24px 0 0;
  }
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 3rem 2rem 4rem 2rem;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 600px) {
    padding: 2rem 1rem 4.5rem 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  color: ${colors.primaryWhite};
  line-height: 1.2;

  span {
    color: ${colors.primaryGreen};
  }

  @media screen and (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 0.75rem;
  }
`;

const Subheading = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  margin-bottom: 2.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 2rem;
  }
`;

const TestimonyContainer = styled(Carousel)`
  background: transparent;

  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multi-carousel-track {
    gap: 0;
  }

  .react-multi-carousel-item {
    padding: 0 0.75rem;
  }

  .react-multi-carousel-dot-list {
    bottom: -2.5rem;
    display: flex;
    justify-content: center;
    gap: 8px;
    left: 0;
    right: 0;
    position: absolute;
  }

  .react-multi-carousel-dot button {
    border: none;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 10px;
    height: 10px;
    display: block;
  }

  .react-multi-carousel-dot--active button {
    background-color: ${colors.primaryGreen};
  }

  @media screen and (max-width: 600px) {
    .react-multi-carousel-item {
      padding: 0 0.25rem;
    }
  }
`;

const TestimonyCard = styled.div`
  position: relative;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  margin: 0 auto;
  max-width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 50px rgba(0, 170, 91, 0.2);
  }

  img.quote-img {
    position: absolute;
    height: 40px;
    width: 40px;
    opacity: 0.08;
    top: 0.75rem;
    left: 0.75rem;
    object-fit: contain;
  }

  div.testimony {
    color: ${colors.primaryBlack};
    line-height: 1.65;
    font-weight: 400;
    font-size: 14px;
    flex: 1;
    position: relative;
    z-index: 1;
    margin: 0;
    text-align: left;
  }

  div.profile {
    margin-top: 1.25rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    flex-wrap: wrap;
    gap: 0.5rem;

    img {
      height: 40px;
      width: auto;
      object-fit: contain;
      max-width: 120px;
    }

    p.company {
      color: ${colors.primaryGreen};
      font-weight: 700;
      font-size: 14px;
      margin: 0;
    }
  }

  @media screen and (min-width: 601px) {
    padding: 2rem;

    img.quote-img {
      height: 50px;
      width: 50px;
    }

    div.testimony {
      font-size: 15px;
    }

    div.profile {
      margin-top: 1.5rem;

      img {
        height: 50px;
      }

      p.company {
        font-size: 15px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 1.25rem;
    border-radius: 16px;

    div.testimony {
      font-size: 13px;
      line-height: 1.6;
    }

    div.profile {
      flex-direction: row;
      align-items: center;

      img {
        height: 35px;
      }

      p.company {
        font-size: 13px;
      }
    }
  }
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 0.75rem;

  svg {
    width: 16px;
    height: 16px;
    fill: #fbbf24;
  }

  @media screen and (max-width: 600px) {
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function TestimonialSection(): React.ReactElement {
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonialData = [
    {
      company: "Hotel Forest Hills Ciwidey",
      profileLogo: forestHillLogo,
      testimony:
        "Saya atas nama management mengucapkan banyak terimakasih kepada Pak Naufal dan jajaran team MUI Jabar khususnya yang telah membantu pengajuan Sertifikat Halal Restaurant kami. Terimakasih banyak Pak Naufal sudah sabar dan tanggap membantu kami yang masih awam.",
      rating: 5,
    },
    {
      company: "PT Muvi Jaya Blessindo",
      profileLogo: muviJayaBlessindoLogo,
      testimony:
        "Prosesnya sangat cepat dan informatif, dari awal pendaftaran sampe terbit sertifikat halal tidak ada kendala sama sekali, tim auditnya juga sangat baik dan profesional.",
      rating: 5,
    },
  ];

  return (
    <SectionContainer id="testimony" ref={sectionRef}>
      <ContentContainer>
        <Heading>
          Apa kata <span>mereka?</span>
        </Heading>
        <Subheading>
          Dengarkan pengalaman klien kami yang telah berhasil mendapatkan
          sertifikasi halal
        </Subheading>
        <TestimonyContainer
          additionalTransfrom={0}
          autoPlaySpeed={5000}
          centerMode={false}
          arrows={false}
          infinite
          draggable
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 2,
              slidesToSlide: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 600 },
              items: 1,
              slidesToSlide: 1,
            },
            mobile: {
              breakpoint: { max: 600, min: 0 },
              items: 1,
              slidesToSlide: 1,
            },
          }}
          showDots={true}
          swipeable
        >
          {testimonialData.map((item, index) => (
            <TestimonyCard key={index}>
              <img
                className="quote-img"
                src={quoteImg}
                alt=""
                aria-hidden="true"
              />
              <StarsContainer>
                {[...Array(item.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </StarsContainer>
              <div className="testimony">{item.testimony}</div>
              <div className="profile">
                <p className="company">{item.company}</p>
                <img
                  src={item.profileLogo}
                  alt={`Logo ${item.company}`}
                  loading="lazy"
                />
              </div>
            </TestimonyCard>
          ))}
        </TestimonyContainer>
      </ContentContainer>
    </SectionContainer>
  );
}
