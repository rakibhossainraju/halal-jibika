import { useState } from "react";

import style from "./AuthPage.module.css";
import SignInComponent from "../../components/sign-in/SignInComponent.jsx";
import SignUpComponent from "../../components/sign-up/SignUpComponent.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogins from "../../components/social-logins/SocialLogins.jsx";

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <>
      <ToastContainer autoClose={1000} />
      <section className={style.authSection}>
        <div className={style.imageContainer}>
          <img src="/assets/images/Login.gif" alt="authentication gif" />
        </div>
        <div className={style.formContainer}>
          <div>{hasAccount ? <SignInComponent /> : <SignUpComponent />}</div>
          <button
            className={style.formToggleBtn}
            onClick={() => {
              setHasAccount(!hasAccount);
            }}
          >
            {!hasAccount ? "Already" : "Don't "} have{" "}
            {!hasAccount ? "an" : "any"} account.{" "}
            {hasAccount ? "Sing up" : "Sing in"}
          </button>
          <h3>OR</h3>
          <SocialLogins />
        </div>
      </section>
    </>
  );
};

export default AuthPage;
