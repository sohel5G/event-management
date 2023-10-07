import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content py-24">
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://facebook.com/sohel5G" target="blank" className="text-primaryColor hover:text-white mr-1 text-xl border-2 border-primaryColor rounded-full p-2 hover:bg-primaryColor"> 
                            <FaFacebookF></FaFacebookF> 
                        </a>
                        <a href="https://www.linkedin.com/in/sohel5G" target="blank" className="text-primaryColor hover:text-white mr-1 text-xl border-2 border-primaryColor rounded-full p-2 hover:bg-primaryColor"> 
                            <FaLinkedinIn></FaLinkedinIn> 
                        </a>
                        <a href="https://github.com/sohel5G" target="blank" className="text-primaryColor hover:text-white text-xl border-2 border-primaryColor rounded-full p-2 hover:bg-primaryColor"> 
                            <FaGithub></FaGithub> 
                        </a>
                    </div>
                </nav>
                <nav className='py-1'>
                    <ul className="grid grid-flow-col gap-4 md:gap-7">
                        <li className="mt-2"> <NavLink className="py-3 lg:py-2 text-lg hover:text-primaryColor text-black font-medium" to={'/'}>Home</NavLink></li>

                        <li className="mt-2"> <NavLink className="py-3 lg:py-2 text-lg hover:text-primaryColor text-black font-medium" to={'/about'}>About</NavLink></li>

                        <li className="mt-2"> <NavLink className="py-3 lg:py-2 text-lg hover:text-primaryColor text-black font-medium" to={'/services'}>Service</NavLink></li>

                        <li className="mt-2"> <NavLink className="py-3 lg:py-2 text-lg hover:text-primaryColor text-black font-medium" to={'/contact'}>Contact</NavLink></li>
                    </ul>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
            </footer>   
        </>
    );
};

export default Footer;