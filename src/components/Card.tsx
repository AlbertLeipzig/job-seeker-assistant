import { IButton, Button } from "./Button";
import { IImage, Image } from "./Image";

export interface ICard {
  imgSrc: string;
  title: string;
  button: IButton;
}

interface ICardProps {
  card: ICard;
}

export const Card = ({ card }: ICardProps) => {
  const { imgSrc, title, button } = card;
  const image: IImage = { src: imgSrc, alt: title };
  return (
    <div className="card">
      <Image image={image} />
      <h3>{title}</h3>
      <Button button={button} />
    </div>
  );
};
