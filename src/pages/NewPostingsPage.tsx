import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import { SingleListEntry } from "../components/SingleListEntry";

export const NewPostingsPage = () => {
  const { postings } = useContext(AppContext);

  return (
    <div className="new-postings-page">
      <div className="entries-container">
        {postings &&
          postings.map((posting) => (
            <SingleListEntry entry={posting} key={posting.id} />
          ))}
      </div>
    </div>
  );
};
