import { useState } from "react";

export const ContactCompanyPage = () => {
  const [applicationData, setApplicationData] = useState({
    email: null,
    subject: null,
    documents: ["", ""],
    message: null,
  });
  return (
    <div className="contact-company-page">
      <h1>Contact Company</h1>
      <form>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <div></div>
        <textarea placeholder="Message"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};
