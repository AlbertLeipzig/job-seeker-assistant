import { Link } from "react-router-dom";

export interface IHero {
  bgImage: string;
  title: string;
  body: string;
  linkSrc: string;
  linkText: string;
}

interface IHeroProps {
  hero: IHero;
}

export const Hero = ({ hero }: IHeroProps) => {
  const { bgImage, title, body, linkSrc, linkText } = hero;
  return (
    <div
      className="hero"
      style={{
        background: `url(${bgImage})`,
        backgroundRepeat : "no-repeat",
        backgroundPositionX : "right",
        backgroundSize : "cover",
        height : "100vh"
      }}
    >
      <div className="hero__content">
        <h1>{title}</h1>
        <p>{body}</p>
        <Link to={linkSrc}>{linkText}</Link>
      </div>
    </div>
  );
};
