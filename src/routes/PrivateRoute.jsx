import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../utility/firebase.js";

const PrivateRoute = ({
  component: Component,
  path,
  shouldRender,
  ...rest
}) => {
  const [user] = useAuthState(auth);

  user && localStorage.setItem("isLoggedIn", "true");

  const condition = shouldRender
    ? localStorage.getItem("isLoggedIn") !== "true"
    : user;
  return condition ? (
    <Component {...rest} />
  ) : (
    <Navigate to={path} replace={true} />
  );
};

export default PrivateRoute;
