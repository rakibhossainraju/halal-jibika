import NavbarComponent from "./components/navbar/NavbarComponent.jsx";
import { Outlet } from "react-router-dom";
import FooterComponent from "./components/footer/FooterComponent.jsx";

function App() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default App;
