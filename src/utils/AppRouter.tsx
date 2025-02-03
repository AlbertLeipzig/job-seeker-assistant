import { Routes, Route, BrowserRouter } from "react-router";
import { App } from "../App";
import { ContactCompanyPage } from "../pages/ContactCompanyPage";
import { ApplicationProcessTrackerPage } from "../pages/ApplicationProcessTrackerPage";
import { DocumentsEditorPage } from "../pages/DocumentsEditorPage";
import { JobStatisticsPage } from "../pages/JobStatisticsPage";
import { NewPostingsPage } from "../pages/NewPostingsPage";
/* import { ErrorPage } from "../pages/ErrorPage"; */
import { NotFoundPage } from "../pages/NotFoundPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<NewPostingsPage />} />
          <Route path="contact" element={<ContactCompanyPage />} />
          <Route
            path="tracker"
            element={<ApplicationProcessTrackerPage />}
          />
          <Route path="editor/:id" element={<DocumentsEditorPage />} />
          <Route path="statistics" element={<JobStatisticsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
