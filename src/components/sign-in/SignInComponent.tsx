'use client';

import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
import FormComponent, { FormRef } from '../form/FormComponent';
import InputComponent from '../input/InputComponent';
import ButtonComponent from '../button/ButtonComponent';

const SignInComponent: React.FC = () => {
  const formRef = useRef<FormRef>(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (data: { [k: string]: FormDataEntryValue }) => {
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

    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) {
      toast.error(error.message || 'Sign in failed');
      return;
    }

    toast.success('Signed in successfully');
    formRef.current?.clear();
  };

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
