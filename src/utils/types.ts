import { SetStateAction, Dispatch } from "react";

export interface ICompany {
  name: string;
  site: string;
}

export interface ICompanyProps {
  company: ICompany;
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
  linkedin: string;
}

export interface ICurriculumContent {
  type: "heading" | "subheading" | "list" | "image";
  value: string;
}

export interface IDocument {
  id: string;
  name: string;
  content: string;
}

/* 
 subject: String,
      message: String,
      coverLetter: { type: [documentSchema] },
      curriculum: { type: [documentSchema] },
      contactPerson: { type: Schema.Types.ObjectId, ref: "contactPersons" },
      feedbackNotes: [noteSchema],
*/

/* 
contactPerson: IPerson;
*/

export interface IApplication {
  _id: string;
  date: Date;
  subject: string;
  message: string;
  coverLetter: IDocument[];
  curriculum: IDocument[];
  title: string;
  link: string;
  techStack: string[];
  company: string;
  contactPerson: IPerson;
  feedbackNotes: INote[];
}

export interface IPosting {
  _id: string;
  title: string;
  link: string;
  techStack: string[];
  company: string;
  date: Date;
  contactPerson: IPerson;
}

/* export interface IApplication {

} */

export interface IEntryProps {
  entry: IPosting | IApplication;
}

export interface ITech {
  name: string;
  categories: string[];
  amount: number;
}

export interface IAppContext {
  applications: null | IApplication[];
  setApplications: Dispatch<SetStateAction<IApplication[] | null>>;
  error: TError;
  setError: Dispatch<SetStateAction<TError>>;
  loading: TLoading;
  setLoading: Dispatch<SetStateAction<TLoading>>;
  postings: null | IPosting[];
  setPostings: Dispatch<SetStateAction<null | IPosting[]>>;
  techs: null | ITech[];
  setTechs: Dispatch<SetStateAction<null | ITech[]>>;
}

export interface IAppContextChildren {
  children: React.ReactNode;
}
