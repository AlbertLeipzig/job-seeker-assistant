import { v4 as uuid4 } from "uuid";
import { IState } from "../utils/types";

interface ITabContainer extends IState {
  tabValues: string[];
}

interface ITabContainerProps {
  tabContainer: ITabContainer;
}

export const TabContainer = ({ tabContainer }: ITabContainerProps) => {
  const { tabValues, state, setState } = tabContainer;
  return (
    <div className="tab-container">
      {tabValues.map((value) => (
        <div
          className={state === value ? "tab--active" : "tab"}
          key={uuid4()}
          onClick={() => setState(value)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};
