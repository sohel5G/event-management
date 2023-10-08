import { createContext } from "react";
import { useGetServices } from "../hooks/hooks";
import PropTypes from 'prop-types';

export const allContext = createContext(null);

const AllContext = ({children}) => {

    const services = useGetServices();

    const authAndServices = { name: 'Abdullah Al araf', services }

    return (
        <>
            <allContext.Provider value={authAndServices}>
                {children}
            </allContext.Provider>
        </>
    );
};

export default AllContext;

AllContext.propTypes = {
    children: PropTypes.node
}

