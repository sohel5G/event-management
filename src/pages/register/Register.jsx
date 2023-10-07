import { Link } from "react-router-dom";


const Register = () => {
    return (
        <>
            <section className="container mx-auto px-8">
                <div className="max-w-sm mx-auto pb-28 pt-16">
                    <h1 className="text-4xl font-semibold text-center mt-10">Register</h1>
                    <div className="mt-7 flex justify-center">
                        <div className="w-12 h-[2px] bg-primaryColor"></div>
                    </div>
                    <form className="">
                        <div>
                            <p className="text-xl font-semibold mt-12">Your Name</p>
                            <input className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="text" placeholder="Enter your name" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-6">Photo URL</p>
                            <input className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="url" placeholder="Enter photo URL" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-6">Email</p>
                            <input className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="email" placeholder="Enter your email address" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-6">Password</p>
                            <input className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="password" placeholder="Enter your password" />
                        </div>
                        <div className="mt-10">
                            <input className="bg-primaryColor hover:bg-hoverPrimaryColor py-3 px-7 text-white text-base font-semibold text-center cursor-pointer rounded-md" type="submit" value="Register" />
                        </div>
                        <div className="mt-6 flex items-center gap-2">
                            <input className="h-4 w-4" type="checkbox" name="term" id="term" />
                            <label htmlFor="term">Accept <Link className="font-semibold">Term & Conditions</Link></label>
                        </div>
                    </form>
                    <p className="mt-7">Already Have An Account ? <Link className="text-primaryColor font-semibold" to={'/login'}>Login</Link></p>
                </div>
            </section>   
        </>
    );
};

export default Register;