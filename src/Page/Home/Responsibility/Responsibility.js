import React from 'react';
import './Responsibility.css'
const Responsibility = () => {
    return (
        <div className='h-[200px] responsibility-area font-bold'>
            <div className='text-center '>
                <h1 className='text-3xl'>Our Responsibility</h1>
            </div>
            <div className='flex justify-evenly mt-3'>
                <div className='responsibility'>
                    <img src="https://i.ibb.co/9V0sTMk/image.png" alt="" />
                    <h1>Scholarship</h1>
                </div>
                <div className='responsibility'>
                    <img src="https://i.ibb.co/X2vLqZb/image.png" alt="" />
                    <h1>Help  Students and Alumni</h1>
                </div>
                <div className='responsibility'>
                    <img src="https://i.ibb.co/jh0W0FP/image.png" alt="" />
                    <h1>Help Our University</h1>
                </div>
                <div className='responsibility'>
                    <img src="https://i.ibb.co/YhcNw0B/image.png" alt="" />
                    <h1>Build Our Community</h1>
                </div>

            </div>


        </div>
    );
};

export default Responsibility;