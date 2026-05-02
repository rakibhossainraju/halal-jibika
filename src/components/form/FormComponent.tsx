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
      className="shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] rounded-[10px] px-16 py-8 pb-12 my-6 mx-auto max-w-208 [&_button]:rounded-[3px] [&_button]:mt-8 [&_button]:w-full"
      ref={formRef}
      onSubmit={handleSubmit}
      {...otherProps}
    >
      <h1 className="font-el-messiri text-[4.7rem] text-up-green text-center">
        {firstPart} <span className="text-transparent [-webkit-text-stroke:2px_var(--up-green)]">{secondPart}</span>
      </h1>
      {children}
    </form>
  );
});

export default FormComponent;
