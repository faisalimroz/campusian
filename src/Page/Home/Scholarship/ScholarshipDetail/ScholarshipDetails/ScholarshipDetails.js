import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ScholarshipDetails.css';

const ScholarshipDetails = () => {
  const { sid } = useParams();
  console.log(sid);

  const [scholarshipPost, setScholarshipPost] = useState(null);

  useEffect(() => {
    console.log('idd', sid);
    fetch(`http://localhost:5000/scholarship/${sid}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch scholarship details');
        }
        return response.json();
      })
      .then(data => {
        console.log('scholarship', data);
        setScholarshipPost(data);
      })
      .catch(error => {
        console.log(error);
        // Handle the error, such as showing an error message
      });
  }, [sid]);

  const handleButton = () => {
    window.open( scholarshipPost.link, '_blank', 'noreferrer');
  };

  return (
    <div className="scholarship-details-container mx-auto mb-2 mt-2">
      {scholarshipPost && scholarshipPost.title ? (
        <div className="scholarship-details  mx-auto">
          <div className="">
            <img className="scholarship-img" src={scholarshipPost.img} alt="Scholarship" />
            <h1 className="scholarship-title text-3xl">{scholarshipPost.title}</h1>
            <h1 className="font-bold text-2xl mt-2">{scholarshipPost.university}</h1>
            <p className="text-2xl mt-2">{scholarshipPost.course}</p>
            <p className="text-md scholarship-description font-bold">Overview: </p>
            <p className="text-md scholarship-description">{scholarshipPost.overview}</p>
            <p className="text-md scholarship-description">Amount: {scholarshipPost.amount}</p>
            <p className="text-md scholarship-description">Duration: {scholarshipPost.Duration}</p>
            <p className="text-md scholarship-description">Deadline: {scholarshipPost.date}</p>
            <p>Requirement: {scholarshipPost.requirement}</p>
            <button onClick={handleButton} className="bg-green-300 p-3">
              Apply Online
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ScholarshipDetails;
