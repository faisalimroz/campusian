// Postjob.js
import React, { useContext, useState } from 'react';
import './Postjob.css'; // Import the updated CSS
import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthProvider';
import Swal from 'sweetalert2';
const img_hosting_token = '6fb68cbd4232c1e20fa193c68ca16ae7';

const Postjob = () => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
    const { user } = useContext(AuthContext);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [img, setImage] = useState('');
    const [salary, setSalary] = useState('');
    const [qualification, setQualification] = useState('');
    const [jobresponsibility, setJobresponsibility] = useState('');
    const [requiredSkills, setRequiredSkills] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [link, setLink] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleCrossButtonClick = () => {
        // Clear the input type file element
        const fileInput = document.querySelector('#file-input');
        fileInput.value = '';

        // Hide the preview image
        const previewImage = document.querySelector('.preview-image');
        previewImage.style.display = 'none';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', img); // Append the file object

        try {
            // Upload the image to imgBB
            const imgUploadResponse = await fetch(img_hosting_url, {
                method: 'POST',
                body: formData,
            });
            const imgResponseData = await imgUploadResponse.json();

            if (imgResponseData.data) {
                const email = user.email;

                // Make an axios POST request with the image URL
                const response = await axios.post('http://localhost:5000/career', {
                title,
                company,
                description,
                date,
                img:imgResponseData.data.display_url,
                salary,
                qualification,
                jobresponsibility,
                requiredSkills,
                jobType,
                location,
                link,
                deadline,
                email,
            });

                // Show a toast notification when the post is published
                console.log(response.data); 
                setTitle('');
                setDescription('');
                setDate('');
                setCompany('')
                setImage('');
                setSalary('');
                setQualification('');
                setJobresponsibility('');
                setRequiredSkills('');
                setJobType('');
                setLocation('');
                setLink('');
                setDeadline('');
                Swal.fire({
                    icon: 'success',
                    title: 'Job Published',
                    text: 'Your Job post has been published successfully!',
                });
            } else {
                console.error('Error uploading image:', imgResponseData.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return (
        <div className='mt-[200px]  bg-yellow-300' id='job'>
            <div id='postjob' className=' bg-yellow-300 postjob '>
                <h1>Add a Job Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Job Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Company:</label>
                        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Salary</label>
                        <textarea value={salary} onChange={(e) => setSalary(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Qualification:</label>
                        <textarea value={qualification} onChange={(e) => setQualification(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Job Responsibilities:</label>
                        <textarea value={jobresponsibility} onChange={(e) => setJobresponsibility(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Required Skills:</label>
                        <textarea value={requiredSkills} onChange={(e) => setRequiredSkills(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Job Type:</label>
                        <textarea value={jobType} onChange={(e) => setJobType(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Location:</label>
                        <textarea value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Description:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Deadline:</label>
                        <textarea value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Link:</label>
                        <textarea value={link} onChange={(e) => setLink(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Date:</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Image:</label>
                        <input type='file' accept='image/*' onChange={handleImageChange} id='file-input' />

                        {img && (
                            <div className="preview-image">
                                <img src={URL.createObjectURL(img)} alt='Blog Post' />
                                <div className="cross-button" onClick={handleCrossButtonClick}>X</div>
                            </div>
                        )}
                    </div>
                    <div className='form-group'>
                        <button id='blog-btn' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Postjob;
