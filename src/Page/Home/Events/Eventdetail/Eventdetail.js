import React from 'react';
import './Eventdetail.css'
import { Link } from 'react-router-dom';
const Eventdetail = ({ event }) => {
    const { img, title, description, id, date } = event;
    return (
        <div>
            <Link to={`/event/${id}`}>

                <div id='event-card' className="card  card-compact w-96 bg-base-100 shadow-xl mt-5 ml-4 mb-5">
                    <div class="relative">
                        <img src={img} alt="Event Image" class="w-full" />
                        <div class="absolute bottom-0 left-0 bg-blue-500 text-black p-2">
                            <span class="text-xs date-color font-semibold w-full">{date}</span>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 id='event-title' className="card-title  blog-title">{title}
                        </h2>
                        <p id="event-content">{description}<span>...</span></p>



                    </div>

                </div>

            </Link>
        </div>
    );
};

export default Eventdetail;