import { Link } from "react-router-dom";
import { BsArrowRightShort } from 'react-icons/bs';
import weeding from "../../assets/img/weeding.png"


const Services = () => {
    return (
        <>
            <section>
                <div className="ServicesPageTopBg bg-center bg-no-repeat bg-cover">
                    <div className=" py-32 bg-[#0000008c]">
                        <div className=" container mx-auto px-8 flex-1 flex justify-center max-w-2xl">
                            <div className="text-center">
                                <h1 className="text-4xl font-medium text-white"> Our Services </h1>
                                <div className="mt-4 flex justify-center">
                                    <div className="w-16 h-[2px] bg-primaryColor"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-8 pt-20 pb-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
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


                    <div className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
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


                    <div className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
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


                    <div className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
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


                    <div className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
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


                    <div className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
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
        </>
    );
};

export default Services;