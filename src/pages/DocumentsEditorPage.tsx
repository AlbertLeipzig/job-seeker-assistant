import { useContext, useState } from "react";
import { Link, useParams } from "react-router";
import { AppContext } from "../utils/AppContext";

export const DocumentsEditorPage = () => {
  const { postings } = useContext(AppContext);
  const { id } = useParams();

  const singlePosting = postings?.find((posting) => posting.id === id);

  const [activeDocument, setActiveDocument] = useState<"letter" | "cv" | null>(
    null
  );
  return (
    <div className="documents-editor-page">
      <h1>Documents Editor Page</h1>
      <aside>
        <button>{activeDocument === "letter" ? "cover" : "letter"}</button>
        <button>"Discard"</button>
        <button>"Submit"</button>
        <Link to="">Apply</Link>
      </aside>
      {singlePosting && activeDocument === "letter" ? (
        singlePosting.coverLetter.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))
      ) : activeDocument === "cv" ? (
        <p>"cv"</p>
      ) : (
        <p>No Document Found</p>
      )}
    </div>
  );
};
