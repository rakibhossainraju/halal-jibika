'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SignInComponent from '@/components/sign-in/SignInComponent';
import SignUpComponent from '@/components/sign-up/SignUpComponent';
import SocialLogins from '@/components/social-logins/SocialLogins';

const AuthPageClient: React.FC = () => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <section className="flex items-center justify-center min-h-320 gap-20 py-20">
      <div className="w-[45%] flex justify-center">
        <img src="/assets/images/Login.gif" alt="authentication gif" className="max-w-full h-auto" />
      </div>
      <div className="w-[45%] flex flex-col items-center">
        <div>{hasAccount ? <SignInComponent /> : <SignUpComponent />}</div>
        <Button
          variant="link"
          className="text-[1.8rem] mt-8"
          onClick={() => setHasAccount(!hasAccount)}
        >
          {!hasAccount ? 'Already' : "Don't "} have {!hasAccount ? 'an' : 'any'} account.{' '}
          {hasAccount ? 'Sign up' : 'Sign in'}
        </Button>
        <h3 className="text-[2.5rem] font-bold text-gray-400 my-8">OR</h3>
        <SocialLogins />
      </div>
    </section>
  );
};

export default AuthPageClient;
