import React from "react";
import "./Carousel.css";
const Carousel = () => {
  return (
    // carousel__container conditionally add/remove
    // animate_to_left || animate_to_left to classLists

    <div className="carousel__container">
      <div className="carousel__item1Container">
        <div className="carousel__item1">
          <div className="carousel__item1Inner">
            <div className="carousel__item1ImgWrap">
              <img src={require("../../assets/img/item1img.jpg")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="carousel__item2Container">
        <div className="carousel__item2ContentContainer">
          <div className="carousel__item2ContentDiv">
            <h1>A Global Disease, A Pioneering Treatment</h1>
            <div>
              <strong className="subheader">
                NASH: A Life-Threatening Epidemic
              </strong>
              <p>
                NASH (non-alcoholic steatohepatitis) is a complex liver disease
                that affects tens of millions of people around the world and can
                lead to liver failure, liver cancer and death.
              </p>
              <div className="buttonWrapper">
                <a href="https://github.com/anwachuku15" className="learnMore">
                  <span className="buttonTitle">Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel__item3Container"></div>
      <div className="carousel__item4Container"></div>
      <div className="slideNav"></div>
    </div>
  );
};

export default Carousel;
