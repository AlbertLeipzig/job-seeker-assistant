import { useContext } from "react";
import { Link } from "react-router";
import { AppContext } from "../utils/AppContext";
import { SingleListEntry } from "../components/SingleListEntry";

export const CreateApplicationProcessTrackerPage = () => {
  const { postings } = useContext(AppContext);

  return (
    <div className="create-application-process-tracker-page">
      <h1>Application Process Tracker</h1>
      {postings &&
        postings.map((posting) => (
          <SingleListEntry posting={posting} key={posting.id} />
        ))}
      <Link to="">Contact Company Page</Link>
    </div>
  );
};
