import { useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import { Icons } from "./Icons";

export interface IAccordion {
  id?: string;
  heading: string;
  body: string;
  isOpen?: boolean;
}
[];

export interface IAccordionProps {
  accordion: IAccordion[];
}

export const Accordion = ({ accordion }: IAccordionProps) => {
  const [entries, setEntries] = useState<IAccordion[]>([]);

  useEffect(() => {
    const formattedAccordion = accordion.map((entry) => ({
      ...entry,
      id: uuid4(),
      isOpen: false,
    }));
    setEntries(formattedAccordion);
  }, []);

  const updateOpenElements = (targetEntry: IAccordion) => {
    const updateEntries = entries.map((entry) =>
      entry.id === targetEntry.id ? { ...entry, isOpen: !entry.isOpen } : entry
    );

    setEntries(updateEntries);
  };

  return (
    <div className="accordion">
      <ul>
        {entries.map((entry) => {
          return (
            <li key={entry.id} onClick={() => updateOpenElements(entry)}>
              <div className="details">
                <div>
                  <h4>{entry.heading}</h4>
                  {entry.isOpen && <p>{entry.body}</p>}
                </div>
                <Icons.arrowDown
                  className="details__button"
                  style={entry.isOpen ? { transform: "rotate(180deg)" } : {}}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
