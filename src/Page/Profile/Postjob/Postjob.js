// Postjob.js
import React, { useContext, useState } from 'react';
import './Postjob.css'; // Import the updated CSS
import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthProvider';

const Postjob = () => {
    const [title, setTitle] = useState('');
    const { user } = useContext(AuthContext);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [img, setImage] = useState('');
    const [salary, setSalary] = useState('');
    const [qualification, setQualification] = useState('');
    const [jobResponsibilities, setJobResponsibilities] = useState('');
    const [requiredSkills, setRequiredSkills] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [link, setLink] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = user.email;

        try {
            const response = await axios.post('http://localhost:5000/career', {
                title,
                description,
                date,
                img,
                salary,
                qualification,
                jobResponsibilities,
                requiredSkills,
                jobType,
                location,
                link,
                deadline,
                email,
            });
            console.log(response.data); // Log the response from the server
            // Optionally, you can reset the form fields or navigate to another page upon successful submission.
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <div id='postjob' className='bg-gray-200 postjob'>
                <h1>Add a Job Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Job Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
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
                        <textarea value={jobResponsibilities} onChange={(e) => setJobResponsibilities(e.target.value)} />
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
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        {img && <img src={img} alt="Job Post" className="preview-image" />}
                    </div>
                    <div className='form-group'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Postjob;
