import { Image, IImage } from "./Image";

export type IGallery = IImage[];

export interface IGalleryProps {
  gallery: IGallery;
}
export const Gallery = ({ gallery }: IGalleryProps) => {
  return (
    <div className="gallery">
      {gallery.map((image) => (
        <Image image={image} />
      ))}
    </div>
  );
};
