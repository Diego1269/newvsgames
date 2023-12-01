import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  const { loginWithRedirect, isAuthenticated} =
    useAuth0();
  return isAuthenticated? children : <Navigate to={loginWithRedirect()} />;
};

export default PrivateRoute;
