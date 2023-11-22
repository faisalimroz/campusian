import React from 'react';
import './Postscholarship.css';
import { useContext, useState } from 'react';

import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthProvider';
const Postscholarship = () => {
    const [title, setTitle] = useState('');
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [img, setImage] = useState('');
    const [universityname, setUniversityname] = useState('')
    const [scholarshipname, setScholarshipname] = useState('')
    const [amount, setAmount] = useState('')
    const [requirement, setRequirement] = useState('')
    const [duration, setDuration] = useState('')
    const [link, setLink] = useState('')

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
        e.preventDefault();
        const email = user.email;


        try {
            const response = await axios.post('http://localhost:5000/scholarship', {
                title,
                description,
                date,
                img,
                email
            });
            console.log(response.data); // Log the response from the server
            // Optionally, you can reset the form fields or navigate to another page upon successful submission.
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div>
            <div className='bg-gray-200 postscholarship'>
                <h1>Add a Blog Post</h1>
                <form onSubmit={handleSubmit} >
                    <div className='flex' >
                    <div>
                        <div className='mt-4'>
                            <label>Title:</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='mt-4'>
                            <label>Title:</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='mt-4'>
                            <label>Description:</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className='mt-4'>
                            <label>Universityname:</label>
                            <textarea value={universityname} onChange={(e) => setUniversityname(e.target.value)} />
                        </div>
                        <div className='mt-4'>
                            <label>Scholarshipname:</label>
                            <textarea value={scholarshipname} onChange={(e) => setScholarshipname(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div className='mt-4'>
                            <label>Amount:</label>
                            <textarea value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <div className='mt-4'>
                            <label>Requirement:</label>
                            <textarea value={requirement} onChange={(e) => setRequirement(e.target.value)} />
                        </div>
                        <div className='mt-4'>
                            <label>Date:</label>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                      
                    </div>
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

export default Postscholarship;