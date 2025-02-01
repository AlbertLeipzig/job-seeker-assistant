import { useContext } from "react";
import { AppContext } from "../utils/AppContext";

export const ThemeButton = () => {
  const { theme, setTheme } = useContext(AppContext);

  const updateTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button className="theme-button" onClick={updateTheme}>{theme}</button>;
};
