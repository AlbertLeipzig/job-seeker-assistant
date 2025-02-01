import { useState } from "react";
import { IImage, Image } from "./Image";
import { Icons } from "./Icons";

export type TCarousel = IImage[];

interface ICarouselProps {
  carousel: TCarousel;
}

export const Carousel = ({ carousel }: ICarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const carouselLength = carousel.length < 3 ? carousel.length : 3;

  const updateImageIndex = (direction: "+" | "-") => {
    if (direction === "+" && imageIndex < carousel.length - carouselLength) {
      setImageIndex((prev) => prev + 1);
    } else if (direction === "-" && imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="carousel">
      <button onClick={() => updateImageIndex("-")}>
        <Icons.arrowLeft
          style={{
            fontSize: "2.1rem",
            backgroundColor: "white",
            aspectRatio: 1,
            borderRadius: "50%",
          }}
        />
      </button>
      <div className="carousel__images">
        {carousel
          .slice(imageIndex, imageIndex + carouselLength)
          .map((image) => (
            <Image image={image} />
          ))}
      </div>
      <button onClick={() => updateImageIndex("+")}>
        <Icons.arrowRight
          style={{
            fontSize: "2.1rem",
            backgroundColor: "white",
            aspectRatio: 1,
            borderRadius: "50%",
          }}
        />
      </button>
    </div>
  );
};
