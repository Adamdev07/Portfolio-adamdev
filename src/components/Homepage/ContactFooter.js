import React from "react";
import styled from "styled-components";
import { FaPhone, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <ContactWrapper className="p-4" id="contact">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center ">
          <div className="col-md  sideContact">
            <h2>Get in touch</h2>
            <p className="text-lead ">
              I offer IT service solutions to your needs.
            </p>
            <div className="contactFile py-5">
              <div className="d-flex">
                <span className="pr-3">
                  <FaPaperPlane />
                </span>
                <div>
                  <h5>Email</h5>
                  <div className="pb-4">
                    <a href="mailto:adamrootchild56@gmail.com">
                      adamrootchild56@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <span className="pr-3">
                  <FaPhone />
                </span>
                <div>
                  <h5>Phone</h5>
                  <div className="pb-4">
                    <a href="tel:+(509)46851649">+(509) 46851649</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md my-3 bg-white p-4">
            <form
              className="mt-5"
              action="https://formspree.io/adamrootchild56@gmail.com"
              method="POST"
            >
              {/* first */}
              <div className="form-group">
                <label htmlFor="name">Nom*</label>
                <input
                  type="text"
                  name="firstName"
                  id="name"
                  className="form-control"
                  placeholder="Adamdev"
                  required
                />
              </div>
              {/* email */}
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="You@email.com"
                  autoComplete="off"
                />
              </div>
              {/* subject */}
              <div className="form-group">
                <label htmlFor="subject">Subject*</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-control"
                  placeholder="important!"
                />
              </div>
              {/* message */}
              <div className="form">
                <label htmlFor="message">Message*</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  id="message"
                  placeholder="Votre message"
                />
              </div>
              {/* submit */}
              <div className="form-group mt-3">
                <input
                  type="submit"
                  value="send message"
                  className="form-control form-control-lg bg-warning text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}
const ContactWrapper = styled.section`
  .sideContact {
    height: 100%;
    width: 100%;
  }

  .contactFile span {
    margin-right: 1rem;
  }
  .contactFile a {
    margin-bottom: 1.3rem;
  }
  .form input:focus:invalid {
    border: 0.3rem solid #ff7730;
  }
`;
