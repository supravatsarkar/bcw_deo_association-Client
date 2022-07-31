import React from "react";
import slide1 from "../../assets/2x1/slide-1.png";
import slide2 from "../../assets/2x1/slide-2.png";
import slide3 from "../../assets/2x1/slide-3.png";
import slide4 from "../../assets/2x1/slide-4.png";

const Carousel = () => {
  // Carousel photo ratio would be 2:1 for best view in web browser
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide container-fluid p-0 carousel-fade shadow"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block ">
            <h5 className="badge rounded-pill bg-success fs-5">
              Caste Certificate Distribution Camp
            </h5>
            {/* <p className="badge rounded-pill bg-success">
              Some representative placeholder content for the first slide.
            </p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="badge rounded-pill bg-success fs-5">
              Caste Certificate Distribution Camp at Suri Sadar, Birbhum
            </h5>
            {/* <p>Some representative placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="badge rounded-pill bg-success fs-5">
              Duare Sarkar Camp Phase-IV
            </h5>
            {/* <p>Some representative placeholder content for the third slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide4} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="badge rounded-pill bg-success fs-5">
              Caste Certificate Distribution Camp at Kashipur Block, Purulia
            </h5>
            {/* <p>Some representative placeholder content for the third slide.</p> */}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
