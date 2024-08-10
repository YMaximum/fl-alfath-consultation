import React, { useRef } from "react";
import styled from "styled-components";
import { colors, styleConstants } from "../styles/styles";

const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  margin-bottom: 1rem;
  z-index: 1;
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

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${colors.primaryGreen};
    scale: 1.1;
  }
`;

const NavItems = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;

    li {
      font-weight: 600;
      cursor: pointer;

      a {
        text-decoration: none;
        color: black;
        transition: all 0.3s;

        &:hover {
          color: ${colors.primaryGreen};
        }
      }
    }
  }
`;

export default function Navbar(): React.ReactElement {
  const HeaderRef = useRef(null);

  return (
    <>
      <Header ref={HeaderRef}>
        <NavContainer>
          <a href="#">
            <Logo>Falhalal</Logo>
          </a>
          <NavItems>
            <ul>
              <li>
                <a href="#">Tentang</a>
              </li>
              <li>
                <a href="#testimony">Testimoni</a>
              </li>
              <li>
                <a href="#contact">Kontak</a>
              </li>
            </ul>
          </NavItems>
        </NavContainer>
      </Header>
    </>
  );
}
