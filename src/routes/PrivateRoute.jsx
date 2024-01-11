import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../utility/firebase.js";

const PrivateRoute = ({
  component: Component,
  path,
  shouldRenderIfNotAuthenticated,
  ...rest
}) => {
  const [user] = useAuthState(auth);
  user && localStorage.setItem("isLoggedIn", "true");
  const condition = shouldRenderIfNotAuthenticated
    ? localStorage.getItem("isLoggedIn") !== "true"
    : user;
  return condition ? (
    <Component user={user} {...rest} />
  ) : (
    <Navigate to={path} replace={true} />
  );
};

export default PrivateRoute;
