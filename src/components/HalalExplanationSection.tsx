import React from "react";
import styled from "styled-components";
import { colors, styleConstants } from "../styles/styles";
import rulesIllustration from "../assets/flat-man-checking-giant-check-list-background.png";
import marketIllustration from "../assets/stock-market-analysis.png";
import exportIllustration from "../assets/hand-drawn-flat-design-international-trade.png";

const SectionContainer = styled.section`
  width: 100%;
  padding: 4rem 0;

  @media screen and (max-width: 600px) {
    padding: 2rem 0;
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
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;

  span {
    color: ${colors.primaryGreen};
  }

  @media screen and (max-width: 600px) {
    text-align: start;
    font-size: 24px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-evenly;

  &.right {
    align-self: end;
  }

  img {
    height: 200px;
  }

  div.text {
    max-width: 50%;

    h3.subtitle {
      color: ${colors.primaryGreen};
      font-size: 18px;
      margin-bottom: 0.8rem;
    }

    p.content {
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    text-align: start;

    img {
      display: none;
    }

    div.text {
      max-width: 100%;
    }
  }
`;

export default function HalalExplanationSection(): React.ReactElement {
  const whyHalal = [
    {
      subTitle: "Kewajiban Sertifikasi Halal dari Pemerintah",
      content:
        "Berdasarkan Undang-Undang Nomor 33 Tahun 2014 tentang Jaminan Produk Halal (JPH), semua produk yang masuk, beredar, dan diperdagangkan di Indonesia harus memiliki sertifikat halal. Kewajiban ini diatur dalam Peraturan Pemerintah Nomor 39 Tahun 2021 tentang Penyelenggaraan Jaminan Produk Halal, dengan penahapan yang berakhir pada 17 Oktober 2024.",
      illustration: rulesIllustration,
    },
    {
      subTitle: "Memperluas Pasar dengan Sertifikat Halal",
      content:
        "Kesadaran masyarakat Muslim Indonesia akan pentingnya konsumsi produk halal semakin meningkat. Sertifikat halal juga menjadi persyaratan untuk dapat menjual produk di berbagai platform besar seperti TikTok, minimarket, dan supermarket.",
      illustration: marketIllustration,
    },
    {
      subTitle: "Syarat Ekspor yang Diakui Dunia",
      content:
        "Kesadaran global terhadap konsumsi produk halal terus berkembang, dan beberapa negara bahkan mewajibkan produk yang masuk ke wilayah mereka untuk memiliki sertifikat halal yang diakui.",
      illustration: exportIllustration,
    },
  ];

  return (
    <>
      <SectionContainer>
        <ContentContainer>
          <Heading>
            Mengapa harus <span>halal?</span>
          </Heading>
          <CardContainer>
            {whyHalal.map((item, index) => (
              <Card key={index} className={index % 2 === 0 ? "" : "right"}>
                {index % 2 === 0 ? (
                  ""
                ) : (
                  <img src={item.illustration} alt="illustration" />
                )}
                <div className="text">
                  <h3 className="subtitle">{item.subTitle}</h3>
                  <p className="content">{item.content}</p>
                </div>
                {index % 2 !== 0 ? (
                  ""
                ) : (
                  <img src={item.illustration} alt="illustration" />
                )}
              </Card>
            ))}
          </CardContainer>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
