import { Navigation } from "./Navigation";

const links = [{ path: "/", name: "Home" }];

export const Footer = () => {
  return (
    <footer>
      <h2>Project Name</h2>
      <Navigation navData={links} />
    </footer>
  );
};
