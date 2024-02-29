import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CareerDetails.css';

const CareerDetails = () => {
    const { cid } = useParams();
    console.log(cid);
    const [jobPost, setJobPost] = useState(null);

    useEffect(() => {
        console.log('idd', cid);
        fetch(`http://localhost:5000/career/${cid}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch career details');
                }
                return response.json();
            })
            .then(data => {
                console.log('job', data);
                setJobPost(data);
            })
            .catch(error => {
                console.log(error);
                // Handle the error, such as showing an error message
            });
    }, [cid]);

    const handleButton = () => {
        window.open('https://bard.google.com/', '_blank', 'noreferrer');
    };

    return (
        <div className="career-details-container mx-auto ">
            {jobPost && jobPost.title ? (
                <div className="career-details bg-white-300 p-3 ml-5">
                    <div>
                        <h2 className="career-title font-bold">{jobPost.title}</h2>
                        <h2>{jobPost.company}</h2>
                    </div>
                    <div className="mt-6 ml-5"> 
                    <h1>Job Responsibility</h1>
                        <ul style={{ listStyleType: 'disc' }}>
                            {jobPost.jobresponsibility.split('.').map((sentence, index, array) => (
                                <li key={index}>{index === array.length - 1 ? sentence : `${sentence}.`}</li>
                            ))}
                        </ul>

                    </div> 
                    {/* <div className="mt-6 ml-4">
                        <h1 className='font-bold'>Additional Requirement</h1>
                        <ul style={{ listStyleType: 'disc' }}>
                            {jobPost.additionalrequirement
                                .split('.').map((sentence, index, array) => (
                                    <li key={index}>{index === array.length - 1 ? sentence : `${sentence}.`}</li>
                                ))}
                        </ul>

                    </div> */}
                    <button onClick={handleButton} className="apply-button bg-green-400 p-3">
                        Apply Online
                    </button>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default CareerDetails;
