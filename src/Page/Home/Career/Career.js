import React, { useEffect, useState } from 'react';
import './Career.css';
import CareerDetail from '../Career/CareerDetail/CareerDetail'
import CareerDetails from './CareerDetail/CareerDetails/CareerDetails';
const Career = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='bg-green-300'>
            <div className=' flex flex-wrap justify-evenly '>

                {
                    jobs.map(job => <CareerDetail key={job.id} job={job}></CareerDetail>)
                }
               
            </div>
        
        </div>
    );
};

export default Career;