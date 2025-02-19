import { useContext, useEffect } from "react";
import { AppContext } from "../utils/AppContext";
import { SingleApplicationEntry } from "../components/SingleApplicationEntry";
import {SingleListEntry} from "../components/SingleListEntry"
import { request } from "../utils/requests";
import { handleError } from "../utils/handleError";
import { clean } from "../utils/cleanData";

export const ApplicationProcessTrackerPage = () => {
  const { applications, setApplications, setError, setLoading } =
    useContext(AppContext);

  useEffect(() => {
    if (!applications || applications.length < 1) {
      setLoading(true);
      request
        .get("application")
        .then((data) => setApplications(clean.applications(data)))
        .catch((e) => setError(handleError(e)))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <div className="create-application-process-tracker-page">
      <h1>Application Process Tracker</h1>
      <div className="entries-container">
        {applications &&
          applications.map((application) => (
            <SingleListEntry
              entry={application}
              key={application._id}
            />
          ))}
      </div>
    </div>
  );
};
