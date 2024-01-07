import FormComponent from "../form/FormComponent.jsx";
import InputComponent from "../input/InputComponent.jsx";
import ButtonComponent from "../button/ButtonComponent.jsx";
import { useRef } from "react";
import { auth } from "../../utility/firebase.js";
import { toast } from "react-toastify";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const SignInComponent = () => {
  const formRef = useRef(null);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handelSubmit = ({ email, password }) => {
    if (!email.trim()) {
      toast.error("Please enter you email", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: true,
      });
      return;
    }
    if (!password.trim()) {
      toast.error("Please enter you password", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: true,
      });
      return;
    }
    signInWithEmailAndPassword(email, password);
  };

  if (error) {
    console.log(error.message);
    toast.error(error.message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: true,
    });
  }

  return (
    <FormComponent
      formTitle="Sign In"
      getFormData={handelSubmit}
      style={{ width: "40rem", marginTop: "17rem" }}
      ref={formRef}
    >
      <InputComponent labelText="User Email" type="email" name="email" />
      <InputComponent labelText="Password" type="password" name="password" />
      <ButtonComponent isLoading={loading}>Sign in</ButtonComponent>
    </FormComponent>
  );
};

export default SignInComponent;
