import { createContext, useEffect, useState } from "react";
import {
  IAppContext,
  IAppContextChildren,
  IApplication,
  TError,
  TLoading,
  IPosting,
  ITech,
} from "./types";

import { request } from "./requests";
import { handleError } from "./handleError";

const originalContext: IAppContext = {
  error: null,
  setError: () => {},
  applications: null,
  setApplications: () => {},
  loading: true,
  setLoading: () => {},
  postings: null,
  setPostings: () => {},
  techs: null,
  setTechs: () => {},
};

export const AppContext = createContext(originalContext);

export const AppProvider = ({ children }: IAppContextChildren) => {
  const [error, setError] = useState<TError>(originalContext.error);
  const [loading, setLoading] = useState<TLoading>(originalContext.loading);
  const [postings, setPostings] = useState<null | IPosting[]>(
    originalContext.postings
  );
  const [techs, setTechs] = useState<null | ITech[]>(originalContext.techs);
  const [applications, setApplications] = useState<null | IApplication[]>(null);

  useEffect(() => {
    setLoading(true)
    request
      .get("application")
      .then((data) => setApplications(data))
      .catch((e) => setError(handleError(e)))
      .finally(() => setLoading(false));
  }, []);

  /* useEffect(() => {
    Promise.all([
      request.get("applicationsData.json"),
      request.get("postingsData.json"),
    ])
      .then(([applicationsData, postingsData]) => {
        setApplications(applicationsData);
        setPostings(postingsData);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []); */

  return (
    <AppContext.Provider
      value={{
        error,
        setError,
        applications,
        setApplications,
        loading,
        setLoading,
        postings,
        setPostings,
        techs,
        setTechs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
