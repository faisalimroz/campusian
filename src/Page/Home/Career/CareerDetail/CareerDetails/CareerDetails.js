import React from 'react';
import './CareerDetails.css'


const CareerDetails = () => {
    const handleButton =()=>{
        window.open('https://bard.google.com/','_blank','noreferrer')     
    }
    const add = 'Age 24 to 35 years.Only males are allowed to apply. Candidates with experience will be given preference. Handling Customer Complain & Ensure Customer Satisfaction.Adaptability with different environment. Extensive traveling mind set. Working experience on GPON/EPON/P2P network'
    const sentences = add.split('. ');
    return (
        <div className=''>


            <div id='' className="blog mx-auto   ">

                <div className="blog-div bg-gray-300 p-3">

                    <div>
                        <h2 className="blog-title font-bold">Web Developer</h2>
                        <h2>Datasoft</h2>
                        
                    </div>
                    <div className='mt-6 ml-4'>
                        <ul style={{ listStyleType: 'disc' }}>
                            {sentences.map((sentence, index) => (
                                <li key={index}>{sentence}</li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={handleButton} className='bg-green-300 p-3 '>Apply Online</button>
                

                </div>


            </div>





        </div>
    );
};

export default CareerDetails;