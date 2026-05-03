import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export enum BUTTON_TYPE_CLASSES {
  filled = 'filled',
  outlined = 'outlined',
  white = 'white',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
  children: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  buttonType = BUTTON_TYPE_CLASSES.filled,
  isLoading,
  children,
  className = '',
  ...otherProps
}) => {
  const variantMap = {
    [BUTTON_TYPE_CLASSES.filled]: 'default',
    [BUTTON_TYPE_CLASSES.outlined]: 'outline',
    [BUTTON_TYPE_CLASSES.white]: 'white',
  } as const;

  return (
    <Button
      disabled={!!isLoading}
      variant={variantMap[buttonType]}
      className={cn(
        'rounded-[10rem] border-none cursor-pointer text-[1.6rem] font-semibold px-10 py-[1.1rem] h-auto',
        isLoading && 'bg-[#1f321f] hover:bg-[#1f321f] cursor-default',
        className,
      )}
      {...otherProps}
    >
      {isLoading ? (
        <span className="inline-block w-12 aspect-square border-2 border-solid border-white rounded-full border-t-white/50 animate-spin" />
      ) : (
        children
      )}
    </Button>
  );
};

export default ButtonComponent;
