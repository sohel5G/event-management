import { Link } from "react-router-dom";
import banner from "../../assets/img/banner.jpg";
import topSection from "../../assets/img/topSection.jpg";
import { BsArrowRightShort } from 'react-icons/bs';
import weeding from "../../assets/img/weeding.png"
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet><title>Home - Weeding Event Management</title></Helmet>
            <section>
                <div className="container mx-auto">
                    <img className="w-full" src={banner} alt="Banner Image" />
                </div>
            </section>
            <section>
                <div className="container mx-auto px-8 pt-16 lg:pt-1 pb-12 flex items-center flex-col lg:md:flex-row">
                    <div className="flex-1 flex justify-center">
                        <div data-aos="fade-up" className="max-w-xl">
                            <h1 className="text-4xl font-medium"> Wedding Dreams Come True </h1>
                            <div className="mt-4 flex">
                                <div className="w-24 h-[2px] bg-primaryColor"></div>
                            </div>
                            <p className="text-lg py-7"> Welcome to our world of enchanting weddings. We specialize in crafting unforgettable moments that reflect your unique love story. Explore our services and embark on a journey where your wedding dreams become a beautiful reality. </p>
                            <Link className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-medium py-2 px-5 rounded-lg text-base mr-3 gap-0 items-center inline-flex" to={'/contact'}> <span>Get Free Quote</span> <BsArrowRightShort className="text-3xl"></BsArrowRightShort> </Link>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="flex-1 flex justify-center mt-28">
                        <div className="border-4 border-primaryColor pb-5">
                            <img className="w-[420px] -mt-5 -ml-5" src={topSection} alt="Welcome image" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-8 pt-5 pb-28">
                <div>
                    <h1 className="text-4xl font-medium pt-5 lg:pt-12 text-center">Services</h1>
                    <div className="pb-16 mt-2 flex justify-center">
                        <div className="w-20 h-[2px] bg-primaryColor"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    <div data-aos="fade-up" className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
                        <figure><img src={weeding} alt="Weeding" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dream Weddings Expert Planning</h2>
                            <p className="text-lg">Our nDream Weddings service is dedicated to transforming your wedding day vision into a flawless reality. With a team of seasoned </p>
                            <p className="text-2xl font-semibold mt-4">$5230</p>
                            <div className="card-actions mt-4">
                                <Link className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-medium py-2 px-3 rounded-lg mr-3 gap-0 items-center inline-flex text-xs" to={'/contact'}> <span>View Details</span> <BsArrowRightShort className="text-xl"></BsArrowRightShort> </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div data-aos="fade-up" className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
                        <figure><img src={weeding} alt="Weeding" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dream Weddings Expert Planning</h2>
                            <p className="text-lg">Our nDream Weddings service is dedicated to transforming your wedding day vision into a flawless reality. With a team of seasoned </p>
                            <p className="text-2xl font-semibold mt-4">$5230</p>
                            <div className="card-actions mt-4">
                                <Link className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-medium py-2 px-3 rounded-lg mr-3 gap-0 items-center inline-flex text-xs" to={'/contact'}> <span>View Details</span> <BsArrowRightShort className="text-xl"></BsArrowRightShort> </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div data-aos="fade-up" className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
                        <figure><img src={weeding} alt="Weeding" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dream Weddings Expert Planning</h2>
                            <p className="text-lg">Our nDream Weddings service is dedicated to transforming your wedding day vision into a flawless reality. With a team of seasoned </p>
                            <p className="text-2xl font-semibold mt-4">$5230</p>
                            <div className="card-actions mt-4">
                                <Link className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-medium py-2 px-3 rounded-lg mr-3 gap-0 items-center inline-flex text-xs" to={'/contact'}> <span>View Details</span> <BsArrowRightShort className="text-xl"></BsArrowRightShort> </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div data-aos="fade-up" className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
                        <figure><img src={weeding} alt="Weeding" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dream Weddings Expert Planning</h2>
                            <p className="text-lg">Our nDream Weddings service is dedicated to transforming your wedding day vision into a flawless reality. With a team of seasoned </p>
                            <p className="text-2xl font-semibold mt-4">$5230</p>
                            <div className="card-actions mt-4">
                                <Link className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-medium py-2 px-3 rounded-lg mr-3 gap-0 items-center inline-flex text-xs" to={'/contact'}> <span>View Details</span> <BsArrowRightShort className="text-xl"></BsArrowRightShort> </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div data-aos="fade-up" className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
                        <figure><img src={weeding} alt="Weeding" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dream Weddings Expert Planning</h2>
                            <p className="text-lg">Our nDream Weddings service is dedicated to transforming your wedding day vision into a flawless reality. With a team of seasoned </p>
                            <p className="text-2xl font-semibold mt-4">$5230</p>
                            <div className="card-actions mt-4">
                                <Link className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-medium py-2 px-3 rounded-lg mr-3 gap-0 items-center inline-flex text-xs" to={'/contact'}> <span>View Details</span> <BsArrowRightShort className="text-xl"></BsArrowRightShort> </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div data-aos="fade-up" className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
                        <figure><img src={weeding} alt="Weeding" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dream Weddings Expert Planning</h2>
                            <p className="text-lg">Our nDream Weddings service is dedicated to transforming your wedding day vision into a flawless reality. With a team of seasoned </p>
                            <p className="text-2xl font-semibold mt-4">$5230</p>
                            <div className="card-actions mt-4">
                                <Link className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-medium py-2 px-3 rounded-lg mr-3 gap-0 items-center inline-flex text-xs" to={'/contact'}> <span>View Details</span> <BsArrowRightShort className="text-xl"></BsArrowRightShort> </Link>
                            </div>
                        </div>
                    </div>
                    
                    

                </div>
            </section>
            <section>
                <div className="frontPageBottomBg bg-center bg-no-repeat bg-cover">
                    <div className=" py-32 bg-[#0000008c]">
                        <div className=" container mx-auto px-8 flex-1 flex justify-center max-w-2xl">
                            <div data-aos="flip-right" className="text-center">
                                <h1 className="text-4xl font-medium text-white">We Provide the Best Service in Industry</h1>
                                <div className="mt-4 flex justify-center">
                                    <div className="w-16 h-[2px] bg-primaryColor"></div>
                                </div>
                                <p className="text-lg py-7 text-white">provide outstanding service through exceptional quality while adding unique value in everything we do.</p>
                                <Link className="bg-transparent hover:bg-white hover:text-primaryColor border-2 text-white font-medium py-2 px-5 rounded-lg text-sm mr-3 gap-0 items-center inline-flex" to={'/contact'}> <span>Get Free Quote</span> <BsArrowRightShort className="text-2xl"></BsArrowRightShort> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;


