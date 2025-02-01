import { SetStateAction, Dispatch } from "react";

export interface IApplication {
  id: string;
  title: string;
  link: string;
  techStack: string[];
  contactPerson: string;
  company: string;
  date: Date;
  feedback: IPosting[];
}

export interface ICompany {
  name: string;
  site: string;
}

export type TError = null | string | Error;

export type TLoading = boolean;

export interface INote {
  date: Date;
  text: string[];
}

export interface IPerson {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IPosting {
  id: string;
  company: string;
  date: Date;
  contactPerson: string;
  feedbackNotes: INote[];
}

export interface ITech {
  name: string;
  categories: string[];
  amount: number;
}


export interface IAppContext {
  error: TError;
  setError: Dispatch<SetStateAction<TError>>;
  loading: TLoading;
  setLoading: Dispatch<SetStateAction<TLoading>>;
  applications: null | IApplication[];
  setApplications: Dispatch<SetStateAction<null | IApplication[]>>;
  postings: null | IPosting[];
  setPostings: Dispatch<SetStateAction<null | IPosting[]>>;
  techs: null | ITech[];
  setTechs: Dispatch<SetStateAction<null | ITech[]>>;
}

export interface IAppContextChildren {
  children: React.ReactNode;
}
