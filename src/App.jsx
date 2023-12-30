import NavbarComponent from "./components/navbar/NavbarComponent.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
}

export default App;
