import React, { forwardRef, useImperativeHandle, useRef } from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  formTitle?: string;
  getFormData: (data: { [k: string]: FormDataEntryValue }) => void;
  children: React.ReactNode;
}

export interface FormRef {
  clear: () => void;
}

const FormComponent = forwardRef<FormRef, FormProps>(function FormComponent(
  { formTitle = "", getFormData, children, ...otherProps },
  ref,
) {
  const formRef = useRef<HTMLFormElement>(null);
  
  useImperativeHandle(ref, () => ({
    clear() {
      formRef.current?.reset();
    },
  }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObj = Object.fromEntries(formData);
    getFormData(formDataObj);
  };

  const titleParts = formTitle.split(" ");
  const firstPart = titleParts[0];
  const secondPart = titleParts.slice(1).join(" ");

  return (
    <form
      className="shadow-xl rounded-[10px] px-16 py-8 pb-12 my-6 mx-auto max-w-208 [&_button]:rounded-[3px] [&_button]:mt-8 [&_button]:w-full"
      ref={formRef}
      onSubmit={handleSubmit}
      {...otherProps}
    >
      <h1 className="font-el-messiri text-[4.7rem] text-[#73d016] text-center">
        {firstPart} <span className="text-transparent [-webkit-text-stroke:2px_#73d016]">{secondPart}</span>
      </h1>
      {children}
    </form>
  );
});

export default FormComponent;
