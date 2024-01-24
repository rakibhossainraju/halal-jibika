import NavbarComponent from "./components/navbar/NavbarComponent.jsx";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import FooterComponent from "./components/footer/FooterComponent.jsx";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    const profile = location.pathname.match("profile");
    if (profile) document.querySelector("footer").style.display = "none";
    else document.querySelector("footer").style.display = "block";
  }, [location.pathname]);

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
