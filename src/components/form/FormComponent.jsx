import { formContainer, formTitle as styledFormTitle } from "./Form.module.css";
import { forwardRef, useImperativeHandle, useRef } from "react";

const FormComponent = forwardRef(function FormComponent(
  { formTitle = "", getFormData, children, ...otherProps },
  ref,
) {
  const formRef = useRef(null);
  useImperativeHandle(ref, () => ({
    clear() {
      console.log("CLEARING");
      formRef.current?.reset();
    },
  }));
  const handelSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formDataObj = Object.fromEntries(formData);
    getFormData(formDataObj);
  };
  return (
    <form
      className={formContainer}
      ref={formRef}
      onSubmit={handelSubmit}
      {...otherProps}
    >
      <h1 className={styledFormTitle}>
        {formTitle.split(" ")[0]} <span>{formTitle.split(" ")[1]}</span>
      </h1>
      {children}
    </form>
  );
});
export default FormComponent;
