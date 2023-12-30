import { filled, outlined, white } from "./Button.module.css";

export const BUTTON_TYPE_CLASSES = {
  filled,
  outlined,
  white,
};

const ButtonComponent = ({
  buttonType = BUTTON_TYPE_CLASSES.filled,
  children,
  ...otherProps
}) => {
  return (
    <button className={buttonType} {...otherProps}>
      {children}
    </button>
  );
};
export default ButtonComponent;
