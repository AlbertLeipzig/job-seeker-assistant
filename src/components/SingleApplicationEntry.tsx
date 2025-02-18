import { IApplication } from "../utils/types";
import { Icons } from "./Icons";
import { format } from "../utils/format";

interface IApplicationProps {
  application: IApplication;
}

/* 
  id: string;
  subject: string;
  message: string;
  coverLetter: IDocument[];
  curriculum: IDocument[];
  contactPerson: IPerson;
  feedbackNotes: INote[];
*/

export const SingleApplicationEntry = ({ application }: IApplicationProps) => {
  const {
    date,
    coverLetter,
    curriculum,
    company,
    contactPerson,
    feedbackNotes,
    title,
    link,
  } = application;

  return (
    <div style={{ display: "flex", marginBottom: "5vh" }}>
      <h3>{title}</h3>
      {"title" in application && (
        <h3 style={{ backgroundColor: "tomato" }}>{title}</h3>
      )}
      {"company" in application && (
        <p style={{ outline: "1px solid blue" }}>{company}</p>
      )}
      {"techStack" in application && (
        <Icons.eye className="single-list-entry__tech" />
      )}
      {"date" in application && <p>{format.date(date)}</p>}
      {"link" in application && (
        <a className="single-list-entry__link">{<Icons.link1 />}</a>
      )}
      {"coverLetter" in application && <p  style={{ outline: "1px solid red" }}>{JSON.stringify(coverLetter)}</p>}
      {"curriculum" in application && <p  style={{ outline: "1px solid green" }}>{JSON.stringify(curriculum)}</p>}
      {"contactPerson" in application && <p  style={{ outline: "1px solid blue" }}>{JSON.stringify(contactPerson)}</p>}
      {"feedbackNotes" in application && <p  style={{ outline: "1px solid yellow" }}>{JSON.stringify(feedbackNotes)}</p>}
      {"link" in application && <a href={link}>{link}</a>}

      <Icons.delete className="single-list-entry__delete" />
    </div>
  );
};
