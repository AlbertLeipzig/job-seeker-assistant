import { useState, useContext, useEffect } from "react";
import { AppContext } from "../utils/AppContext";
import { useParams, Link } from "react-router";
import { IApplication } from "../utils/types";

/* 
This comes from IPosting
coverLetter: IDocument[];
curriculum: IDocument[];
email  : string;
THIS TWO WILL COME FROM THE API
subject : string;
message : string
*/

export const ContactCompanyPage = () => {
  const [applicationData, setApplicationData] = useState<IApplication>({
    email: "",
    application: {
      subject: "",
      message: "",
      coverLetter: [],
      curriculum: [],
    },
  });
  const [showPreview, setShowPreview] = useState<
    null | "curriculum" | "coverLetter"
  >(null);

  const { id } = useParams();
  const { postings } = useContext(AppContext);

  const updateApplicationData = () => {};

  const singlePosting = postings?.find((posting) => posting.id === id);

  useEffect(() => {
    singlePosting &&
      setApplicationData({
        ...applicationData,
        application: singlePosting.application,
      });
  }, []);

  return (
    <div className="contact-company-page">
      <h1>Contact Company</h1>
      {singlePosting ? (
        <form>
          <input type="text" placeholder={singlePosting.email} />
          <input type="text" placeholder={singlePosting.application.subject} />
          <div>
            <button onClick={() => setShowPreview("coverLetter")}>
              Cover Letter
            </button>
            <button onClick={() => setShowPreview("curriculum")}>
              Curriculum
            </button>
          </div>
          <div className="contact-company-page__preview-modal">
            {showPreview &&
              JSON.stringify(
                singlePosting.application[
                  showPreview === "coverLetter" ? "coverLetter" : "curriculum"
                ]
              )}
            <Link to={`editor/${id}`}>"Document Editor"</Link>
            <button
              onClick={() => {
                setShowPreview(null);
              }}
            >
              "Close"
            </button>
          </div>
          <textarea placeholder={singlePosting.application.message}></textarea>
          <button>Submit</button>
        </form>
      ) : (
        <>
          <h2>Posting Not found</h2>
        </>
      )}
    </div>
  );
};
