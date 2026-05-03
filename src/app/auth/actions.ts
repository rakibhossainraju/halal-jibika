'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import type { AuthFormState } from './form-state';

function getField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export async function signInAction(
  _prevState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email = getField(formData, 'email');
  const password = getField(formData, 'password');

  if (!email) {
    return { error: 'Please enter your email' };
  }

  if (!password) {
    return { error: 'Please enter your password' };
  }

  try {
    await auth.api.signInEmail({
      body: { email, password, callbackURL: '/profile' },
      headers: await headers(),
    });
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Sign in failed' };
  }

  redirect('/profile');
}

export async function signUpAction(
  _prevState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const name = getField(formData, 'displayName');
  const email = getField(formData, 'email');
  const password = getField(formData, 'password');
  const confirmPassword = getField(formData, 'confirmPassword');

  if (!name) {
    return { error: 'Please enter your user name' };
  }

  if (!email) {
    return { error: 'Please enter your email' };
  }

  if (!password) {
    return { error: 'Please enter your password' };
  }

  if (password !== confirmPassword) {
    return { error: 'Password do not match confirm password' };
  }

  try {
    await auth.api.signUpEmail({
      body: { name, email, password, callbackURL: '/profile' },
      headers: await headers(),
    });
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Sign up failed' };
  }

  redirect('/profile');
}

export async function signOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });
  redirect('/');
}
