import React, { useEffect, useState } from 'react';
import './Event.css';
import './Eventdetail/Eventdetail'
import Eventdetail from './Eventdetail/Eventdetail';
const Event = () => {
    const [events,setnewEvents]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/event')
        .then(res=>res.json())
        .then(data=>setnewEvents(data))
    },[]

    )
    return (
        <div>
            <div>
             <div className='mt-8  flex flex-wrap justify-evenly'>
         
         {
            events.map(event=><Eventdetail key={event.id} event={event}></Eventdetail>)
         }
             </div>
           </div>
        </div>
    );
};

export default Event;