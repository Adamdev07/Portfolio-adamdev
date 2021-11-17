import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { handleSidebar, linkSide } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <h2>
                Adam<span className="text-warning">.</span>R{" "}
              </h2>
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <ul>
                {linkSide.map((link) => {
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="text-center"
                        className={link.active}
                      >
                        {link.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
              {/* <button className="btn btn-primary">Login</button> */}
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  height: 4rem;
  padding: 1rem 1.5rem;
  background: var(--mainWhite);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    cursor: pointer;
  }
  ul {
    display: flex;
  }
  @media only screen and (max-width: 992px) {
    ul {
      display: none;
    }
  }

  ul li {
    text-transform: uppercase;
    list-style: none;
    padding-right: 1.5rem;
  }
  ul li a {
    text-decoration: none;
    color: #000;
    transition: var(--mainTransition);
  }
  .active,
  ul li a.active,
  ul li a:active,
  ul li a:hover {
    color: #ffc107;
  }

  .btnColor {
    color: #fff;
  }

  @media (min-width: 992px) {
    .nav-icon {
      display: none;
    }
  }
`;
