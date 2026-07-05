import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/styles";
import BurgerMenuIcon from "./icons/BurgerMenuIcon";
import falhalalLogo from "../assets/falhalal-logo-nobg-new.png";

interface HeaderProps {
  $scrolled: boolean;
}

const Header = styled.header<HeaderProps>`
  width: 100%;
  padding: ${({ $scrolled }) => ($scrolled ? "0.75rem 0" : "1.25rem 0")};
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: ${({ $scrolled }) =>
    $scrolled
      ? "0px 4px 20px -2px rgba(0, 0, 0, 0.15)"
      : "0px 5px 5px -4px rgba(0, 0, 0, 0.3)"};
  background-color: ${({ $scrolled }) =>
    $scrolled ? "rgba(245, 245, 245, 0.95)" : colors.primaryWhite};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(10px)" : "none")};
  transition: all 0.3s ease;
`;

const NavContainer = styled.nav`
  max-width: 1100px;
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
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

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
    gap: 2rem;

    li {
      font-weight: 600;
      cursor: pointer;
      position: relative;

      a {
        text-decoration: none;
        color: ${colors.primaryBlack};
        transition: color 0.3s ease;
        padding: 0.5rem 0;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: ${colors.primaryGreen};
          transition: width 0.3s ease;
        }

        &:hover {
          color: ${colors.primaryGreen};

          &::after {
            width: 100%;
          }
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
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const DropMenu = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  background-color: ${colors.primaryWhite};
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 0.75rem;
  padding: 0 1rem;
  border-radius: 16px;
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: all 0.3s ease;

  @media screen and (min-width: 601px) {
    display: none;
  }

  ul.mobile {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0;

    a {
      text-decoration: none;
      transition: all 0.3s ease;
      width: 100%;
      cursor: pointer;
      padding: 0.75rem 1rem;
      text-align: center;
      border-radius: 12px;
      margin: 0.25rem 0;

      &:hover {
        background-color: ${colors.primaryGreenLight};
        transform: translateX(4px);
      }

      li {
        font-weight: 600;
        color: ${colors.primaryBlack};
        width: 100%;
        transition: color 0.3s ease;

        &:hover {
          color: ${colors.primaryGreen};
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
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <Header ref={HeaderRef} $scrolled={scrolled}>
      <NavContainer>
        <Logo href="#" aria-label="Falhalal - Beranda">
          <img
            src={falhalalLogo}
            alt="Falhalal - Jasa Konsultasi Sertifikasi Halal"
            loading="lazy"
          />
        </Logo>
        <NavItems>
          <ul className="desktop" role="navigation">
            {menuList.map((item, index) => (
              <li key={index}>
                <a href={item.href} aria-label={item.text}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <span
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
            role="button"
            tabIndex={0}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <BurgerMenuIcon />
          </span>
        </NavItems>
        <DropMenu $isOpen={isOpen}>
          <ul className="mobile" role="navigation">
            {menuList.map((item, index) => (
              <a
                href={item.href}
                key={index}
                onClick={() => setTimeout(() => setIsOpen(false), 300)}
                aria-label={item.text}
              >
                <li>{item.text}</li>
              </a>
            ))}
          </ul>
        </DropMenu>
      </NavContainer>
    </Header>
  );
}
