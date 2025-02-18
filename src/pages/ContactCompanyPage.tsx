import { useState, useContext, useEffect } from "react";
import { Icons } from "../components/Icons";
import { AppContext } from "../utils/AppContext";
import { useParams, Link } from "react-router";
import { IApplication, IPosting } from "../utils/types";

export const ContactCompanyPage = () => {
  const [formData, setFormData] = useState<IApplication>({
    id: "",
    subject: "",
    message: "",
    coverLetter: [],
    curriculum: [],
    contactPerson: {
      firstName: "",
      lastName: "",
      email: "",
    },
    feedbackNotes: [],
  });

  const { id } = useParams();
  const { applications } = useContext(AppContext);

  const singleApplication = applications?.find(
    (application) => application.id === id
  );

  useEffect(() => {
    if (singleApplication) {
      setFormData(singleApplication);
    }
  }, [singleApplication]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [showPreview, setShowPreview] = useState<
    "coverLetter" | "curriculum" | null
  >(null);

  return (
    <div className="contact-company-page">
      <h1>Contact Company</h1>
      {singleApplication ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={formData.contactPerson.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
          <div>
            <button type="button" onClick={() => setShowPreview("coverLetter")}>
              Cover Letter <Icons.eye />
            </button>
            <button type="button" onClick={() => setShowPreview("curriculum")}>
              Curriculum <Icons.eye />
            </button>
          </div>
          {showPreview && (
            <div className="contact-company-page__preview-modal">
              {JSON.stringify(
                formData[
                  showPreview === "coverLetter" ? "coverLetter" : "curriculum"
                ]
              )}
              <Link to={`editor/${id}`}>
                <Icons.link2 />
              </Link>
              <button type="button" onClick={() => setShowPreview(null)}>
                <Icons.close />
              </button>
            </div>
          )}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h2>Posting Not found</h2>
      )}
    </div>
  );
};
