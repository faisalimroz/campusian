import React, { useEffect, useState } from 'react';
import './Eventdetails.css'
import { useParams } from 'react-router-dom';
const Eventdetails = () => {
    const { id } = useParams();

    const [eventPost, setEventPost] = useState();
    useEffect(() => {
        fetch('events.json')
            .then(res => res.json())
            .then(data => {
                const post = data.find(post => post.id === id);
                setEventPost(post);
                console.log(eventPost.title);
            })
    }, [])
    return (
        <div>
            <div id='' className="event  mx-auto ">

                <div className="event-div">
                    <figure><img className='event-img' src="https://i.ibb.co/t3t13vn/image.png" alt="Shoes" /></figure>
                    <div className='event-details'>
                        <h1>Venue: Central Field</h1>
                        <h1> Event Date: 2023-05-12</h1>
                        <h1> Event Time: 9:30 PM</h1>
                    </div>

                    <h2 className="event-title">Futurenation-DIU Job Utsob 2022</h2>
                    <p className='event-p'>DIU organized Futurenation Job Utsob 2022 . DIU organized Futurenation Job Utsob 2022</p>
                



                </div>
            </div>
        </div>
    );
};

export default Eventdetails;