'use client';

import React from 'react';
import { useActionState } from 'react';
import { initialAuthFormState } from '@/app/auth/form-state';
import { signUpAction } from '@/app/auth/actions';
import FormComponent from '../form/FormComponent';
import InputComponent from '../input/InputComponent';
import ButtonComponent from '../button/ButtonComponent';

const SignUpComponent: React.FC = () => {
  const [state, formAction, pending] = useActionState(signUpAction, initialAuthFormState);

  return (
    <FormComponent
      formTitle="Sign Up"
      action={formAction}
      style={{ width: "40rem", marginTop: "17rem" }}
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
      {state.error && <p className="text-[#9b211b] mt-4 text-[1.5rem]">{state.error}</p>}
      <ButtonComponent isLoading={pending}>Sign up</ButtonComponent>
    </FormComponent>
  );
};

export default SignUpComponent;
