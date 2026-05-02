'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ButtonComponent, { BUTTON_TYPE_CLASSES } from '../button/ButtonComponent';
import { navLinks } from '../../routes/nav-links';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utility/firebase';

const NavbarComponent: React.FC = () => {
  const pathname = usePathname();
  const [user] = useAuthState(auth);

  return (
    <nav className="flex items-center justify-between px-12 py-8 shadow-[0_0_4px_3px_rgba(12,92,0,0.25)]">
      <Link 
        href="/" 
        className="font-el-messiri text-[3rem] color-brand-green hover:text-up-green transition-colors duration-300"
      >
        Halal Jibika
      </Link>
      <ul className="flex items-center gap-18">
        {navLinks.map((link) => {
          if (link.name === "Sign Up") {
            const label = (typeof window !== 'undefined' && localStorage.getItem("isLoggedIn") === "true")
              ? "Profile"
              : link.name;
            
            return (
              <li key={link.name} className="ml-8">
                <Link href={user ? "/profile" : link.path}>
                  <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.filled}>
                    {label}
                  </ButtonComponent>
                </Link>
              </li>
            );
          }

          const isActive = pathname === link.path;

          return (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`text-[1.8rem] transition-colors duration-300 relative hover:text-up-green ${
                  isActive ? 'text-up-green after:scale-100' : 'text-up-black after:scale-0'
                } after:content-[""] after:absolute after:bg-linear-to-r after:from-up-lime after:to-up-green after:rounded-[2px] after:left-1/2 after:-bottom-6 after:w-34 after:height-[2px] after:translate-x-[-1/2] after:transition-transform after:duration-500`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavbarComponent;
