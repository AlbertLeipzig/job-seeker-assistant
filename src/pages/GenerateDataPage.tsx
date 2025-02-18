import { useState } from "react";
import { generateMultipleDocuments } from "../utils/generateDevData";
import { IApplication, IPosting } from "../utils/types";

export const GenerateDataPage = () => {
  const [postingsData, setPostingsData] = useState<null | IPosting[]>(null);
  const [applicationsData, setApplicationsData] = useState<null | IApplication[]>(null);

  const generatePostings = () => {
    const data = generateMultipleDocuments("posting");
    if (Array.isArray(data) && data.every(item => 'title' in item)) {
      setPostingsData(data as IPosting[]);
    }
  };

  const generateApplications = () => {
    const data = generateMultipleDocuments("application");
    if (Array.isArray(data) && data.every(item => 'subject' in item)) {
      setApplicationsData(data as IApplication[]);
    }
  };

  return (
    <div className="generate-data-page">
      <button onClick={generatePostings}>
        Generate Postings
      </button>
      <button onClick={generateApplications}>
        Generate Applications
      </button>
      {postingsData && <p>{JSON.stringify(postingsData)}</p>}
      {applicationsData && <p>{JSON.stringify(applicationsData)}</p>}
    </div>
  );
};