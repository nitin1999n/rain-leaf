import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="transparent-box animated-header">
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                </div>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll animated-button mt-4"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
