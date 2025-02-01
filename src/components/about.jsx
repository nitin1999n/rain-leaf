import React, { useEffect } from "react";

export const About = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const aboutPosition = aboutSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (aboutPosition < screenPosition) {
        aboutSection.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 animated-image">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 className="animated-about-title">About Us</h2>
              <p className="animated-about-paragraph">{props.data ? props.data.paragraph : "loading..."}</p>
              <h3 className="animated-about-subtitle">Why Choose Us?</h3>
              <div className="list-style animated-about-list">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
