import { useContext, useEffect } from "react";
import { AppContext } from "../utils/AppContext";
import { request } from "../utils/requests";
import { clean } from "../utils/cleanData";
import { handleError } from "../utils/handleError";
import { SingleListEntry } from "../components/SingleListEntry";

export const NewPostingsPage = () => {
  const { postings, setPostings, setLoading, setError } =
    useContext(AppContext);

  useEffect(() => {
    if (!postings || postings.length < 1) {
      setLoading(true);
      request
        .get("postings")
        .then((data) => setPostings(clean.postings(data)))
        .catch((e) => setError(handleError(e)));
    }
  }, []);

  return (
    <div className="new-postings-page">
      <h1>New Postings</h1>
      <div className="entries-container">
        {postings &&
          postings.map((posting) => (
            <SingleListEntry key={posting._id} entry={posting} />
          ))}
      </div>
    </div>
  );
};
