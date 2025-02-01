import { useState, Dispatch, SetStateAction } from "react";

export interface IToggle {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

export interface IToggleProps {
  toggle: IToggle;
}

export const ToggleButton = ({ toggle }: IToggleProps) => {
  /* const { state, setState } = toggle; */
  const [toggleState, setToggleState] = useState(false);
  return (
    <button
      className={`toggle-button--${toggleState}`}
      onClick={() => setToggleState(!toggleState)}
    >
      <div className={`toggle-button__switch--${toggleState}`}></div>
    </button>
  );
};
