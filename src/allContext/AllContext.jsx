import { createContext, useEffect, useState } from "react";
import { useGetServices } from "../hooks/hooks";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConf/FirebaseConf";

export const allContext = createContext(null);

const AllContext = ({children}) => {
    const [user, setUser] = useState(null);
    const services = useGetServices();
    const [loading, setLoading] = useState(true);

    const userSignUp = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userUpdateOnSignUp = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const userSignIn = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userLogOut = () => {
        // setLoading(true)
        return signOut(auth)
    }
    const userSignInWithPopup = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                return setLoading(false);
            }
            setUser(null)
            return setLoading(false)
        });

        return () => {
            unsubscribe();
        }

    }, []);

   

    const authAndServices = { services, userSignUp, userUpdateOnSignUp, userSignIn, userLogOut, user, loading, setUser, userSignInWithPopup }
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

