import { Dispatch, SetStateAction } from "react";
import { Form } from "./Form";
import { Button } from "./Button";
import { IFormField } from "./Form";

export interface IAuthenticationModal {
  state: "login" | "signup" | "closed";
  setState: Dispatch<SetStateAction<"login" | "signup" | "closed">>;
  formFields: IFormField[];
}

export interface IAuthenticationModalProps  {
  modal: IAuthenticationModal;
}

export const AuthenticationModal = ({ modal }: IAuthenticationModalProps) => {
  const { state, setState } = modal;

  const formFields =
    state === "login"
      ? [
          { fieldKey: "email", fieldValue: "", fieldType: "email" },
          { fieldKey: "password", fieldValue: "", fieldType: "password" },
        ]
      : [
          { fieldKey: "userName", fieldValue: "", fieldType: "text" },
          { fieldKey: "email", fieldValue: "", fieldType: "email" },
          { fieldKey: "password", fieldValue: "", fieldType: "password" },
        ];

  return (
    <div className="authentication-modal">
      <Form formFields={{formFields, buttonText : "Send"}} />
      <Button
        button={{
          text: state === "login" ? "Login" : "Signup",
          cbFunction: () => {},
        }}
      />
      {state === "login" ? (
        <>
          <p>Don't you have an account?</p>
          <Button
            button={{
              text: "Create one now!",
              cbFunction: () => {
                setState("signup");
              },
            }}
          />
        </>
      ) : (
        <>
          <p>Do you have an account?</p>
          <Button
            button={{
              text: "Login in here",
              cbFunction: () => setState("login"),
            }}
          />
        </>
      )}
    </div>
  );
};
