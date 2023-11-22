import React, { useEffect, useState } from 'react';
import './ResearchPaper.css'
import ResearchPeperdetail from './ResearchPaperdetail/ResearchPeperdetail';
const ResearchPaper = () => {
    const [researchPaper,setResearchPaper]=useState([])
    useEffect(()=>{
        fetch('research.json')
        .then(res=>res.json())
        .then(data=>setResearchPaper(data))
    },[])
    return (
        <div>
              <div>
        
        <div className='mt-8  flex flex-wrap justify-evenly'>
    
    {
       researchPaper.map(research=><ResearchPeperdetail key={research.id} research={research}></ResearchPeperdetail>)
    }
    </div>
   </div>
        </div>
    );
};

export default ResearchPaper;