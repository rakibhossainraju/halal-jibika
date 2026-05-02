'use client';

import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignInComponent from "@/components/sign-in/SignInComponent";
import SignUpComponent from "@/components/sign-up/SignUpComponent";
import SocialLogins from "@/components/social-logins/SocialLogins";

const AuthPage: React.FC = () => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <>
      <ToastContainer autoClose={1000} />
      <section className="flex items-center justify-center min-h-320 gap-20 py-20">
        <div className="w-[45%] flex justify-center">
          <img src="/assets/images/Login.gif" alt="authentication gif" className="max-w-full h-auto" />
        </div>
        <div className="w-[45%] flex flex-col items-center">
          <div>
            {hasAccount ? <SignInComponent /> : <SignUpComponent />}
          </div>
          <button
            className="bg-transparent border-none text-brand-green font-semibold text-[1.8rem] cursor-pointer mt-8 transition-colors hover:text-up-green"
            onClick={() => setHasAccount(!hasAccount)}
          >
            {!hasAccount ? "Already" : "Don't "} have{" "}
            {!hasAccount ? "an" : "any"} account.{" "}
            {hasAccount ? "Sign up" : "Sign in"}
          </button>
          <h3 className="text-[2.5rem] font-bold text-gray-400 my-8">OR</h3>
          <SocialLogins />
        </div>
      </section>
    </>
  );
};

export default AuthPage;
