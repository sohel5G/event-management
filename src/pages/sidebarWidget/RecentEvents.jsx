import { useContext } from "react";
import { allContext } from "../../allContext/AllContext";
import { Link } from "react-router-dom";


const RecentEvents = () => {
    const { services } = useContext(allContext);
    return (
        <div>
            <h1 className="text-2xl font-semibold">Recent Events</h1>
            {
                services.slice(0, 4).map( service => {
                    return <>
                        <Link to={`/service/${service.id}`}>
                            <div className="card card-compact shadow-sm hover:shadow-md border mt-6 rounded p-2">
                                <figure><img src={service.img} alt="Weeding" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-base"> {service.title} </h2>
                                </div>
                            </div>
                        </Link>
                    </>

                } )
            }
        </div>
    );
};

export default RecentEvents;


