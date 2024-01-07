import InputComponent from "../input/InputComponent.jsx";
import FormComponent from "../form/FormComponent.jsx";
import ButtonComponent from "../button/ButtonComponent.jsx";
import { useRef } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../../utility/firebase.js";
import { toast } from "react-toastify";

const SignUpComponent = () => {
  const formRef = useRef(null);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateUserProfile] = useUpdateProfile(auth);

  const handelSubmit = async ({
    displayName,
    email,
    password,
    conformPassword,
  }) => {
    let hasError = false;
    let errMessage = "";
    if (!displayName.trim()) {
      errMessage = "Please enter your user name";
      hasError = true;
    } else if (!email.trim()) {
      errMessage = "Please enter your email";
      hasError = true;
    } else if (!password.trim()) {
      errMessage = "Please enter your password";
      hasError = true;
    } else if (password !== conformPassword) {
      errMessage = "Password do not match conform password";
      hasError = true;
    } else hasError = false;

    if (hasError) {
      toast.error(errMessage, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: true,
      });
      return;
    }

    await createUserWithEmailAndPassword(email, password);
    await updateUserProfile({ displayName });
  };

  if (error) {
    toast.error(error.message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: true,
    });
  }

  return (
    <FormComponent
      formTitle="Sign Up"
      getFormData={handelSubmit}
      style={{ width: "40rem", marginTop: "17rem" }}
      ref={formRef}
    >
      <InputComponent labelText="User Name" name="displayName" />
      <InputComponent labelText="User Email" type="email" name="email" />
      <InputComponent labelText="Password" type="password" name="password" />
      <InputComponent
        labelText="Conform Password"
        type="password"
        name="conformPassword"
      />
      <ButtonComponent isLoading={loading}>Sign up</ButtonComponent>
    </FormComponent>
  );
};

export default SignUpComponent;
