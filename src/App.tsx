import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { SingleListEntry } from "./components/SingleListEntry";
import { IPosting } from "./utils/types";

const testData: IPosting = {
  id: "sdfhsdgj",
  title: "First Posting",
  link: "https://www.google.com/",
  techStack: ["https://jsfuck.com/"],
  company: "tralala",
  date: new Date(),
  contactPerson: {
    firstName: "Berta",
    lastName: "Müller",
    email: "b-mueller@mail.con",
  },
  feedbackNotes: [],
  application: {
    subject: "New Posting",
    message:
      "asgpasdǵajsrghñiAENRFÑOIAEgnñáseighasñgijasdñgouiashdf bñiasj gñoasidgj ñasodfgj ",
    coverLetter: [
      { id: "asñdfj", content: "añsdfogjasñdfijasdf" },
      { id: "sdfg", content: "añsdfogjasñdfijasdf" },
      { id: "asdrhzdfjh", content: "añsdfogjasñdfijasdf" },
      { id: "dfñoghij", content: "añsdfogjasñdfijasdf" },
    ],
    curriculum: [],
  },
};

export const App = () => {
  return (
    <div className="body">
      <Header />
      <main>
        <SingleListEntry posting={testData} />
        <Outlet />
      </main>
    </div>
  );
};
