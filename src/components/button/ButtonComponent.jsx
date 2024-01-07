import {
  filled,
  outlined,
  white,
  btnDisabled,
  btnSpinner,
} from "./Button.module.css";

export const BUTTON_TYPE_CLASSES = {
  filled,
  outlined,
  white,
};

const ButtonComponent = ({
  buttonType = BUTTON_TYPE_CLASSES.filled,
  isLoading,
  children,
  ...otherProps
}) => {
  return (
    <button
      disabled={!!isLoading}
      className={`${buttonType}  ${isLoading ? btnDisabled : ""}`}
      {...otherProps}
    >
      {isLoading ? <span className={btnSpinner} /> : children}
    </button>
  );
};
export default ButtonComponent;
