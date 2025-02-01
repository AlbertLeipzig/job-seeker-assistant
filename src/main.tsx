import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.scss";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./utils/AppRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>
);
