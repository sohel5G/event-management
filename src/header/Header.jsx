// import { NavLink } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png"
import { useContext } from "react";
import { allContext } from "../allContext/AllContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const { user, userLogOut } = useContext(allContext);

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                navigate('/login')
            }).catch(() => {

            });
    }

    const li = <>
        <li className="mt-2"> <NavLink className="py-3 lg:py-2 text-lg hover:bg-primaryColor hover:text-white text-black font-medium" to={'/'}>Home</NavLink></li>

        <li className="mt-2"> <NavLink className="py-3 lg:py-2 text-lg hover:bg-primaryColor hover:text-white text-black font-medium" to={'/about'}>About</NavLink></li>

        <li className="mt-2"> <NavLink className="py-3 lg:py-2 text-lg hover:bg-primaryColor hover:text-white text-black font-medium" to={'/services'}>Service</NavLink></li>

        <li className="mt-2"> <NavLink className="py-3 lg:py-2 text-lg hover:bg-primaryColor hover:text-white text-black font-medium" to={'/contact'}>Contact</NavLink></li>

    </>

    return (
        <>
            <header className="bg-base-200 shadow-md">
                <div className="navbar container mx-auto px-10 py-4 lg:py-1 grid grid-cols-1 lg:grid-cols-5 items-center">
                    <div className="justify-center">
                        <div className="dropdown bg-primaryColor hover:bg-hoverPrimaryColor text-white rounded-md mr-5">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="shadow-md gap-4 menu menu-sm dropdown-content mt-6 z-[1] p-2 w-52 bg-base-200">
                                {li}
                            </ul>
                        </div>
                        <Link to={'/'}><img className="w-24" src={logo} alt="" /></Link>
                    </div>
                    <div className="hidden lg:flex col-span-2 justify-end">
                        <ul className="gap-1 menu menu-horizontal px-1">
                            {li}
                        </ul>
                    </div>
                    <div className="mt-10 lg:mt-0 justify-center flex-col lg:flex-row  col-span-2">
                        {
                            !user ?
                                <>
                                    <div>
                                        <Link to={'/login'}><button className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-semibold py-2 px-5 rounded-lg text-lg mr-3">Login</button></Link>
                                        <Link to={'/register'}> <button className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-semibold py-2 px-5 rounded-lg text-lg">Register</button> </Link>
                                    </div>
                                </> :
                                <>
                                    <div className="flex items-center">
                                        <Link to={'/dashboard'}><button className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-semibold py-2 px-5 rounded-lg text-lg mr-3">Dashboard</button></Link>
                                        <Link to={'/profile'}> <button className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-semibold py-2 px-5 rounded-lg text-lg mr-3">Profile</button> </Link>
                                    </div>
                                    <div className="flex gap-2 items-center mt-8 lg:mt-0">
                                        <img src={user?.photoURL} alt="" className="w-12 h-12 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                                        <div>
                                            <h2 className="text-black font-semibold text-sm"> {user?.displayName} </h2>
                                            <button onClick={handleLogOut} className="-mt-5 font-semibold pb-[2px] px-[2px] text-sm text-primaryColor border-b border-primaryColor">Log Out</button>
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
