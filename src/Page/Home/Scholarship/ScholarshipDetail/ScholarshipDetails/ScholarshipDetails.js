import React, { useEffect, useState } from 'react';
import './ScholarshipDetails.css';
import { useParams } from 'react-router-dom';
const ScholarshipDetails = () => {
    const [newsPost, setNewsPost] = useState();
    const { id } = useParams();
    useEffect(() => {
        fetch('scholarship.json')
            .then(res => res.json())
            .then(data => {
                const post = data.find(post => post.id === id);
                setNewsPost(post);
                console.log(newsPost.title)
            })
    }, [])
    const handleButton =()=>{
        window.open('https://www.abdn.ac.uk/study/international/scholarships-and-funding.php','_blank','noreferrer')     
    }
    return (
        <div>
            <div id='' className="news  mx-auto ">

                <div className="">
                    <img className='scholarship-img' src="https://i.ibb.co/m4CmmSM/image.png" alt="Shoes" />
                    <h1 className="news-title text-3xl">University of Aberdeen - Available courses for January 2023 Intake</h1>
                    <h1 className='font-bold text-2xl mt-2'>University of Aberdeen </h1>
                    <p className='text-2xl mt-2'>Masters in Computer Science and Engineering</p>
                    <p className='text-md scholarship-description font-bold'>Overview: </p>
                    <p className='text-md scholarship-description '>Education Hub Limited is the University of Aberdeen's recognized partner in Bangladesh. If you want to improve your chances of getting a better scholarship and are interested in starting your higher education journey at the University of Aberdeen, submit an application through Education Hub Limited</p>
                    <p className='text-md scholarship-description '>Amount: 20000</p>
                    <p className='text-md scholarship-description'>Duration : 2 years</p>
                    <p className='text-md scholarship-description'>Deadline : 2023-05-12</p>
                    <p>Requirement: Completed bachelor’s (4 years)  with a minimum of 60% or CGPA 3.0 (Out of 4.0) from a reputed university </p>
                    <button onClick={handleButton} className='bg-green-300 p-3 '>Apply Online</button>
                   


                </div>
            </div>
        </div>
    );
};

export default ScholarshipDetails;