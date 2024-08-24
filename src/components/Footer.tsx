import React from "react";
import styled from "styled-components";
import { colors, styleConstants } from "../styles/styles";
import contactIllustration from "../assets/contact-illustration.png";
import WhatsAppIcon from "./icons/WhatsappIcon";
import StripedCircle from "./icons/StripedCircle";
import InstagramIcon from "./icons/InstagramIcon";

const FooterContainer = styled.footer`
  width: 100%;
`;

const ContactContainer = styled.div`
  margin: 0 auto;
  max-width: ${styleConstants.containerMaxWidth};
  padding: 0 2rem;

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const ContactCard = styled.div`
  color: ${colors.primaryBlack};
  overflow: hidden;
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 0rem 4rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  position: relative;

  img.illustration-person {
    width: 300px;
    object-fit: cover;
  }

  div.right-content {
    width: 100%;
    gap: 1rem;
    display: flex;
    flex-direction: column;

    h2.heading {
      font-size: 32px;
      font-weight: 600;
    }

    p {
      color: ${colors.primaryBlack};
      font-weight: 400;
    }

    a {
      text-decoration: none;
      width: fit-content;

      button.chat-button {
        border: none;
        cursor: pointer;
        width: fit-content;
        padding: 0.7rem 1.5rem;
        background-color: #40c351;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: 16px;
        transition: all 0.3s;
        box-shadow: 3px 3px 5px -2px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 3px 3px 5px -2px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 3px 3px 5px -2px rgba(0, 0, 0, 0.3);

        span.icon {
          svg {
            width: 30px;
            height: 30px;
          }
        }

        span.text {
          font-size: 16px;
          font-weight: 600;
          color: white;
        }

        &:hover {
          filter: brightness(0.9);
        }

        &:active {
          scale: 0.95;
          box-shadow: none;
          -webkit-box-shadow: none;
          -moz-box-shadow: none;
        }
      }
    }
  }

  div.striped-circle {
    position: absolute;
    z-index: -1;
    bottom: -15%;
    right: -5%;

    svg {
      path {
        fill: #a08a926c;
      }
    }
  }

  @media screen and (max-width: 900px) {
    img.illustration-person {
      width: 200px;
      object-fit: cover;
    }

    div.right-content {
      gap: 0.5rem;

      h2.heading {
        font-size: 24px;
      }

      p {
        font-size: 14px;
      }

      a {
        button.chat-button {
          padding: 0.5rem 1rem;

          span.icon {
            svg {
              width: 20px;
              height: 20px;
            }
          }

          span.text {
            font-size: 14px;
          }
        }
      }
    }

    div.striped-circle {
      bottom: -25%;
      right: -5%;

      svg {
        scale: 0.7;
      }
    }
  }

  @media screen and (max-width: 760px) {
    padding: 1rem 2rem;

    img.illustration-person {
      display: none;
    }

    div.right-content {
      gap: 0.5rem;
      align-items: center;

      h2.heading {
        font-size: 24px;
      }

      p {
        font-size: 14px;
        text-align: center;
      }

      a {
        button.chat-button {
          padding: 0.5rem 1rem;

          span.icon {
            svg {
              width: 20px;
              height: 20px;
            }
          }

          span.text {
            font-size: 14px;
          }
        }
      }
    }

    div.striped-circle {
      display: none;
    }
  }
`;

const CopyrightContainer = styled.div`
  margin: 0 auto;
  max-width: ${styleConstants.containerMaxWidth};
  padding: 1rem 1rem;
  width: 100%;
  border-top: 1px solid #dadada;
  margin-top: 4rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${colors.secondaryText};
    font-size: 14px;
    text-align: center;
  }

  div.social-media {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        height: 20px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    p {
      color: ${colors.secondaryText};
      font-size: 12px;
    }
  }
`;

export default function Footer(): React.ReactElement {
  return (
    <>
      <FooterContainer id="contact">
        <ContactContainer>
          <ContactCard>
            <img
              src={contactIllustration}
              alt="contact illustration"
              className="illustration-person"
            />
            <div className="right-content">
              <h2 className="heading">Kontak kami</h2>
              <p>Rencanakan sertifikasi halal bisnis Anda bersama kami</p>
              <p>Hubungi kami dengan menekan tombol berikut</p>
              <a href="https://wa.me/6281283859611" target="blank">
                <button className="chat-button">
                  <span className="icon">
                    <WhatsAppIcon />
                  </span>
                  <span className="text">Chat melalui WhatsApp</span>
                </button>
              </a>
            </div>
            <div className="striped-circle">
              <StripedCircle />
            </div>
          </ContactCard>
        </ContactContainer>
        <CopyrightContainer>
          <p>Copyright © 2024. All Rights Reserved</p>
          <div className="social-media">
            <p>Follow Us </p>
            <a href="https://www.instagram.com/falhalal_" target="blank">
              <InstagramIcon />
            </a>
          </div>
        </CopyrightContainer>
      </FooterContainer>
    </>
  );
}
