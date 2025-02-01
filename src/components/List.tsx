import { v4 as uuid4 } from "uuid";

export type TList = string[];

export interface IListProps {
  list: TList;
}

export const List = ({ list }: IListProps) => {
  return (
    <ul>
      {list.map((entry) => (
        <li key={uuid4()}>{entry}</li>
      ))}
    </ul>
  );
};
