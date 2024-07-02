import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import TestimonialSection from "./TestimonialSection";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";

const MainContainer = styled.main`
  width: 100%;
  margin: 0 auto;
`;

export default function LandingPage(): React.ReactElement {
  return (
    <>
      <MainContainer>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <TestimonialSection />
        <Footer />
      </MainContainer>
    </>
  );
}
