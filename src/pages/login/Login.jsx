import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { allContext } from "../../allContext/AllContext";
import swal from "sweetalert";
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from "firebase/auth";

const gooleProvider = new GoogleAuthProvider();

const Login = () => {
    const { userSignIn, userSignInWithPopup } = useContext(allContext);
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        userSignIn(email, password)
            .then(() => {
                navigate('/profile');
                swal({ text: "Successfully Log In", buttons: false, icon: 'success' });
            })
            .catch((errData) => {
                let err = errData.message
                err = 'password or email doesn\'t match'
                swal({ text: `${err}`, buttons: false, icon: 'warning' });
            });
    }

    const handleUserSignInWithPopup = () => {
        userSignInWithPopup(gooleProvider)
            .then(() => {
                navigate('/profile');
                swal({ text: "Successfully Log In", buttons: false, icon: 'success' });
            }).catch((error) => {
                const errorMessage = error.message;
                console.log('popUpSignInError', errorMessage);
            });
    }

    return (
        <>
            <Helmet><title>Login - Weeding Event Management</title></Helmet>
            <section className="container mx-auto px-8">
                <div className="max-w-sm mx-auto pb-28 pt-16">
                    <h1 data-aos="flip-right" className="text-4xl font-semibold text-center mt-10">Login</h1>
                    <div className="mt-7 flex justify-center">
                        <div className="w-12 h-[2px] bg-primaryColor"></div>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div>
                            <p className="text-xl font-semibold mt-12">Email address</p>
                            <input required name="email" className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="email" placeholder="Enter your email address" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-6">Password</p>
                            <input required name="password" className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="password" placeholder="Enter your password" />
                        </div>
                        <div className="mt-7 flex">
                            <input className="bg-primaryColor hover:bg-hoverPrimaryColor py-3 px-7 text-white text-base font-semibold text-center cursor-pointer rounded-md" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='mt-10 my-4 mx-1'>
                        <button onClick={handleUserSignInWithPopup} className='text-primaryColor flex items-center gap-2 py-2 border-2 border-primaryColor rounded-lg text-sm font-medium my-3 px-4 min-w-[185px]'><span> <FaGoogle /> </span> <span>Login with Google</span> </button>
                        {/* <button className='text-[#403F3F] flex items-center gap-2 py-2 justify-center border-2 border-[#403F3F] rounded-lg text-sm font-medium my-3 px-4 min-w-[185px]'><span> <FaGithub /> </span> <span>Login with Github</span> </button> */}
                    </div>
                    <p className="mt-7">Dont’t Have An Account ? <Link className="text-primaryColor font-semibold" to={'/register'}>Register</Link></p>
                </div>
            </section>
        </>
    );
};

export default Login;