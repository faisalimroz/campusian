import React from 'react';
import { Link } from 'react-router-dom';
import '../Blogdetail/Blogdetail.css';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const Blogdetail = ({ blog }) => {
    const {img, title, description, _id, date,email } = blog;
    console.log(img)



    return (
        
            <Link to={`/blog/${_id}`}>

                <div>
                    <div id='blog-card' className="card  card-compact w-96 bg-base-100 shadow-xl mt-5">
                        <figure><img id='blog-img' src={img} alt={title} /></figure>
                        <div className="card-body ">
                            <h2 className="card-title  blog-title">{title}</h2>
                            <p id="my-paragraph">{description}<span>...</span></p>
                            <p id="my-paragraph">{email}<span>...</span></p>
                            <h2>{date}</h2>


                        </div>
                    </div>

                </div>
            </Link>

       

    );
};

export default Blogdetail;