'use client';

import React from 'react';
import { useActionState } from 'react';
import { initialAuthFormState } from '@/app/auth/form-state';
import { signInAction } from '@/app/auth/actions';
import FormComponent from '../form/FormComponent';
import InputComponent from '../input/InputComponent';
import ButtonComponent from '../button/ButtonComponent';

const SignInComponent: React.FC = () => {
  const [state, formAction, pending] = useActionState(signInAction, initialAuthFormState);

  return (
    <FormComponent
      formTitle="Sign In"
      action={formAction}
      style={{ width: "40rem", marginTop: "17rem" }}
    >
      <InputComponent labelText="User Email" type="email" name="email" required />
      <InputComponent labelText="Password" type="password" name="password" required />
      {state.error && <p className="text-[#9b211b] mt-4 text-[1.5rem]">{state.error}</p>}
      <ButtonComponent isLoading={pending}>Sign in</ButtonComponent>
    </FormComponent>
  );
};

export default SignInComponent;
