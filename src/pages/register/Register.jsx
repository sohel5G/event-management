/* eslint-disable no-useless-escape */
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { allContext } from "../../allContext/AllContext";
import swal from 'sweetalert';
import ScrollToTop from "react-scroll-to-top";

const Register = () => {

    const { userSignUp, userUpdateOnSignUp, setUser } = useContext(allContext);

    const handleUserSignUp = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const phUrl = event.target.phUrl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;


        if (password.length < 6) {
            return swal({ text: "Password must be 6 characters or more!", buttons: false, icon: 'warning' });
        } else if (!/[A-Z]/.test(password)) {
            return swal({ text: "Password must be at least one capital letter!", buttons: false, icon: 'warning' });
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)) {
            return swal({ text: "Password must be at least one special character!", buttons: false, icon: 'warning' });
        } else if (!terms === true){
            return swal({ text: "Please accept the term & conditions", buttons: false, icon: 'warning' });
        }


        userSignUp(email, password)
            .then(() => {

                userUpdateOnSignUp({ displayName: name, photoURL: phUrl })
                    .then(() => {
                        console.log('profile data set')
                        setUser({ displayName: name, photoURL: phUrl, email: email })

                    }).catch((error) => {
                        console.log('profile data not set', error)
                    });
                swal({ text: "Successfully registered", buttons: false, icon: 'success' });
            })
            .catch((errData) => {
                let err = errData.message;
                err = 'Email address already exist';
                swal({ text: `${err}`, buttons: false, icon: 'warning' });
            });
    }

    return (
        <>
            <Helmet><title>Register - Weeding Event Management</title></Helmet>
            <section className="container mx-auto px-8">
                <div className="max-w-sm mx-auto pb-28 pt-16">
                    <h1 data-aos="flip-right" className="text-4xl font-semibold text-center mt-10">Register</h1>
                    <div className="mt-7 flex justify-center">
                        <div className="w-12 h-[2px] bg-primaryColor"></div>
                    </div>
                    <form onSubmit={handleUserSignUp}>
                        <div>
                            <p className="text-xl font-semibold mt-12">Your Name</p>
                            <input required name="name" className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="text" placeholder="Enter your name" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-6">Photo URL</p>
                            <input required name="phUrl" className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="url" placeholder="Enter photo URL" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-6">Email</p>
                            <input required name="email" className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="email" placeholder="Enter your email address" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-6">Password</p>
                            <input required name="password" className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="password" placeholder="Enter your password" />
                        </div>
                        <div className="mt-10">
                            <input className="bg-primaryColor hover:bg-hoverPrimaryColor py-3 px-7 text-white text-base font-semibold text-center cursor-pointer rounded-md" type="submit" value="Register" />
                        </div>
                        <div className="mt-6 flex items-center gap-2">
                            <input name="terms" className="h-4 w-4" type="checkbox" id="term" />
                            <label htmlFor="term">Accept <Link className="font-semibold">Term & Conditions</Link></label>
                        </div>
                    </form>
                    <p className="mt-7">Already Have An Account ? <Link className="text-primaryColor font-semibold" to={'/login'}>Login</Link></p>
                </div>
            </section>
            <ScrollToTop smooth width='20px' height='20px' color='#ffffff' style={{ backgroundColor: '#C42885', padding: '11px 10px' }} />
        </>
    );
};

export default Register;