import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Homepage/Features";
import styled from "styled-components";
import About from "../components/Homepage/About";
import Philosophie from "../components/Homepage/Philosiphie";
import Choix from "../components/Homepage/Choix";
import cv from "../images/CV.jpg";
import ContactFooter from "../components/Homepage/ContactFooter";

export default function HomePage() {
  return (
    <>
      <homeWrapper>
        <Hero max="true">
          <div className="container">
            <div className="py-5">
              <div className="textTitle">
                <p>
                  Hello, <span className="text-warning">my name is</span>
                </p>
                <p data-aos="fade-up">Adam Rootchild</p>
              </div>
              <div>
                <div className=" text-title">
                  <p className="text-warning">
                    <span className="text-light">I'm a</span> Web Developer
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="btn btn-outline-light  btn-lg mr-4"
                >
                  Hire me
                </a>
                <a href={cv} download className="btn btn-warning  btn-lg">
                  Get my resume
                </a>
              </div>
            </div>
          </div>
        </Hero>
        <About />
        <Philosophie />
        <Choix />
        <Features />

        <ContactFooter />
      </homeWrapper>
    </>
  );
}
const homeWrapper = styled.div``;
