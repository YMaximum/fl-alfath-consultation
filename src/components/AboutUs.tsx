import React from "react";
import styled from "styled-components";
import { colors, styleConstants } from "../styles/styles";
import manSillhoutte from "../assets/flat-design-person-sitting-silhouette.png";

const SectionContainer = styled.section`
  width: 100%;
  padding: 5rem 0;

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
  margin-bottom: 1rem;

  span {
    color: ${colors.primaryGreen};
  }

  @media screen and (max-width: 600px) {
    text-align: start;
    font-size: 24px;
    margin-bottom: 1rem;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div.left {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      line-height: 24px;
    }
  }

  img {
    height: 250px;
  }

  @media screen and (max-width: 600px) {
    img {
      display: none;
    }

    div.left {
      p {
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
`;

export default function AboutUs(): React.ReactElement {
  return (
    <>
      <SectionContainer id="about">
        <ContentContainer>
          <Heading>
            <span>Tentang</span> kami
          </Heading>
          <Card>
            <div className="left">
              <p>
                Didirikan oleh Naufal Alfath, seorang profesional muda yang
                berdedikasi dalam bidang sertifikasi halal, kami hadir untuk
                membantu bisnis Anda meraih pasar yang lebih luas dan memastikan
                produk Anda memenuhi standar halal yang diakui.
              </p>
              <p>
                Naufal merupakan lulusan Teknik Pangan, Fakultas Teknologi
                Industri, Institut Teknologi Bandung pada tahun 2022. Setelah
                lulus, ia memulai kariernya sebagai Auditor Halal di LPPOM Jawa
                Barat. Sejak tahun 2022 hingga sekarang, Naufal telah terlibat
                langsung dalam proses audit halal untuk berbagai jenis produk,
                memastikan bahwa setiap produk yang diauditnya sesuai dengan
                ketentuan yang berlaku.
              </p>
              <p>
                Dengan latar belakang pendidikan yang kuat dan pengalaman
                sebagai auditor halal, Naufal memiliki pemahaman mendalam
                tentang pentingnya sertifikasi halal bagi bisnis. Bersama
                timnya, ia berkomitmen untuk memberikan layanan konsultasi dan
                pendampingan yang profesional, efektif, dan terpercaya, sehingga
                Anda dapat menjalani proses sertifikasi halal dengan percaya
                diri.
              </p>
            </div>
            <img src={manSillhoutte} alt="sitting man sillhoutte" />
          </Card>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
