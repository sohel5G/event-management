import { Helmet } from "react-helmet-async";
import ScrollToTop from "react-scroll-to-top";

const Contact = () => {
    return (
        <>
            <Helmet><title>Contact - Weeding Event Management</title></Helmet>
            <section>
                <div className="ContactPageTopBg bg-center bg-no-repeat bg-cover">
                    <div className=" py-32 bg-[#0000008c]">
                        <div className=" container mx-auto px-8 flex-1 flex justify-center max-w-2xl">
                            <div className="text-center">
                                <h1 data-aos="flip-right" className="text-4xl font-medium text-white"> Get a quote! </h1>
                                <div className="mt-4 flex justify-center">
                                    <div className="w-16 h-[2px] bg-primaryColor"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex items-center justify-center container mx-auto px-8 pb-16">
                <div>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                            <input tabIndex={0} type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-primaryColor mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input tabIndex={0} type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-primaryColor mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Company name</label>
                            <input tabIndex={0} role="input" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-primaryColor mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Country</label>
                            <input tabIndex={0} type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-primaryColor mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                            <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-primaryColor mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="bg-primaryColor hover:bg-hoverPrimaryColor py-3 px-7 mt-9 text-white text-base font-semibold text-center cursor-pointer rounded-md">SUBMIT</button>
                    </div>
                </div>
            </div>      
            <ScrollToTop smooth width='20px' height='20px' color='#ffffff' style={{ backgroundColor: '#C42885', padding: '11px 10px' }} />  
        </>
    );
};

export default Contact;


