import { NavLink } from "react-router-dom";
import { v4 as uuid4 } from "uuid";

export type TNavData = { path: string; name: string }[];

export interface INavDataProps {
  navigation: TNavData;
}

export const Navigation = ({ navigation }: INavDataProps) => {
  return (
    <nav>
      <ul>
        {navigation.map((link) => (
          <li key={uuid4()}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
