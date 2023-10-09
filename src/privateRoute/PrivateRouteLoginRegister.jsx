import { useContext } from "react";
import { allContext } from "../allContext/AllContext";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouteLoginRegister = ({children}) => {

    const {user} = useContext(allContext);

    return (
        <>
            {
                !user ? children : <Navigate to={'/profile'}></Navigate> 
            }
        </>
    );
};

export default PrivateRouteLoginRegister;

PrivateRouteLoginRegister.propTypes = {
    children: PropTypes.node
}

