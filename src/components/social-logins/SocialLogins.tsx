'use client';

import React from 'react';
import { toast } from 'sonner';
import { authClient } from '@/lib/auth-client';

const SocialLogins: React.FC = () => {
  const handleSocialLogin = async (provider: 'google' | 'facebook' | 'github') => {
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: '/profile',
    });

    if (error) {
      toast.error(error.message || `${provider} login failed`);
    }
  };

  return (
    <div className="flex gap-20 my-8 px-12 py-8 rounded-[8px] shadow-lg">
      <button type="button" onClick={() => handleSocialLogin('google')} className="bg-transparent">
        <img src="/assets/images/googleLogo.svg" alt="google logo" className="w-24 aspect-square transition-all duration-500 hover:scale-125 hover:hue-rotate-40" />
      </button>
      <button type="button" onClick={() => handleSocialLogin('facebook')} className="bg-transparent scale-[1.1]">
        <img src="/assets/images/facebookLogo.svg" alt="facebook logo" className="w-24 aspect-square transition-all duration-500 hover:scale-125 hover:hue-rotate-40" />
      </button>
      <button type="button" onClick={() => handleSocialLogin('github')} className="bg-transparent scale-[1.2]">
        <img src="/assets/images/githubLogo.svg" alt="github logo" className="w-24 aspect-square transition-all duration-500 hover:scale-125 hover:hue-rotate-40" />
      </button>
    </div>
  );
};

export default SocialLogins;
