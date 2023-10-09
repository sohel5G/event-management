import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allContext } from "../../allContext/AllContext";
import RecentEvents from "../sidebarWidget/RecentEvents";


const ServiceDetails = () => {

    const { id } = useParams();
    const urlId = parseInt(id);
    const { services } = useContext(allContext);
    const [service, setService] = useState({});

    useEffect(() => {
        const service = services.find( serviceId => serviceId.id === urlId );
        if(service){
            setService(service)
        }
        
    }, [services, urlId])
   
    const { title, img, description, price } = service;

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 container mx-auto px-8 py-20">
                <div className="col-span-3">
                    <div className="bg-base-100 border pb-2 p-3">
                        <figure><img className="rounded w-full" src={img} alt="Weeding" /></figure>
                        <div className="card-body px-1 py-5">
                            <h2 className="card-title text-3xl"> {title} </h2>
                            <p className="text-lg py-4"> {description} </p>
                            <p className="text-3xl font-semibold mt-4"> {price} </p>
                            <div className="card-actions mt-4">
                                <button className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-medium py-2 px-3 rounded-lg mr-3 gap-0 items-center inline-flex text-base"> <span>Add To Cart</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <RecentEvents></RecentEvents>
                </div>
            </div>   
        </>
    );
};

export default ServiceDetails;




