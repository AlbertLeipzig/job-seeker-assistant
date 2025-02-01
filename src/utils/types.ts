import { SetStateAction, Dispatch } from "react";

export type TError = null | string | Error;

export type TLoading = boolean;

export type TTheme = "light" | "dark";

export interface IState{
  state: boolean | string;
  setState: Dispatch<SetStateAction<unknown>>;
}



export interface IStateProps {
  stateProps: IState;
}

export interface IAppContext {
  theme: TTheme;
  setTheme: Dispatch<SetStateAction<TTheme>>;
  error: TError;
  setError: Dispatch<SetStateAction<TError>>;
  loading: TLoading;
  setLoading: Dispatch<SetStateAction<TLoading>>;
}

export interface IAppChildren {
  children: React.ReactNode;
}
