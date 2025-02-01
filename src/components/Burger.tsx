import { Dispatch, SetStateAction } from "react";

export interface IBurger {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

export interface IBurgerProps {
  burger: IBurger;
}

export const Burger = ({ burger }: IBurgerProps) => {
  const { state, setState } = burger;
  return (
    <div className="burger-container">
      <div className={`burger--${state}`} onClick={() => setState(!state)}>
        <div className={`burger__line--${state}`}></div>
        <div className={`burger__line--${state}`}></div>
        <div className={`burger__line--${state}`}></div>
      </div>
    </div>
  );
};
