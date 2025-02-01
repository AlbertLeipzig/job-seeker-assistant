import { v4 as uuid4 } from "uuid";
import { Image } from "./Image";
interface IContent {
  _type: "paragraph" | "title" | "image";
  _value: string;
  alt?: string;
}

export type TSection = IContent[];

interface ISectionProps {
  section: TSection;
}

export const Section = ({ section }: ISectionProps) => {
  return (
    <section>
      {section.map((entry) => {
        return (
          (entry._type === "paragraph" && (
            <p key={uuid4()}>{entry._value}</p>
          )) ||
          (entry._type === "image" && (
            <Image
              key={uuid4()}
              image={{ src: entry._value, alt: entry.alt || "" }}
            />
          )) ||
          (entry._type === "title" && <h2 key={uuid4()}>{entry._value}</h2>)
        );
      })}
    </section>
  );
};
