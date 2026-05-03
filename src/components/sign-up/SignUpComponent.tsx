'use client';

import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
import FormComponent, { FormRef } from '../form/FormComponent';
import InputComponent from '../input/InputComponent';
import ButtonComponent from '../button/ButtonComponent';

const SignUpComponent: React.FC = () => {
  const formRef = useRef<FormRef>(null);
  const [loading, setLoading] = React.useState(false);

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

    setLoading(true);
    const { error } = await authClient.signUp.email({
      email,
      password,
      name: displayName,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message || 'Sign up failed');
      return;
    }

    toast.success('Account created successfully');
    formRef.current?.clear();
  };

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
