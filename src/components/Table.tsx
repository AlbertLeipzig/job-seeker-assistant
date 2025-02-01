import { v4 as uuid4 } from "uuid";
export interface ITable {
  caption: string;
  head: string[];
  body: { head: string; data: string[] }[];
  foot: { head: string; data: string[] };
}

interface ITableProps {
  table: ITable;
}

export const Table = ({ table }: ITableProps) => {
  const { caption, head, body, foot } = table;
  return (
    <div className="table">
      {" "}
      <caption>{caption}</caption>
      <table>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={uuid4()}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row) => (
            <tr key={uuid4()}>
              <th>{row.head}</th>
              {row.data.map((d) => (
                <td key={uuid4()}>{d}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr key={uuid4()}>
            <th>{foot.head}</th>
            {foot.data.map((d) => (
              <td key={uuid4()}>{d}</td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
