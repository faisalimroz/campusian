import React from 'react';
import './CareerDetail.css'
import { Link } from 'react-router-dom';
const CareerDetail = ({job}) => {
    const {img,title,company,salary,location,experience,id,date,qualification}=job;
    return (
        <div className='mt-2 '>
            <Link to={`/career/${id}`}>
        
            <div id='card-color' className="card w-[450px] h-auto bg-base-300 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-gray-200 duration-300 ml-4 mt-4">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className='card-title company'>
            <h4 className='card-title '>{company}</h4>
            <img className='h-10 w-10' src={img}alt="Shoes" />
          </div>

          <div class="cards">
            <img className='h-8 w-8 ' src="https://i.ibb.co/TtkJQ2g/dollar.png " alt="salary" />
            <div class="cards-content h-auto">

              <p>{salary}</p>
            </div>
          </div>
          <div class="cards">
            <img className='h-8 w-8 ' src="https://i.ibb.co/djL84hq/image.png " alt="location" />
            <div class="cards-content h-auto">

              <p>{location}</p>
            </div>
          </div>
          <div class="cards">
            <img className='h-8 w-8 ' src="https://i.ibb.co/TYTnZ17/image.png " alt="salary" />
            <div class="cards-content h-auto">

              <p>{experience}</p>
            </div>
          </div>
          <div class="cards">
            <img className='h-8 w-8 ' src="https://i.ibb.co/LpG2pmh/image.png " alt="salary" />
            <div class="cards-content h-auto " >

              <p>{qualification} </p>
            </div>
          </div>
          <div class="cards">
            <img className='h-8 w-8 ' src="https://i.ibb.co/BtgNx9z/image.png " alt="salary" />
            <div class="cards-content h-auto">

              <p>{date}</p>
            </div>
          </div>








        </div>
      </div>
        </Link>
        </div>
    );
};

export default CareerDetail;