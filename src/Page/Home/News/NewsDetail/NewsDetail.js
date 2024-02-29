import React from 'react';
import { Link } from 'react-router-dom';
import './NewsDetail.css'
const NewsDetail = ({ news }) => {
    const { img, title, description, _id, date, postedby } = news;
    return (
        <div>
            <Link to={`/news/${_id}`}>

                <div>
                    <div id='news-card' className="card  card-compact w-96 bg-base-100 shadow-xl mt-5  mb-5">
                        <figure><img id="imgbb" className='imgbb w-96 h-[200px]' src={img} alt="Shoes" /></figure>
                        <div className="card-body carding">
                            <h2 id='news-title' className="card-title  height-[200px] blog-title">{title}
                            </h2>
                            <p id="news-description">{description}<span>...</span></p>



                        </div>
                        <div className='date ml-4 flex justify-between'>
                            <h2>{date}</h2>
                            <h2>{postedby}</h2>
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default NewsDetail;