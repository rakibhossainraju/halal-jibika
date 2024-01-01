import { useRef, useState } from "react";
import FormComponent from "../../components/form/FormComponent.jsx";
import ButtonComponent from "../../components/button/ButtonComponent.jsx";
import InputComponent from "../../components/input/InputComponent.jsx";

import {
  imageContainer,
  authSection,
  formContainer,
  formToggleBtn,
  googleAuthContainer,
} from "./AuthPage.module.css";

const AuthPage = () => {
  const formRef = useRef(null);
  const [hasAccount, setHasAccount] = useState(false);
  const getFormData = (data) => {
    console.log(data);
    formRef.current.clear();
  };

  return (
    <>
      <section className={authSection}>
        <div className={imageContainer}>
          <img
            src="/assets/images/Login.gif"
            alt="https://www.freepik.com/free-vector/login-concept-illustration_6184159.htm#query=login&position=3&from_view=keyword&track=sph&uuid=05a85fe4-b6aa-4063-9eea-ce286362f81d"
          />
        </div>
        <div className={formContainer}>
          <FormComponent
            formTitle={hasAccount ? "Sign Up" : "Sign In"}
            getFormData={getFormData}
            style={{ width: "40rem", marginTop: "17rem" }}
            ref={formRef}
          >
            {hasAccount && (
              <InputComponent labelText="User Name" name="userName" />
            )}
            <InputComponent labelText="User Email" type="email" name="email" />
            <InputComponent
              labelText="Password"
              type="password"
              name="password"
            />
            {hasAccount && (
              <InputComponent
                labelText="Conform Password"
                type="password"
                name="password"
              />
            )}
            <ButtonComponent>Sign Up</ButtonComponent>
          </FormComponent>{" "}
          <button
            className={formToggleBtn}
            onClick={() => {
              setHasAccount(!hasAccount);
            }}
          >
            {hasAccount ? "Already" : "Don't "} have {hasAccount ? "an" : "any"}{" "}
            account.
          </button>
          <h3>OR</h3>
          <div className={googleAuthContainer}>
            <button>
              <img src="/assets/images/googleLogo.svg" alt="" />
            </button>
            <button>
              <img src="/assets/images/facebookLogo.svg" alt="" />
            </button>
            <button>
              <img src="/assets/images/githubLogo.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPage;
