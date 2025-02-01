import { IPostingProps } from "../utils/types";

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
    applied,
  } = posting;

  return (
    <div className="single-list-entry">
      <p>{title}</p>
      <p>{company}</p>
      <p>{techStack}</p>
      <p>{JSON.stringify(date)}</p>
      <a>{link}</a>
      {applied ? (
        <>
          <a href={`${contactPerson.email}`}>
            {contactPerson.firstName} {contactPerson.lastName}
          </a>
          <p>"Feedback Notes"</p>
        </>
      ) : (
        <p>"apply"</p>
      )}
      <p>"delete"</p>
    </div>
  );
};
