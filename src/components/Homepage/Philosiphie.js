import React, { Component } from "react";
import Title from "../Title";
import philos from "../../images/bit.png";
import next from "../../images/next.png";
import outdoor from "../../images/outdoor.png";
import styled from "styled-components";
export default class Philosophie extends Component {
  render() {
    return (
      <CardWrapper className="p-4 bg-white" id="portfolio">
        <Title title="Some Of My Projects" center="true" />
        <div className="container">
          <div className="row py-5 g d-flex">
            <div className="col-md">
              <div className="card">
                <a href="bittech27.com">
                  <img
                    src={philos}
                    className="img-fluid rounded"
                    alt="images"
                  />
                </a>
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <a href="/">
                  <img src={next} className="img-fluid rounded" alt="images" />
                </a>
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <a href="/">
                  <img
                    src={outdoor}
                    className="img-fluid rounded"
                    alt="images"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
    );
  }
}

const CardWrapper = styled.section``;
