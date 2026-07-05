import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/styles";
import contactIllustration from "../assets/contact-illustration.png";
import WhatsAppIcon from "./icons/WhatsappIcon";
import InstagramIcon from "./icons/InstagramIcon";

const FooterContainer = styled.footer`
  width: 100%;
`;

const ContactContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 2rem;

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const ContactCard = styled.div`
  color: ${colors.primaryBlack};
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.98) 100%
  );
  backdrop-filter: blur(10px);
  box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 3rem 4rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #40c351 0%, #25d366 100%);
  }

  img.illustration-person {
    width: 280px;
    object-fit: cover;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
  }

  div.right-content {
    width: 100%;
    gap: 1rem;
    display: flex;
    flex-direction: column;

    h2.heading {
      font-size: 34px;
      font-weight: 700;
      color: ${colors.primaryBlack};
    }

    p {
      color: ${colors.secondaryText};
      font-weight: 400;
      font-size: 16px;
      line-height: 1.6;
    }

    a {
      text-decoration: none;
      width: fit-content;
      margin-top: 0.5rem;

      button.chat-button {
        border: none;
        cursor: pointer;
        width: fit-content;
        padding: 0.875rem 1.75rem;
        background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        border-radius: 50px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);

        span.icon {
          svg {
            width: 28px;
            height: 28px;
          }
        }

        span.text {
          font-size: 16px;
          font-weight: 600;
          color: white;
        }

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(37, 211, 102, 0.5);
        }

        &:active {
          transform: translateY(0);
          box-shadow: 0 2px 10px rgba(37, 211, 102, 0.3);
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    padding: 2rem;

    img.illustration-person {
      width: 200px;
    }

    div.right-content {
      h2.heading {
        font-size: 26px;
      }

      p {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 760px) {
    padding: 2.5rem 1.5rem;
    flex-direction: column;
    text-align: center;

    img.illustration-person {
      display: none;
    }

    div.right-content {
      align-items: center;

      h2.heading {
        font-size: 26px;
      }

      p {
        font-size: 15px;
      }

      a {
        margin-top: 0.75rem;
      }
    }
  }
`;

const CopyrightContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 1.5rem 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${colors.secondaryText};
    font-size: 14px;
  }

  div.social-media {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    p {
      margin-right: 0.25rem;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;

      svg {
        height: 18px;
        width: auto;
      }

      &:hover {
        background: ${colors.primaryGreenLight};
        transform: translateY(-2px);
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0.75rem;

    p {
      font-size: 13px;
    }
  }
`;

const FloatingBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: ${colors.primaryGreen};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 170, 91, 0.3);

  @media screen and (max-width: 760px) {
    position: relative;
    top: auto;
    right: auto;
    margin-bottom: 1rem;
  }
`;

export default function Footer(): React.ReactElement {
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

  return (
    <FooterContainer id="contact" ref={sectionRef}>
      <ContactContainer>
        <ContactCard
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.5s ease",
          }}
        >
          <FloatingBadge>Respon Cepat!</FloatingBadge>
          <img
            src={contactIllustration}
            alt="Hubungi Falhalal untuk konsultasi sertifikasi halal"
            className="illustration-person"
            loading="lazy"
          />
          <div className="right-content">
            <h2 className="heading">Kontak Kami</h2>
            <p>Rencanakan sertifikasi halal bisnis Anda bersama kami.</p>
            <p>
              Hubungi kami sekarang untuk konsultasi gratis dan wujudkan
              sertifikasi halal usaha Anda!
            </p>
            <a
              href="https://wa.me/6281283859611"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat dengan Falhalal melalui WhatsApp"
            >
              <button className="chat-button">
                <span className="icon">
                  <WhatsAppIcon />
                </span>
                <span className="text">Chat melalui WhatsApp</span>
              </button>
            </a>
          </div>
        </ContactCard>
      </ContactContainer>
      <CopyrightContainer>
        <p>Copyright 2024 Falhalal. All Rights Reserved.</p>
        <div className="social-media">
          <p>Follow Us</p>
          <a
            href="https://www.instagram.com/falhalal_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Falhalal di Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </CopyrightContainer>
    </FooterContainer>
  );
}
