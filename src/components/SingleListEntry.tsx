import { IPostingProps } from "../utils/types";
import { Icons } from "./Icons";

/* 
by updating the notes, a NotesContainer modal should open, where:
    - every note is displayed, with date and text
    - new notes can be added, but not deleted nor updated
*/

export const SingleListEntry = ({ posting }: IPostingProps) => {
  const {
    id,
    title,
    link,
    techStack,
    company,
    date,
    contactPerson,
    feedbackNotes,
    application,
  } = posting;

  return (
    <div className="single-list-entry">
      <p>{title}</p>
      <p>{company}</p>
      <p>{techStack}</p>
      <p>{JSON.stringify(date)}</p>
      <a>{link}</a>
      {application.coverLetter ? (
        <>
          <a href={`${contactPerson.email}`}>
            <Icons.feedback />
          </a>
          <p>
            <Icons.notes />
          </p>
        </>
      ) : (
        <p>
          <Icons.ok />
        </p>
      )}
      <p>
        <Icons.delete />
      </p>
    </div>
  );
};
