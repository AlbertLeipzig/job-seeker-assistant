import { useContext, useState, useEffect } from "react";
import { Icons } from "../components/Icons";
import { IDocument } from "../utils/types";
import { Link, useParams } from "react-router";
import { AppContext } from "../utils/AppContext";

const apiUrl = import.meta.env.VITE_APP_API_URL;

export const DocumentsEditorPage = () => {
  const [activeDocument, setActiveDocument] = useState<"letter" | "cv" | null>(
    null
  );
  const [coverLetter, setCoverLetter] = useState<IDocument[]>([]);
  const [curriculum, setCurriculum] = useState<IDocument[]>([]);

  const { postings, setError, setLoading } = useContext(AppContext);
  const { id } = useParams();

  const singlePosting = postings?.find((posting) => posting.id === id);

  const updateCoverLetter = (e) => {
    console.log(e);
  };

  const discardChanges = () => {
    setCoverLetter([]);
    setCurriculum([]);
  };

  const saveDocumentChanges = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(coverLetter),
      });
      if (response.status !== 200) {
        setError("something wrong happened");
        setLoading(false);
      } else {
        setError(null);
        setLoading(false);
      }
    } catch (e) {
      if (typeof e === "string") {
        throw new Error(e);
      } else if (e instanceof Error) {
        throw e;
      } else {
        throw new Error(JSON.stringify(e));
      }
    }
  };

  useEffect(() => {
    singlePosting && setCoverLetter(singlePosting?.application.coverLetter);
    singlePosting && setCurriculum(singlePosting?.application.curriculum);
  }, []);

  return (
    <div className="documents-editor-page">
      <h1>Documents Editor Page</h1>
      {singlePosting && (
        <aside>
          <button
            onClick={() =>
              setActiveDocument(activeDocument === "letter" ? "cv" : "letter")
            }
          >
            {activeDocument === "letter" ? "cover" : "letter"}
          </button>
          <button onClick={discardChanges}>
            <Icons.undo />
          </button>
          <button onClick={saveDocumentChanges}>
            <Icons.ok />
          </button>
          <Link to={`/contact/${singlePosting.id}`}>Company Page</Link>
        </aside>
      )}
      {singlePosting && activeDocument === "letter" ? (
        <>
          <h2>Introduce cover letter content</h2>
          {singlePosting.application.coverLetter.map((entry) => (
            <p
              key={entry.id}
              contentEditable
              onChange={(e) => updateCoverLetter(e)}
            >
              {entry.content}
            </p>
          ))}
        </>
      ) : activeDocument === "cv" ? (
        <section>
          <h2>Introduce CV Content </h2>
          {singlePosting &&
            singlePosting.application.curriculum.map((entry) => (
              <p key={entry.id}>{entry.content}</p>
            ))}
        </section>
      ) : (
        <p>No Document Found</p>
      )}
    </div>
  );
};
