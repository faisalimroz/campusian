import React from 'react';
import './ResearchPaperdetail.css'
import ResearchPaper from '../ResearchPaper';
import { Link } from 'react-router-dom';
const ResearchPeperdetail = ({ research }) => {
    const { id, img, title,link } = research;
    return (
        <div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div>
                    <div id='research-card' className="card card-compact w-96 bg-base-100 shadow-xl mt-5 ml-4 mb-5">
                        <figure><img id="imgbb" className='imgbb w-96' src={img} alt="Shoes" /></figure>
                        <div className="card-body carding">
                            <h2 id='research-title' className="card-title blog-title">{title}</h2>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ResearchPeperdetail;