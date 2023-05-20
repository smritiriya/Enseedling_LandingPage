import React from "react";

const FAQ = () => {
  skills = {
    justifyContent: "center",
    background: "#FAF8FC80",
    padding: "20px 10%",
  };
    skills_p = {
      textAlign: "center",
    };
    
  return (
    <>
      <section id="skills" className="skills" style={skills}>
        <p style={skills_p}>FAQs</p>
        <h1>Find answers you need</h1>
        <div className="container">
          <div className="skill">
            <div className="head">
              <div className="left">
                <h4>Lorem ipsum dolor sit amet.</h4>
              </div>
              <span className="material-icons">
                <i className="fa-solid fa-caret-down" />
              </span>
            </div>
            <div className="items">
              <div className="item">
                <div className="progress-area">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, beatae?
                  </p>
                </div>
              </div>
              {/* end of item */}
            </div>
          </div>
          {/* end of skill */}
          <div className="skill">
            <div className="head">
              <div className="left">
                <h4>Lorem ipsum dolor sit amet.</h4>
              </div>
              <span className="material-icons">
                <i className="fa-solid fa-caret-down" />
              </span>
            </div>
            <div className="items">
              <div className="item">
                <div className="progress-area">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, beatae?
                  </p>
                </div>
              </div>
              {/* end of item */}
            </div>
          </div>
          {/* end of skill */}
          <div className="skill">
            <div className="head">
              <div className="left">
                <h4>Lorem ipsum dolor sit amet.</h4>
              </div>
              <span className="material-icons">
                <i className="fa-solid fa-caret-down" />
              </span>
            </div>
            <div className="items">
              <div className="item">
                <div className="progress-area">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, beatae?
                  </p>
                </div>
              </div>
              {/* end of item */}
            </div>
          </div>
          {/* end of skill */}
          <div className="skill">
            <div className="head">
              <div className="left">
                <h4>Lorem ipsum dolor sit amet.</h4>
              </div>
              <span className="material-icons">
                <i className="fa-solid fa-caret-down" />
              </span>
            </div>
            <div className="items">
              <div className="item">
                <div className="progress-area">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, beatae?
                  </p>
                </div>
              </div>
              {/* end of item */}
            </div>
          </div>
          {/* end of skill */}
        </div>
      </section>
    </>
  );
};

export default FAQ;
