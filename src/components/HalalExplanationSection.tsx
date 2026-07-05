import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/styles";
import rulesIllustration from "../assets/flat-man-checking-giant-check-list-background.png";
import marketIllustration from "../assets/stock-market-analysis.png";
import exportIllustration from "../assets/hand-drawn-flat-design-international-trade.png";

const SectionContainer = styled.section`
  width: 100%;
  padding: 4rem 0 5rem 0;
  background: ${colors.primaryWhite};

  @media screen and (max-width: 600px) {
    padding: 2.5rem 0;
  }
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 2rem;

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${colors.primaryBlack};
  line-height: 1.2;

  span {
    color: ${colors.primaryGreen};
  }

  @media screen and (max-width: 600px) {
    font-size: 26px;
  }
`;

const Subheading = styled.p`
  font-size: 16px;
  color: ${colors.secondaryText};
  line-height: 1.6;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

interface CardProps {
  $isVisible: boolean;
  $delay?: number;
}

const Card = styled.div<CardProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3rem;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateX(0)" : "translateX(30px)"};
  transition: all 0.6s ease;
  transition-delay: ${({ $delay }) => $delay || 0}ms;

  &.reverse {
    flex-direction: row-reverse;
    transform: ${({ $isVisible }) =>
      $isVisible ? "translateX(0)" : "translateX(-30px)"};
  }

  div.image-wrapper {
    flex: 0 0 280px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 220px;
    object-fit: contain;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
  }

  div.text {
    flex: 1;
    padding: 1.5rem;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
      transform: translateY(-4px);
    }

    h3.subtitle {
      color: ${colors.primaryGreen};
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    p.content {
      font-size: 15px;
      line-height: 1.7;
      color: ${colors.secondaryText};
      margin: 0;

      strong {
        color: ${colors.primaryBlack};
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column !important;
    gap: 1.5rem;

    div.image-wrapper {
      flex: none;
    }

    img {
      height: 160px;
    }

    div.text {
      text-align: center;
      padding: 1.5rem;

      h3.subtitle {
        font-size: 18px;
      }

      p.content {
        font-size: 14px;
      }
    }
  }
`;

const NumberBadge = styled.div<{ $color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 1rem;
`;

export default function HalalExplanationSection(): React.ReactElement {
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

  const whyHalal = [
    {
      number: 1,
      color: "#00aa5b",
      subTitle: "Kewajiban Sertifikasi Halal dari Pemerintah",
      content:
        "Berdasarkan Undang-Undang Nomor 33 Tahun 2014 tentang Jaminan Produk Halal (JPH), semua produk yang masuk, beredar, dan diperdagangkan di Indonesia harus memiliki sertifikat halal. <strong>Kewajiban ini berakhir pada 17 Oktober 2024.</strong>",
      illustration: rulesIllustration,
    },
    {
      number: 2,
      color: "#009952",
      subTitle: "Memperluas Pasar dengan Sertifikat Halal",
      content:
        "Kesadaran masyarakat Muslim Indonesia akan pentingnya konsumsi produk halal semakin meningkat. Sertifikat halal juga menjadi <strong>persyaratan untuk dapat menjual produk di berbagai platform besar</strong> seperti TikTok, minimarket, dan supermarket.",
      illustration: marketIllustration,
    },
    {
      number: 3,
      color: "#008044",
      subTitle: "Syarat Ekspor yang Diakui Dunia",
      content:
        "Kesadaran global terhadap konsumsi produk halal terus berkembang, dan beberapa negara bahkan mewajibkan produk yang masuk ke wilayah mereka untuk memiliki <strong>sertifikat halal yang diakui</strong>.",
      illustration: exportIllustration,
    },
  ];

  return (
    <SectionContainer ref={sectionRef}>
      <ContentContainer>
        <HeaderSection>
          <Heading>
            Mengapa harus <span>halal?</span>
          </Heading>
          <Subheading>
            Simak alasan penting mengapa bisnis Anda perlu sertifikasi halal
          </Subheading>
        </HeaderSection>
        <CardContainer>
          {whyHalal.map((item, index) => (
            <Card
              key={index}
              className={index % 2 !== 0 ? "reverse" : ""}
              $isVisible={isVisible}
              $delay={index * 200}
            >
              <div className="image-wrapper">
                <img
                  src={item.illustration}
                  alt={item.subTitle}
                  loading="lazy"
                />
              </div>
              <div className="text">
                <NumberBadge $color={item.color}>{item.number}</NumberBadge>
                <h3 className="subtitle">{item.subTitle}</h3>
                <p
                  className="content"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            </Card>
          ))}
        </CardContainer>
      </ContentContainer>
    </SectionContainer>
  );
}
