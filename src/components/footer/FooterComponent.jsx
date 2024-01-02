import style from "./Footer.module.css";
import ULComponent from "../ul-component/ULComponent.jsx";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Browse Jobs",
    path: "",
  },
  {
    name: "Companies",
    path: "",
  },
  {
    name: "Candidates",
    path: "",
  },
  {
    name: "Pricing",
    path: "",
  },
];
const company = [
  {
    name: "About us",
    path: "/about",
  },
  {
    name: "Blogs",
    path: "",
  },
  {
    name: "FAQ's",
    path: "",
  },
  {
    name: "Contact",
    path: "",
  },
];
const support = [
  {
    name: "Terms of use",
    path: "",
  },
  {
    name: "Terms & conditions",
    path: "",
  },
  {
    name: "Privacy",
    path: "",
  },
  {
    name: "Cookie policy",
    path: "",
  },
];
const FooterComponent = () => {
  return (
    <footer className={style.footerSection}>
      <section>
        <div className={style.footerLinksContainer}>
          <div>
            <Link className={style.footerLogo} to="/">
              Halal Jibika
            </Link>
            <div>
              <Link to={""}>Face Book</Link>
              <Link to={""}>Twitter</Link>
              <Link to={""}>Github</Link>
            </div>
          </div>
          <ULComponent title="Services" lists={services} />
          <ULComponent title="Company" lists={company} />
          <ULComponent title="Services" lists={services} />
          <ULComponent title="Support" lists={support} />
        </div>
      </section>
      <h4 className={style.copyRight}>
        &#169; All copy rights reserved to Light Yagami 2024
      </h4>
    </footer>
  );
};

export default FooterComponent;
