import React from 'react';

import './Banner.css';
const Banner = () => {
    return (
        <div className=''>
            <div className="hero min-h-[80vh] sriti  relative" id='banner'>
                
                    
                    <div  className='absolute  lg:mr-[500px] lg:mt-[200px]'>
                        <h1 className="text-6xl font-bold text-black">We Are Proud</h1>
                        <p className="py-6 text-3xl font-semibold">Students of <span style={{ color: 'black' }}>Daffodil International University</span> </p>

                       
                    </div>
                
            </div>
        </div>
    );
};

export default Banner;