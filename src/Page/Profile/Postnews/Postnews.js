import React from 'react';
import './Postnews.css';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthProvider';
const img_hosting_token = '6fb68cbd4232c1e20fa193c68ca16ae7';
const Postnews = () => {
    const [title, setTitle] = useState('');
    const { user } = useContext(AuthContext)
    const postedby=user.displayName;
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [img, setImage] = useState('');

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
                const response = await axios.post('http://localhost:5000/news', {
                title,
                description,
                date,
                img: imgResponseData.data.display_url,
                postedby,
                email
            });
            console.log(response.data);
            setTitle('');
            setDescription('');
            setDate('');
           
            setImage(null);
            Swal.fire({
                icon: 'success',
                title: 'News Published',
                text: 'Your News post has been published successfully!',
            });

           
            } else {
                console.error('Error uploading image:', imgResponseData.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div>
            <div className=' bg-yellow-300 postblog ' id='news' >
                <h1>Add a News</h1>
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
                    <div>
                        <button id='blog-btn' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Postnews;