import React, { useEffect, useRef, useState } from "react";
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
  }
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 3rem 2rem 2rem 2rem;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: ${colors.primaryWhite};
  line-height: 1.2;

  span {
    color: ${colors.primaryGreen};
    position: relative;
  }

  @media screen and (max-width: 600px) {
    font-size: 26px;
    margin-bottom: 1.5rem;
  }
`;

const Subheading = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const TestimonyContainer = styled(Carousel)`
  background: transparent;

  .react-multi-carousel-track {
    gap: 1.5rem;
  }

  .react-multi-carousel-dot-list {
    bottom: -2rem;
    display: flex;
    justify-content: center;
  }

  .react-multi-carousel-dot button {
    border: none;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  .react-multi-carousel-dot--active button {
    background-color: ${colors.primaryGreen};
  }
`;

const TestimonyCard = styled.div`
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  margin: 0.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 50px rgba(0, 170, 91, 0.15);
  }

  img.quote-img {
    position: absolute;
    height: 50px;
    opacity: 0.08;
    top: 1rem;
    left: 1rem;
  }

  div.testimony {
    color: ${colors.primaryBlack};
    line-height: 1.7;
    font-weight: 400;
    font-size: 15px;
    flex: 1;
    position: relative;
    z-index: 1;
  }

  div.profile {
    margin-top: 1.5rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.05);

    img {
      height: 50px;
      width: auto;
      object-fit: contain;
    }

    p.company {
      color: ${colors.primaryGreen};
      font-weight: 700;
      font-size: 15px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 1.5rem;

    div.testimony {
      font-size: 14px;
    }

    div.profile img {
      height: 40px;
    }
  }
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 1rem;

  svg {
    width: 18px;
    height: 18px;
    fill: #fbbf24;
  }
`;

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function TestimonialSection(): React.ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const testimonialData = [
    {
      company: "Hotel Forest Hills Ciwidey",
      profileLogo: forestHillLogo,
      testimony:
        "Saya atas nama management mengucapkan banyak terimakasih kepada Pak Naufal dan jajaran team MUI Jabar khususnya yang telah membantu pengajuan Sertifikat Halal Restaurant kami. Terimakasih banyak Pak Naufal sudah sabar dan tanggap membantu kami yang masih awam dalam pengurusan izin tersebut dari awal hingga akhir.",
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
          autoPlay={!isVisible}
          infinite
          draggable
          focusOnSelect={false}
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
