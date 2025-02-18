import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { useContext } from "react";
import { AppContext } from "./utils/AppContext";

export const App = () => {
  const { error, loading } = useContext(AppContext);
  return (
    <div className="body">
      <Header />
      <main>
        {loading && <p>Loading</p>}
        {error !== null && <p>Error : {JSON.stringify(error)}</p>}
        <Outlet />
      </main>
    </div>
  );
};
