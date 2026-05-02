'use client';

import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { auth } from "@/lib/firebase";
import FormComponent, { FormRef } from '../form/FormComponent';
import InputComponent from '../input/InputComponent';
import ButtonComponent from '../button/ButtonComponent';

const SignUpComponent: React.FC = () => {
  const formRef = useRef<FormRef>(null);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateUserProfile] = useUpdateProfile(auth);

  const handleSubmit = async (data: { [k: string]: FormDataEntryValue }) => {
    const displayName = (data.displayName as string) || '';
    const email = (data.email as string) || '';
    const password = (data.password as string) || '';
    const confirmPassword = (data.confirmPassword as string) || '';

    let errMessage = "";
    if (!displayName.trim()) {
      errMessage = "Please enter your user name";
    } else if (!email.trim()) {
      errMessage = "Please enter your email";
    } else if (!password.trim()) {
      errMessage = "Please enter your password";
    } else if (password !== confirmPassword) {
      errMessage = "Password do not match confirm password";
    }

    if (errMessage) {
      toast.error(errMessage);
      return;
    }

    const success = await createUserWithEmailAndPassword(email, password);
    if (success) {
      await updateUserProfile({ displayName });
    }
  };

  if (error) {
    toast.error(error.message);
  }

  return (
    <FormComponent
      formTitle="Sign Up"
      getFormData={handleSubmit}
      style={{ width: "40rem", marginTop: "17rem" }}
      ref={formRef}
    >
      <InputComponent labelText="User Name" name="displayName" required />
      <InputComponent labelText="User Email" type="email" name="email" required />
      <InputComponent labelText="Password" type="password" name="password" required />
      <InputComponent
        labelText="Confirm Password"
        type="password"
        name="confirmPassword"
        required
      />
      <ButtonComponent isLoading={loading}>Sign up</ButtonComponent>
    </FormComponent>
  );
};

export default SignUpComponent;
