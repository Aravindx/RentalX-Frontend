import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets-global.website-files.com/60cb2013a506c737cfeddf74/620bbc4f8fdb94bec7eebcf6_Rent%20Page-100.jpg"
          alt="First slide"
          style={{ height: "600px", width: "80%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/sWUHuUiVSFg/maxresdefault.jpg"
          alt="Second slide"
          style={{ height: "600px", width: "80%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          alt="Third slide"
          style={{ height: "600px", width: "80%" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />);
