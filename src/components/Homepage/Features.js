import React from "react";
import Title from "../Title";
import styled from "styled-components";
import { FaDatabase, FaPaintBrush, FaCode } from "react-icons/fa";

export default function Features() {
  return (
    <CardWrapper className="py-5 " id="services">
      <div className="container">
        <Title title="My Services" center="true" />
        <div className="row text-center py-5 g align-items-center justify-content-center">
          <div className=" col-md-6 col-sm-8 col-lg-3 ">
            <div className="card py-4">
              <div className="card-body">
                <div className="pb-4 fz">
                  <span>
                    <FaCode />
                  </span>
                </div>
                <h5 className="card-title">Frontend Developer</h5>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-sm-8 col-lg-3 ">
            <div className="card py-4">
              <div className="card-body">
                <div className="pb-4 fz">
                  <span>
                    <FaDatabase />
                  </span>
                </div>
                <h5 className="card-title">Backend developer</h5>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-sm-8 col-lg-3 ">
            <div className="card py-4">
              <div className="card-body">
                <div className="pb-4 fz">
                  <span>
                    <FaPaintBrush />
                  </span>
                </div>
                <h5 className="card-title">Web Design</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center"></div>
      </div>
    </CardWrapper>
  );
}
const CardWrapper = styled.section`
  background: #f7f7f7;

  .card-title a {
    color: #000;
  }

  .fz {
    display: block;
    color: var(--primaryColor);
    font-size: 2rem;
  }
  .fz span {
    background-color: #f7f7f7;
    padding: 0.9rem 1.2rem;
    border-radius: 50%;
    text-align: center;
    align-items: center;
  }
  .card {
    transition: var(--mainTransition);
  }
  .card:hover {
    transform: scale(1.1);
  }
`;
