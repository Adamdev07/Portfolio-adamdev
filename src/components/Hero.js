import React from "react";
import styled from "styled-components";
import house from "../images/Shape.svg";
export default function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  
  min-height: ${(props) => (props.max ? "80vh" : "50vh")};
  color: var(--mainWhite);
  background: url(${(props) => props.img}) center/cover;
  /* background: linear-gradient(rgba(16, 29, 44, 0.93), rgba(16, 29, 44, 0.93)),
    url(${(props) => props.img}) center/cover; */
  .title {
    padding-top: 2rem;
    
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
   
   
  }
`;

Hero.defaultProps = {
  img: house,
};
