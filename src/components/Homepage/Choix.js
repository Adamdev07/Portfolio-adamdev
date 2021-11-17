import React, { Component } from "react";
import Title from "../Title";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styled from "styled-components";
export default class Choix extends Component {
  state = {
    frontShow: true,
    backShow: false,
    designShow: false,
    editorShow: false,
  };

  handleFront = () => {
    this.setState({
      frontShow: !this.state.frontShow,
    });
  };
  handleBack = () => {
    this.setState({
      backShow: !this.state.backShow,
    });
  };
  handleDesign = () => {
    this.setState({
      designShow: !this.state.designShow,
    });
  };
  handleEditor = () => {
    this.setState({
      editorShow: !this.state.editorShow,
    });
  };
  render() {
    return (
      <CardWrapper className="p-4" id="skills">
        <div className="container bg-#f9f7f6">
          <Title title="My Skills" center="true" />
          <div className="row py-5">
            <div className="col-10-mx-10 col-md-6">
              <div>
                <h3>My creative skills and experience</h3>
              </div>
              <div className="pb-4"></div>
              <p>
                {" "}
                I understand how responsive design works.I have high-level
                experience with these languages.And I use them according to your
                project request.
              </p>
            </div>
            <div className="col-10-mx-10 col-md-6 ">
              <div className="pb-4">
                <strong onClick={this.handleFront}>Frontend developer</strong>
                <span
                  onClick={this.handleFront}
                  className="float-right text-warning cursor-pointer"
                >
                  {this.state.frontShow ? <FaChevronUp /> : <FaChevronDown />}
                </span>
                {this.state.frontShow && (
                  <div className="">
                    <div className="bg my-3">
                      <span className="text-capitalize">React</span>
                      <div className="good"></div>
                    </div>
                    <div className="bg">
                      <span className="text-capitalize">javascript</span>
                      <div className="very-good"></div>
                    </div>
                    <div className="bg my-3">
                      <span className="text-capitalize">Bootstrap</span>
                      <div className="excellent"></div>
                    </div>
                    <div className="bg mb-3">
                      <span className="text-capitalize">Css</span>
                      <div className="good"></div>
                    </div>
                    <div className="bg">
                      <span className="text-capitalize">Html</span>
                      <div className="excellent"></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="pb-4">
                <strong onClick={this.handleBack}>Backend developer</strong>
                <span
                  onClick={this.handleBack}
                  className="float-right text-warning cursor-pointer"
                >
                  {this.state.backShow ? <FaChevronUp /> : <FaChevronDown />}
                </span>
                {this.state.backShow && (
                  <div className="">
                    <div className="bg my-3">
                      <span className="text-capitalize">PHP</span>
                      <div className="good"></div>
                    </div>
                    <div className="bg">
                      <span className="text-capitalize">PosgreSQL</span>
                      <div className="standard"></div>
                    </div>
                    <div className="bg my-3">
                      <span className="text-capitalize">Access</span>
                      <div className="very-good"></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="pb-4">
                <strong onClick={this.handleDesign}>Designer</strong>
                <span
                  onClick={this.handleDesign}
                  className="float-right text-warning cursor-pointer"
                >
                  {this.state.designShow ? <FaChevronUp /> : <FaChevronDown />}
                </span>
                {this.state.designShow && (
                  <div className="">
                    <div className="bg my-3">
                      <span className="text-capitalize">photoshop</span>
                      <div className="good"></div>
                    </div>
                    <div className="bg">
                      <span className="text-capitalize">Corel</span>
                      <div className="standard"></div>
                    </div>
                    <div className="bg my-3">
                      <span className="text-capitalize">Illustrator</span>
                      <div className="low"></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="pb-4">
                <strong onClick={this.handleEditor}>Video Editor</strong>
                <span
                  onClick={this.handleEditor}
                  className="float-right text-warning cursor-pointer"
                >
                  {this.state.editorShow ? <FaChevronUp /> : <FaChevronDown />}
                </span>
                {this.state.editorShow && (
                  <div className="">
                    <div className="bg my-3">
                      <span className="text-capitalize">Movavi</span>
                      <div className="good"></div>
                    </div>
                    <div className="bg">
                      <span className="text-capitalize">Camtasia</span>
                      <div className="very-good"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
    );
  }
}
const CardWrapper = styled.section`
  .bg {
    border-bottom: 1px solid #ccc;
  }

  .excellent {
    width: 90%;
    border-bottom: 5px solid var(--primaryColor);
  }
  .very-good {
    width: 80%;
    border-bottom: 5px solid var(--primaryColor);
  }
  .good {
    width: 75%;
    border-bottom: 5px solid var(--primaryColor);
  }
  .standard {
    width: 60%;
    border-bottom: 5px solid var(--primaryColor);
  }
  .low {
    width: 50%;
    border-bottom: 5px solid var(--primaryColor);
  }
`;
