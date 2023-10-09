import { useContext } from "react";
import { allContext } from "../allContext/AllContext";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRouteDashboard = ({ children }) => {
    const { user, loading } = useContext(allContext);

    if (loading) {
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

export default PrivateRouteDashboard;
PrivateRouteDashboard.propTypes = {
    children: PropTypes.node
}
