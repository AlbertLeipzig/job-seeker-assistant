import { NavLink } from "react-router-dom";
import { ThemeButton } from "./ThemeButton";
export const Header = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to=""></NavLink>
          </li>
        </ul>
      </nav>
      <ThemeButton />
    </header>
  );
};
