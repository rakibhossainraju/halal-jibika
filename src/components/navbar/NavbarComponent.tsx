'use client';

import React from 'react';
import { Link } from '@router/customized';
import { usePathname } from 'next/navigation';
import ButtonComponent, { BUTTON_TYPE_CLASSES } from '../button/ButtonComponent';
import { navLinks } from '../../routes/nav-links';
import { authClient } from '@/lib/auth-client';

const NavbarComponent: React.FC = () => {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="flex items-center justify-between px-12 py-8 shadow-md">
      <Link 
        href="/" 
        className="font-el-messiri text-[3rem] text-primary hover:text-primary transition-colors duration-300"
      >
        Halal Jibika
      </Link>
      <ul className="flex items-center gap-18">
        {navLinks.map((link) => {
          if (link.name === "Sign Up") {
            const label = user ? "Profile" : link.name;
            
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
                className={`text-[1.8rem] transition-colors duration-300 relative hover:text-primary ${
                  isActive ? 'text-primary after:scale-100' : 'text-foreground after:scale-0'
                } after:content-[""] after:absolute after:bg-linear-to-r after:from-primary-mid after:to-primary after:rounded-xs after:left-1/2 after:-bottom-6 after:w-34 after:height-[2px] after:translate-x-[-1/2] after:transition-transform after:duration-500`}
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
