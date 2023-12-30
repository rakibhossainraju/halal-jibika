import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  navContainer,
  navLink,
  activeLink,
  navLogo,
  linksContainer,
} from "./Navbar.module.css";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button/ButtonComponent.jsx";
import { navLinks } from "../../routes/nav-links.js";

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <nav className={navContainer}>
      <Link className={navLogo} to="/">
        Halal Jibika
      </Link>
      <ul className={linksContainer}>
        {navLinks.map((link) => {
          if (link.name === "Sign Up" || link.name === "Profile")
            return (
              <li key={link.name}>
                <ButtonComponent
                  buttonType={BUTTON_TYPE_CLASSES.filled}
                  onClick={() => navigate(link.path)}
                >
                  {link.name}
                </ButtonComponent>
              </li>
            );

          return (
            <li key={link.name}>
              <NavLink
                className={({ isActive }) =>
                  `${navLink} ${link.path !== "/" && isActive && activeLink}`
                }
                style={({ isActive }) =>
                  link.path === "/" && isActive
                    ? { color: "var(--up-green)" }
                    : null
                }
                to={link.path}
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavbarComponent;
