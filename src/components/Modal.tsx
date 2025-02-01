import { Dispatch, SetStateAction } from "react";
import { Icons } from "./Icons";

export interface IModal {
  title?: string;
  body: string;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

interface IModalProps {
  modal: IModal;
}

export const Modal = ({ modal }: IModalProps) => {
  const { setState, title, body } = modal;
  return (
    <div className="modal">
      <Icons.close onClick={() => setState(false)} />
      {title && <h3>{title}</h3>}
      <p>{body}</p>
    </div>
  );
};
