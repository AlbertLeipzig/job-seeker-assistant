import { v4 as uuid4 } from "uuid";

export interface IContainer<T> {
  data: T[];
  Child: React.ComponentType<T>;
}

export interface IContainerProps<T> {
  container: IContainer<T>;
}
export const Container = <T,>({ container }: IContainerProps<T>) => {
  return (
    <div className="container">
      {container.data.map((entry) => (
        <container.Child key={uuid4()} {...entry} />
      ))}
    </div>
  );
};
