import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const RecentEvent = ({ service }) => {
    return (
        <div>
            <Link to={`/service/${service.id}`}>
                <div className="card card-compact shadow-sm hover:shadow-md border mt-6 rounded p-2">
                    <figure><img src={service.img} alt="Weeding" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-base"> {service.title} </h2>
                    </div>
                </div>
            </Link> 
        </div>
    );
};

export default RecentEvent;


RecentEvent.propTypes = {
    service: PropTypes.object
}

