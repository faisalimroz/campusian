import React from 'react';
import './Eventdetail.css';
import { Link } from 'react-router-dom';

const Eventdetail = ({ event }) => {
    const { img, title, description, _id, date } = event;
    console.log(_id)

    return (
        <div>
            <Link to={`/event/${_id}`}>
                <div id='event-card' className="card card-compact w-96 bg-base-100 shadow-xl mt-5 relative">
                    <img src={img} alt="Event Image" className="" />
                    <div className="absolute top-0 left-0 bg-blue-500 text-black p-2 h-[50px] w-[100px]">
                        <span className="text-xs date-color font-semibold ">{date}</span>
                    </div>
                    <div className="card-body">
                        <h2 id='event-title' className="card-title blog-title">{title}</h2>
                        <p id="event-content">
                            {description}
                            <span>...</span>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Eventdetail;
