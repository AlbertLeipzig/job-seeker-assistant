import { IEntryProps } from "../utils/types";
import { Icons } from "./Icons";
import { format } from "../utils/format";

/* 
by updating the notes, a NotesContainer modal should open, where:
    - every note is displayed, with date and text
    - new notes can be added, but not deleted nor updated
*/

export const SingleListEntry = ({ entry }: IEntryProps) => {
  const { title, link, techStack, company, date, contactPerson } = entry;
  return (
    <div className="single-list-entry">
      {/* <h2>{title}</h2> */}
      {/* <p>{company}</p> */}
      {/* {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Details
          </a>
        )} */}
      <p>{format.date(date)}</p>
      {techStack?.length > 0 && <p>Tech Stack:{techStack.join(", ")}</p>}
      {/* {contactPerson && (
          <p>
            {contactPerson.firstName} {contactPerson.email}
          </p>
        )} */}
      {"message" in entry && (
        <p style={{ backgroundColor: "tomato" }}>Message: {entry.message}</p>
      )}
      {"coverLetter" in entry && (
        <p style={{ outline: "1px solid yellow" }}>
          Cover Letter: {entry.coverLetter.length} docs
        </p>
      )}
      {/* {"curriculum" in entry && (
          <p>Curriculum: {entry.curriculum.length} docs</p>
        )} */}
      {/* {"feedbackNotes" in entry && (
          <p>Feedback Notes: {entry.feedbackNotes.length} notes</p>
        )} */}
    </div>
  );
};
