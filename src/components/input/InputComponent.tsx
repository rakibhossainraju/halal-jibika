import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

const InputComponent: React.FC<InputProps> = ({ labelText, ...otherProps }) => {
  return (
    <Label className="flex flex-col mt-4 gap-4 group">
      <span className="text-[#52614f] text-[1.8rem] transition-colors duration-500 group-focus-within:text-[#73d016]">
        {labelText} : 
      </span>
      <Input
        className="rounded-[3px] py-[0.8rem] pl-4 pr-8 text-[1.7rem] h-auto"
        {...otherProps}
      />
    </Label>
  );
};

export default InputComponent;
