import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

const InputComponent: React.FC<InputProps> = ({ labelText, ...otherProps }) => {
  return (
    <label className="flex flex-col mt-4 gap-4 group">
      <span className="text-[#52614f] text-[1.8rem] transition-colors duration-500 group-focus-within:text-[#73d016]">
        {labelText} : 
      </span>
      <input 
        className="border border-solid border-[#87997d] rounded-[3px] py-[0.8rem] pl-4 pr-8 text-[1.7rem] focus:outline-solid focus:outline-1 focus:outline-[#73d016] transition-[outline] duration-500" 
        {...otherProps} 
      />
    </label>
  );
};

export default InputComponent;
