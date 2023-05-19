import React from "react";
import { img1 } from "../../../assets";
import color from "../../../constant";
import CommonButton from "../../../components/Button/CommonButton";
import { BsFillPlayFill } from "react-icons/bs";

const Section1 = () => {

  return (
    <>
      <div className="container py-5" >
        <div className="row d-flex align-items-center">
          <div className="col-12 col-lg-6" >
            <text className="Heading-1" style={{ color: color.dark }}>
              UNLOCK YOUR SUCCESS WITH THE BEST SERVICES FOR STARTUPS
            </text>
            <br />
            <text className="Text-1" style={{ color: color.grey }}>
              We help your business FLOURISH and RULE the market with our
              professional services for startups. We provide inclusive startup
              services to your every business demand, whether you are starting
              from scratch or expanding small businesses.
            </text>
            <div className="row d-flex justify-content-start">
              <div className="col-12  col-lg-6 col-xl-5 py-2">
                <CommonButton
                  title="are You startup founder"
                  background={color.brightPurple}
                  color={color.white}
                  width={"auto"}
                  height={"2rem"}
                />
              </div>
              <div className="col-12  col-lg-6 col-xl-5  py-2">
                <div className="row d-flex justify-content-center align-items-center ">
                  <div className="col-1 p-1 ">
                    <BsFillPlayFill style={{ color: color.brightPurple }} />
                  </div>
                  <div className="col-11 px-0 ">
                    <CommonButton
                      title="are You startup founder"
                      background="transparent"
                      color={color.brightPurple}
                      width={"auto"}
                  height={"2rem"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 " >
            <img
              src={img1}
              alt=""
              className="img-fluid"
              style={{ widh: " 100%", maxHeight: "30rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
