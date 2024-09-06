import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors, styleConstants } from "../styles/styles";
import BurgerMenuIcon from "./icons/BurgerMenuIcon";
import falhalalLogo from "../assets/falhalal-logo-nobg-new.png";

const Header = styled.header`
  width: 100%;
  padding: 1.5rem 0 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 5px 5px -4px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 5px 5px -4px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 5px -4px rgba(0, 0, 0, 0.3);
  background-color: ${colors.primaryWhite};
`;

const NavContainer = styled.nav`
  max-width: ${styleConstants.containerMaxWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.a`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    height: 100px;
  }

  @media screen and (max-width: 800px) {
    height: 30px;

    img {
      height: 85px;
    }
  }

  @media screen and (max-width: 600px) {
    height: 25px;

    img {
      height: 70px;
    }
  }
`;

const NavItems = styled.div`
  ul.desktop {
    list-style: none;
    display: flex;
    gap: 1.5rem;

    li {
      font-weight: 600;
      cursor: pointer;

      a {
        text-decoration: none;
        color: ${colors.primaryBlack};
        transition: all 0.3s;

        &:hover {
          color: ${colors.primaryGreen};
        }
      }
    }
  }

  svg {
    display: none;
  }

  @media screen and (max-width: 600px) {
    ul.desktop {
      display: none;
    }

    svg {
      display: block;
      fill: ${colors.primaryBlack};
      scale: 1.2;
      cursor: pointer;
    }
  }
`;

const DropMenu = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    width: 100%;
    background-color: ${colors.primaryWhite};
    display: block;
    max-width: ${styleConstants.containerMaxWidth};
    margin: 0 auto;
    margin-top: 1rem;
    padding: 0 1rem;

    ul.mobile {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        text-decoration: none;
        transition: all 0.3s;
        width: 100%;
        cursor: pointer;
        padding: 0.75rem 0;
        text-align: center;
        border-radius: 1rem;

        &:first-child {
          border-top: 1px solid #99999954;
        }

        &:hover {
          background-color: #d5d5d5;
        }

        li {
          font-weight: 600;
          color: ${colors.primaryBlack};
          width: 100%;

          &:hover {
            color: ${colors.primaryGreen};
          }
        }
      }
    }
  }
`;

export default function Navbar(): React.ReactElement {
  const menuList = [
    {
      href: "#",
      text: "Beranda",
    },
    {
      href: "#testimony",
      text: "Testimoni",
    },
    {
      href: "#about",
      text: "Tentang Kami",
    },
    {
      href: "#contact",
      text: "Kontak",
    },
  ];

  const HeaderRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        HeaderRef.current &&
        !HeaderRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Header ref={HeaderRef}>
        <NavContainer>
          <Logo href="#">
            <img src={falhalalLogo} alt="falhalal logo" />
          </Logo>
          <NavItems>
            <ul className="desktop">
              {menuList.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
            <span onClick={() => setIsOpen(!isOpen)}>
              <BurgerMenuIcon />
            </span>
          </NavItems>
        </NavContainer>
        {isOpen && (
          <DropMenu>
            <ul className="mobile">
              {menuList.map((item, index) => (
                <a
                  href={item.href}
                  key={index}
                  onClick={() => setTimeout(() => setIsOpen(false), 500)}
                >
                  <li>{item.text}</li>
                </a>
              ))}
            </ul>
          </DropMenu>
        )}
      </Header>
    </>
  );
}
