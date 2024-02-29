import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Eventdetails.css';

const Eventdetails = () => {
  const { eid } = useParams();
  console.log(eid);

  const [eventPost, setEventPost] = useState(null);

  useEffect(() => {
    console.log('idddd', eid);
    fetch(`http://localhost:5000/event/${eid}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch event details');
        }
        return response.json();
      })
      .then(data => {
        console.log('event', data);
        setEventPost(data);
      })
      .catch(error => {
        console.log(error);
        // Handle the error, such as showing an error message
      });
  }, [eid]);

  return (
    <div className="event-details-container mt-2 ">
      {eventPost && eventPost.title ? (
        <div className="event-details ">
          <div className="event-div mx-auto">
            <figure>
              <img className="event-img" src={eventPost.img} alt="Event" />
            </figure>
            <div className="event-details ">
              <h1>Venue: {eventPost.location}</h1>
              <h1>Event Date: {eventPost.date}</h1>
              <h1>Event Time: {eventPost.time}</h1>
            </div>

            <h2 className="text-xl">{eventPost.title}</h2>
            <p className="event-p ">{eventPost.description}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Eventdetails;
