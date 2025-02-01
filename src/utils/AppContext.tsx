import { createContext, useEffect, useState } from "react";
import {
  IAppContext,
  IAppContextChildren,
  TError,
  TLoading,
  IPosting,
  ITech,
} from "./types";

const originalContext: IAppContext = {
  error: null,
  setError: () => {},
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

  return (
    <AppContext.Provider
      value={{
        error,
        setError,
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
