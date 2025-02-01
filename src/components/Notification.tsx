import { Dispatch, SetStateAction } from "react";
import { Icons } from "./Icons";

export interface INotification {
  title?: string;
  body: string;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

interface INotificationProps {
  notification: INotification;
}

export const Notification = ({ notification }: INotificationProps) => {
  const { body, setState } = notification;

  return (
    <div className="notification">
      <button onClick={() => setState(false)}>
        <Icons.close />
      </button>

      <p>{body}</p>
    </div>
  );
};
