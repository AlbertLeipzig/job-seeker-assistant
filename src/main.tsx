import { createRoot } from "react-dom/client";
import "./style/index.scss";
import { AppRouter } from "./utils/AppRouter";

createRoot(document.getElementById("root")!).render(<AppRouter />);
