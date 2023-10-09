import { useContext } from "react";
import { allContext } from "../../allContext/AllContext";
import RecentEvent from "./RecentEvent";


const RecentEvents = () => {
    const { services } = useContext(allContext);
    return (
        <div>
            <h1 className="text-2xl font-semibold">Recent Events</h1>
            {
                services.slice(0, 4).map(service => <RecentEvent key={service.id} service={service}></RecentEvent>)
            }
        </div>
    );
};

export default RecentEvents;


