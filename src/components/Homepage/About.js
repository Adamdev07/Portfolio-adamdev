import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/img.jpg";
import cv from "../../images/CV.jpg";
import { FaDownload } from "react-icons/fa";
export default function About() {
  return (
    <section className="p-4" id="about">
      <div className="container bg-#f9f7f6">
        <div className="row py-5">
          <div className="col-10-mx-10 col-md-6">
            <img
              src={aboutBcg}
              className="img-fluid pr-5 d-none d-sm-block rounded-circle"
              alt="about company"
            />
          </div>
          <div className="col-10-mx-10 col-md-6 my-4">
            <Title title="About me" />
            <p style={{ fontSize: "1.2rem" }} className="pt-4">
              I'm a computer scientiste with high-level experience in full-Stack
              developer,producing quality work.And I'm looking for a front-end
              or back-end developer in a company where I can use my skills for
              the benefit of the company.I'm the good one for your next project.
            </p>

            <a
              href={cv}
              download
              className="btn btn-warning btn-lg text-light mt-4"
            >
              Donwload CV{" "}
              <span>
                <FaDownload />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
