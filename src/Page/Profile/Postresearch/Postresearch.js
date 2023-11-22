import React from 'react';
import './Postresearch.css';
import { useContext, useState } from 'react';

import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthProvider';
const Postresearch = () => {
    const [title, setTitle] = useState('');
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    const [link, setLink] = useState('');
    const [date, setDate] = useState('');
    const [img, setImage] = useState('');

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
            const response = await axios.post('http://localhost:5000/research', {
                title,
                link,
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
            <div className='bg-gray-200 postblog'>
                <h1>Add a Blog Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mt-4'>
                        <label>Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div  className='mt-4'>
                        <label>Link:</label>
                        <textarea value={link} onChange={(e) => setLink(e.target.value)} />
                    </div>
                    <div  className='mt-4'>
                        <label>Date:</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className='mt-4'>
                        <label>Image:</label>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        {img && <img src={img} alt="Blog Post" style={{ maxWidth: '400px' }} />}
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Postresearch;