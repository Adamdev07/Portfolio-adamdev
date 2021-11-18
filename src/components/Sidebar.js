import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
export default function Sidebar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { links, sidebarOpen, handleSidebar } = value;
        return (
          <SideWrapper show={sidebarOpen}>
            <ul className="mt-5">
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="sidebar-link"
                      onClick={handleSidebar}
                    >
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  /* top: 65px; */
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    border-bottom: 1px solid #ccc;
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    color: #28a745;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
