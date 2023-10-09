import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { allContext } from "../../allContext/AllContext";
import Service from "./Service";
import ScrollToTop from "react-scroll-to-top";

const Services = () => {
    const { services } = useContext(allContext)

    return (
        <>
            <Helmet><title>Services - Weeding Event Management</title></Helmet>
            <section>
                <div className="ServicesPageTopBg bg-center bg-no-repeat bg-cover">
                    <div className=" py-32 bg-[#0000008c]">
                        <div className=" container mx-auto px-8 flex-1 flex justify-center max-w-2xl">
                            <div className="text-center">
                                <h1 data-aos="flip-right" className="text-4xl font-medium text-white"> Our Services </h1>
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

                    {/* <div className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
                        <figure><img src={weeding} alt="Weeding" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dream Weddings Expert Planning</h2>
                            <p className="text-lg">Our nDream Weddings service is dedicated to transforming your wedding day vision into a flawless reality. With a team of seasoned </p>
                            <p className="text-2xl font-semibold mt-4">$5230</p>
                            <div className="card-actions mt-4">
                                <Link className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-medium py-2 px-3 rounded-lg mr-3 gap-0 items-center inline-flex text-xs" to={'/contact'}> <span>View Details</span> <BsArrowRightShort className="text-xl"></BsArrowRightShort> </Link>
                            </div>
                        </div>
                    </div> */}

                    {
                        services.map(service => <Service service={service} key={service.id}>  </Service> )
                    }


                </div>
            </section>   
            <ScrollToTop smooth width='20px' height='20px' color='#ffffff' style={{ backgroundColor: '#C42885', padding: '11px 10px' }} />
        </>
    );
};

export default Services;