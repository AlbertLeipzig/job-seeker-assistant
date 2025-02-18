import { IApplication, IPosting } from "./types";
import { v4 as uuid4 } from "uuid";

const cleanSingleApplication = (
  application: Partial<IApplication>
): IApplication => ({
  _id: application._id || uuid4(),
  date: application.date ? new Date(application.date) : new Date(),
  subject: application.subject || "No Subject",
  message: application.message || "No Message",
  coverLetter: application.coverLetter || [],
  curriculum: application.curriculum || [],
  title: application.title || "No Title",
  link: application.link || "#",
  techStack: application.techStack || [],
  company: application.company || "Unknown Company",
  contactPerson: application.contactPerson || {
    firstName: "Unknown",
    lastName: "",
    email: "",
    linkedin: "",
  },
  feedbackNotes: application.feedbackNotes || [],
});

const cleanAllApplications = (applications: IApplication[]): IApplication[] =>
  applications.map((application) => cleanSingleApplication(application));

const cleanSinglePosting = (posting: Partial<IPosting>) => ({
  _id: posting._id || uuid4(),
  title: posting.title || "No Title",
  link: posting.link || "#",
  techStack: posting.techStack || [],
  company: posting.company || "Unknown Company",
  date: posting.date ? new Date(posting.date) : new Date(),
  contactPerson: posting.contactPerson || {
    firstName: "Unknown",
    lastName: "",
    email: "",
    linkedin: "",
  },
});

const cleanAllPostings = (postings: IPosting[]): IPosting[] =>
  postings.map((posting) => cleanSinglePosting(posting));

export const clean = {
  applications: cleanAllApplications,
  postings: cleanAllPostings,
};
