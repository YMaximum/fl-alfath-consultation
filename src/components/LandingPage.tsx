import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import TestimonialSection from "./TestimonialSection";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";
import CustomersSection from "./CustomersSection";
import HalalExplanationSection from "./HalalExplanationSection";
import CompanionBenefitsSection from "./CompanionBenefitsSection";
import AboutUs from "./AboutUs";

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
        <CustomersSection />
        <ServicesSection />
        <CompanionBenefitsSection />
        <HalalExplanationSection />
        <TestimonialSection />
        <AboutUs />
        <Footer />
      </MainContainer>
    </>
  );
}
