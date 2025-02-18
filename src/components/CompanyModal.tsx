import { useState } from "react";
import { ICompany, ICompanyProps } from "../utils/types";

export const CompanyModal = ({ company }: ICompanyProps) => {
  const [companyData, setCompanyData] = useState<ICompany>({
    name: company.name || "",
    site: company.site || "",
  });
  const [submitButton, setSubmitButton] = useState<
    "update" | "warning" | "sent"
  >("update");

  const submitButtonActions: {
    [key in "update" | "warning" | "sent"]: () => void;
  } = {
    update: () => setSubmitButton("warning"),
    warning: () => setSubmitButton("sent"),
    sent: () => console.log("data has been sent"),
  };

  const handleChange =
    (field: keyof ICompany) =>
    (e: React.FormEvent<HTMLSpanElement | HTMLAnchorElement>) => {
      setCompanyData({
        ...companyData,
        [field]: e.currentTarget.textContent || "",
      });
    };

  return (
    <div className="company-modal">
      <h3
        contentEditable
        suppressContentEditableWarning
        onBlur={handleChange("name")}
      >
        {company.name}
      </h3>
      <a
        contentEditable
        suppressContentEditableWarning
        onBlur={handleChange("site")}
        href={company.site}
      >
        {company.site}
      </a>
      <button onClick={submitButtonActions[submitButton]}>
        {submitButton === "update"
          ? "Are you sure you want to update the data?"
          : submitButton === "warning"
          ? "Confirm Update"
          : "Sending..."}
      </button>
      {submitButton !== "sent" && (
        <button onClick={() => setSubmitButton("update")}>Discard</button>
      )}
    </div>
  );
};
