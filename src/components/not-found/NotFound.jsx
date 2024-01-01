import { pageNotFound } from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={pageNotFound}>
      <img src="/assets/images/pageNotFount.svg" alt="Page not found" />
    </div>
  );
};

export default NotFound;
