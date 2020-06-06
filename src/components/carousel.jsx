import React from "react";

function Carousel({ images, interval, ride }) {
  return (
    <div
      id="carouselIndicators"
      className="carousel slide"
      data-interval={interval}
      data-ride={ride}
    >
      <ol className="carousel-indicators">
        {images.map((image) => (
          <li
            key={image + "69"}
            data-target="#carouselIndicators"
            data-slide-to={images.indexOf(image)}
            className={images.indexOf(image) === 0 ? "active" : ""}
          />
        ))}
      </ol>
      <div className="carousel-inner">
        {images.map((image) => (
          <div
            key={image + "69"}
            className={
              images.indexOf(image) === 0
                ? "carousel-item active"
                : "carousel-item"
            }
          >
            <img
              src={image}
              alt="Villain USA weightlifting fitness equipment"
            />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
