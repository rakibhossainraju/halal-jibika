import React from 'react';

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
  const baseStyles = 'rounded-[10rem] border-none cursor-pointer text-[1.6rem] font-semibold px-10 py-[1.1rem] flex justify-center items-center transition-colors duration-600';
  
  const typeStyles = {
    [BUTTON_TYPE_CLASSES.filled]: 'text-white bg-brand-green hover:bg-up-green',
    [BUTTON_TYPE_CLASSES.outlined]: 'bg-white border-2 border-solid border-brand-green text-brand-green',
    [BUTTON_TYPE_CLASSES.white]: 'bg-white text-forest',
  };

  const disabledStyles = 'bg-gray-15 hover:bg-gray-15 cursor-default';

  return (
    <button
      disabled={!!isLoading}
      className={`${baseStyles} ${typeStyles[buttonType]} ${isLoading ? disabledStyles : ''} ${className}`}
      {...otherProps}
    >
      {isLoading ? (
        <span className="inline-block w-12 aspect-square border-2 border-solid border-white rounded-full border-t-white/50 animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

export default ButtonComponent;
