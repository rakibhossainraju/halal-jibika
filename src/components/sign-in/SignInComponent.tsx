'use client';

import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../utility/firebase";
import FormComponent, { FormRef } from '../form/FormComponent';
import InputComponent from '../input/InputComponent';
import ButtonComponent from '../button/ButtonComponent';

const SignInComponent: React.FC = () => {
  const formRef = useRef<FormRef>(null);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (data: { [k: string]: FormDataEntryValue }) => {
    const email = (data.email as string) || '';
    const password = (data.password as string) || '';

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!password.trim()) {
      toast.error("Please enter your password");
      return;
    }
    signInWithEmailAndPassword(email, password);
  };

  if (error) {
    toast.error(error.message);
  }

  return (
    <FormComponent
      formTitle="Sign In"
      getFormData={handleSubmit}
      style={{ width: "40rem", marginTop: "17rem" }}
      ref={formRef}
    >
      <InputComponent labelText="User Email" type="email" name="email" required />
      <InputComponent labelText="Password" type="password" name="password" required />
      <ButtonComponent isLoading={loading}>Sign in</ButtonComponent>
    </FormComponent>
  );
};

export default SignInComponent;
