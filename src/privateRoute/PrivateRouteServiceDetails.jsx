import { useContext } from "react";
import { allContext } from "../allContext/AllContext";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRouteServiceDetails = ({children}) => {
    const { user, loading } = useContext(allContext);

    if (loading){
        return ' '
    }

    return (
        <>
            {
                user ? children : <Navigate to={'/login'}></Navigate>
            }
        </>
    )

};

export default PrivateRouteServiceDetails;
PrivateRouteServiceDetails.propTypes = {
    children: PropTypes.node
}

