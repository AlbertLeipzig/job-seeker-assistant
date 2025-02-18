import { IEntryProps } from "../utils/types";
import { Icons } from "./Icons";
import { format } from "../utils/format";

/* 
by updating the notes, a NotesContainer modal should open, where:
    - every note is displayed, with date and text
    - new notes can be added, but not deleted nor updated
*/

export const SingleListEntry = ({ entry }: IEntryProps) => {
  return (
    <div className="single-list-entry">
      {"title" in entry && <h3>{entry.title}</h3>}
      {"company" in entry && <p>{entry.company}</p>}
      {"techStack" in entry && <Icons.eye className="single-list-entry__tech" />}
      {"date" in entry && <p>{format.date(entry.date)}</p>}
      {"link" in entry && (
        <a className="single-list-entry__link">{<Icons.link1 />}</a>
      )}
      <Icons.delete className="single-list-entry__delete" />
    </div>
  );
};
