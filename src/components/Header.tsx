import { NavLink } from "react-router";
export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">New Postings</NavLink>
          </li>
          <li>
            <NavLink to="/tracker">Application Process Tracker</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Job Statistics</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
