import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";



const Login = () => {
    return (
        <>
            <Helmet><title>Login - Weeding Event Management</title></Helmet>
            <section className="container mx-auto px-8">
                <div className="max-w-sm mx-auto pb-28 pt-16">
                    <h1 data-aos="flip-right" className="text-4xl font-semibold text-center mt-10">Login</h1>
                    <div className="mt-7 flex justify-center">
                        <div className="w-12 h-[2px] bg-primaryColor"></div>
                    </div>
                    <form>
                        <div>
                            <p className="text-xl font-semibold mt-12">Email address</p>
                            <input className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="email" placeholder="Enter your email address" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-6">Password</p>
                            <input className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="password" placeholder="Enter your password" />
                        </div>
                        <div className="mt-10 flex">
                            <input className="bg-primaryColor hover:bg-hoverPrimaryColor py-3 px-7 text-white text-base font-semibold text-center cursor-pointer rounded-md" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="mt-7">Dont’t Have An Account ? <Link className="text-primaryColor font-semibold" to={'/register'}>Register</Link></p>
                </div>
            </section>
        </>
    );
};

export default Login;