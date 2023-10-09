import { useContext } from "react";
import { allContext } from "../../allContext/AllContext";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const { userLogOut, user } = useContext(allContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                navigate("/login");
            }).catch(() => {
                
            });
        
    }
    console.log(user)
    return (
        <>
            <section className="container mx-auto px-8">
                <div className="h-[80vh] flex items-center justify-center">
                    <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12  dark:text-gray-100">
                        <img src={user?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                        <div className="space-y-4 text-center divide-y">
                            <div className="my-2 space-y-1">
                                <h2 className="text-black font-semibold text-xl py-5"> {user?.displayName} </h2>
                                <p className="text-black"> {user?.email} </p>
                            </div>
                            <button onClick={handleLogOut} className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-semibold py-2 px-5 rounded-lg text-base mr-3">Log Out</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;