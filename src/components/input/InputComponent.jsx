import { inputLabel, input } from "./Input.module.css";

const InputComponent = ({ labelText, ...otherProps }) => {
  return (
    <label className={inputLabel}>
      <span>{labelText} : </span>
      <input className={input} {...otherProps} />
    </label>
  );
};

export default InputComponent;
