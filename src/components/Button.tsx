export interface IButton {
  text: string;
  cbFunction: () => void;
  _class?: string;
}

export interface IButtonProps {
  button: IButton;
}

export const Button = ({ button }: IButtonProps) => {
  const { cbFunction, _class, text } = button;
  return (
    <button onClick={cbFunction} className={_class || ""}>
      {text}
    </button>
  );
};
