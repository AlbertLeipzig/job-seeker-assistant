import { IPostingProps } from "../utils/types";

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
