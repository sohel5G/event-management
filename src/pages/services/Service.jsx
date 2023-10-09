import { Link } from "react-router-dom";
import { BsArrowRightShort } from 'react-icons/bs';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import PropTypes from 'prop-types';

const Service = ({ service }) => {

    const { title, img, description, price, id } = service;

    return (
        <>
            <div data-aos="fade-up" className="card card-compact bg-base-100 shadow-sm hover:shadow-md border pb-2">
                <figure> <Link to={`/service/${id}`}> <img src={img} alt="Weeding" /> </Link></figure>
                <div className="card-body">
                    <Link className="hover:text-primaryColor" to={`/service/${id}`}> <h2 className="card-title"> {title} </h2> </Link>
                    <p className="text-lg"> 
                    {
                        description.length > 110 ? 
                        <>
                                    {description.slice(0, 110)}... <Link className="text-primaryColor inline-flex items-center text-[15px] font-medium" to={`/service/${id}`}> <span> Read more  </span> <MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight> </Link>
                        </> :
                        <>
                            {description}
                        </>
                    }
                    </p>
                    <p className="text-2xl font-semibold mt-4"> {price} </p>
                    <div className="card-actions mt-4">
                        <Link className="bg-primaryColor hover:bg-hoverPrimaryColor text-white font-medium py-2 px-3 rounded-lg mr-3 gap-0 items-center inline-flex text-xs" to={`/service/${id}`}> <span>View Details</span> <BsArrowRightShort className="text-xl"></BsArrowRightShort> </Link>
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

