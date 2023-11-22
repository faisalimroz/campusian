import React, { useEffect, useState } from 'react';
import './Scholarship.css'
import ScholarshipDetail from './ScholarshipDetail/ScholarshipDetail'
const Scholarship = () => {
    const [scholarships,setScholarship]=useState([])
    useEffect(()=>{
     fetch('http://localhost:5000/scholarship')
     .then(res=>res.json())
     .then(data=>setScholarship(data))
    },[])
    return (
        <div>
            <div className='mt-8  flex flex-wrap justify-evenly'>
         
         {
            scholarships.map(scholarship=><ScholarshipDetail key={scholarship.id} scholarship={scholarship}></ScholarshipDetail>)
         }
    </div>
        </div>
    );
};

export default Scholarship;