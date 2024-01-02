import NavbarComponent from "./components/navbar/NavbarComponent.jsx";
import { Outlet, ScrollRestoration } from "react-router-dom";
import FooterComponent from "./components/footer/FooterComponent.jsx";

function App() {
  return (
    <>
      <NavbarComponent />
      <ScrollRestoration />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default App;
