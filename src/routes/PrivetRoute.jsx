import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  const location = useLocation();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (!user || !user.email) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
