import React, { useEffect } from "react";

export const Features = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById("features");
      const featuresPosition = featuresSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (featuresPosition < screenPosition) {
        featuresSection.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title animated-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3 animated-feature">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
