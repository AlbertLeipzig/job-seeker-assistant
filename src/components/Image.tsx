export interface IImage {
  src: string;
  alt?: string;
}

export interface IImageProps {
  image: IImage;
}

export const Image = ({ image }: IImageProps) => {
  const { src, alt } = image;
  const _alt = alt || "";
  return <img src={src} alt={_alt} />;
};
