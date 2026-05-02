'use client';

import React from 'react';
import { auth } from "@/lib/firebase";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const SocialLogins: React.FC = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  return (
    <div className="flex gap-20 my-8 px-12 py-8 rounded-[8px] shadow-[1px_2px_10px_4px_rgba(128,128,128,0.20)]">
      <button onClick={() => signInWithGoogle()} className="bg-transparent">
        <img src="/assets/images/googleLogo.svg" alt="google logo" className="w-24 aspect-square transition-all duration-500 hover:scale-125 hover:hue-rotate-40" />
      </button>
      <button onClick={() => signInWithFacebook()} className="bg-transparent scale-[1.1]">
        <img src="/assets/images/facebookLogo.svg" alt="facebook logo" className="w-24 aspect-square transition-all duration-500 hover:scale-125 hover:hue-rotate-40" />
      </button>
      <button className="bg-transparent scale-[1.2]">
        <img src="/assets/images/githubLogo.svg" alt="github logo" className="w-24 aspect-square transition-all duration-500 hover:scale-125 hover:hue-rotate-40" />
      </button>
    </div>
  );
};

export default SocialLogins;
