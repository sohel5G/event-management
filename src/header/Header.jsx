// import { NavLink } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png"


const Header = () => {

    const li = <>
        <li className="mt-2"> <NavLink className="py-3 lg:py-2 text-lg hover:bg-primaryColor hover:text-white text-black font-medium" to={'/'}>Home</NavLink></li>
        
        <li className="mt-2"> <NavLink className="py-3 lg:py-2 text-lg hover:bg-primaryColor hover:text-white text-black font-medium" to={'/about'}>About</NavLink></li>

        <li className="mt-2"> <NavLink className="py-3 lg:py-2 text-lg hover:bg-primaryColor hover:text-white text-black font-medium" to={'/services'}>Service</NavLink></li>

        <li className="mt-2"> <NavLink className="py-3 lg:py-2 text-lg hover:bg-primaryColor hover:text-white text-black font-medium" to={'/contact'}>Contact</NavLink></li>

    </>

    return (
      <>
            <header className="bg-base-200 shadow-md">
                <div className="navbar container mx-auto px-10 py-7 lg:py-3 flex-col lg:flex-row">
                    <div className="justify-center lg:navbar-start w-full lg:w-2/4">
                        <div className="dropdown bg-primaryColor hover:bg-hoverPrimaryColor text-white rounded-md mr-5">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="shadow-md gap-4 menu menu-sm dropdown-content mt-6 z-[1] p-2 w-52 bg-base-200">
                                {li}
                            </ul>
                        </div>
                        <Link to={'/'}><img className="w-36" src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="gap-4 menu menu-horizontal px-1">
                            {li}
                        </ul>
                    </div>
                    <div className="lg:navbar-end mt-10 lg:mt-0 w-full lg:w-2/4 justify-center">
                        <button className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-semibold py-2 px-5 rounded-lg text-lg mr-3">Login</button>
                        <button className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-semibold py-2 px-5 rounded-lg text-lg">Register</button>
                    </div>
                </div>
            </header>
      </>
    );
};

export default Header;
