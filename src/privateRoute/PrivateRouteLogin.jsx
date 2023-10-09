import { useContext } from "react";
import { allContext } from "../allContext/AllContext";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRouteLogin = ({ children }) => {
    const { user } = useContext(allContext);
    if (user) {
        return <Navigate to={'/profile'}></Navigate>
    } else {
        return children;
    }
};

export default PrivateRouteLogin;

PrivateRouteLogin.propTypes = {
    children: PropTypes.node
}

