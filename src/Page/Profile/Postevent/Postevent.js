import React from 'react';
import './Postevent.css';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthProvider';
const Postevent = () => {
    const [title, setTitle] = useState('');
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [img, setImage] = useState('');
    const [location,setLocation]=useState('');
    const [time,setTime]=useState('')
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
            const response = await axios.post('http://localhost:5000/event', {
                title,
                description,
                date,
                img,
                time,
                location,
                email
            });
            console.log(response.data);
            
            setTitle('');
            setDescription('');
            setLocation('');
            setTime('');
            setDate('');
            setImage({});
            Swal.fire({
                icon: 'success',
                title: 'Event Published',
                text: 'Your Event post has been published successfully!',
            });

             // Log the response from the server
            // Optionally, you can reset the form fields or navigate to another page upon successful submission.
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div>
            <div className=' bg-yellow-300 postblog' id='event'>
                <h1>Add an Event Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mt-4'>
                        <label>Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div  className='mt-4'>
                        <label>Description:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div  className='mt-4'>
                        <label>Location:</label>
                        <textarea value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div  className='mt-4'>
                        <label>Time:</label>
                        <textarea value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>
                    <div  className='mt-4'>
                        <label>Date:</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className='mt-4'>
                        <label>Image:</label>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        {img && <img src={img} alt="" style={{ maxWidth: '400px' }} />}
                    </div>
                    <div>
                        <button id='blog-btn' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Postevent;