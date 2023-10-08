import { Link } from "react-router-dom";
import { BsArrowRightShort } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Service = ({ service }) => {

    const { title, img, description, price, id } = service;

    return (
        <>
            <div className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
                <figure><img src={img} alt="Weeding" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {title} </h2>
                    <p className="text-lg"> {description} </p>
                    <p className="text-2xl font-semibold mt-4"> {price} </p>
                    <div className="card-actions mt-4">
                        <Link className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-medium py-2 px-3 rounded-lg mr-3 gap-0 items-center inline-flex text-xs" to={'/contact'}> <span>View Details</span> <BsArrowRightShort className="text-xl"></BsArrowRightShort> </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Service;

Service.propTypes = {
    service: PropTypes.object
}

