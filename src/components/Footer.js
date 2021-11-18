import React from "react";
import logo from "../images/Logo-2.png";
import { ProductConsumer } from "../context/context";
import styled from "styled-components";
export default function Footer() {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className=" py-5 g">
                <div className=" text-center">
                  <img src={logo} alt="logo" />
                  <p>Join me on social networks and stay informed</p>
                  {value.socialIcons.map((item) => (
                    <a href={item.url} key={item.id} className="pr-3">
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="col-10 mx-auto text-center">
                <div className="footerTp py-3"></div>
                <p className="text-capitalize">
                  copyright &copy; by Adamdev {new Date().getFullYear()}. All
                  rights reserved{" "}
                </p>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: #1f2836;
  color: #f7f7f7;

  img {
    width: 22%;
    margin-bottom: 1rem;
  }

  .icon {
    font-size: 1.6rem;
    color: var(--mainWhite);
    transition: var(--mainTranstion);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
  .title {
    font-size: 2rem;
  }

  .footerTp {
    width: 100%;
    margin: 0 auto;
    border-top: 1px solid #999;
  }
`;
