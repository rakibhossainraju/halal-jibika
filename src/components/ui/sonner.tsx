'use client';

import type { ComponentProps } from 'react';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = ComponentProps<typeof Sonner>;

function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      theme="light"
      toastOptions={{
        style: {
          fontSize: '1.4rem',
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
