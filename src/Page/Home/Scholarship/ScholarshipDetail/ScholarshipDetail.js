import React from 'react';
import './ScholarshipDetail.css'
import { Link } from 'react-router-dom';
const ScholarshipDetail = ({ scholarship }) => {
    const { img, title, description, _id, date, universityname, Scholarshipname } = scholarship;
    return (
        <div>
            <Link to={`/scholarship/${_id}`}>

                <div>
                    <div  id='scholarship-card' className="scholarship-card card card-compact w-96 bg-base-100 shadow-xl mt-5 ml-4 mb-5">
                        <figure><img id="imgbb" className='imgbb w-96' src={img} alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 id='scholarship-title' className="card-title  blog-title">{title}
                            </h2>
                            <h2 className='font-bold'>{universityname}</h2>
                            <h2>{Scholarshipname}</h2>
                            
                            <p id="scholarship-description">{description}<span>...</span></p>



                        </div>
                        {/* <div className='date ml-4 flex justify-between'>
                            <h2>{date}</h2>
                           
                        </div> */}
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default ScholarshipDetail;