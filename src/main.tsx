import { createRoot } from "react-dom/client";
import "./style/index.scss";
import { AppRouter } from "./utils/AppRouter";
import { AppProvider } from "./utils/AppContext";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <AppRouter />
  </AppProvider>
);
