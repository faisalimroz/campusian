import React from 'react';
import './Postscholarship.css';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthProvider';
const img_hosting_token = '6fb68cbd4232c1e20fa193c68ca16ae7';

const Postscholarship = () => {
    const [title, setTitle] = useState('');
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [img, setImage] = useState(null);
    const [universityname, setUniversityname] = useState('')
    const [scholarshipname, setScholarshipname] = useState('')
    const [amount, setAmount] = useState('')
    const [requirement, setRequirement] = useState('')
    const [duration, setDuration] = useState('')
    const [link, setLink] = useState('')

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImage(file); // Keep the file object for preview
        }
      };
      
      const handleCrossButtonClick = () => {
        // Clear the input type file element
        const fileInput = document.querySelector('#file-input');
        fileInput.value = '';
      
        // Hide the preview image
        const previewImage = document.querySelector('.preview-image');
        previewImage.style.display = 'none';
      
        // Reset the image state
        setImage(null);
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const email = user.email;
        const formData = new FormData();
        formData.append('image', img); // Append the file object
      
        try {
          const imgUploadResponse = await fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
          });
          const imgResponseData = await imgUploadResponse.json();
      
          if (imgResponseData.data) {
            const response = await axios.post('http://localhost:5000/scholarship', {
              title,
              description,
              date,
              img: imgResponseData.data.display_url, // Use the URL from the response
              email,
              amount,
              requirement,
              link,
              universityname

            });
            console.log(response.data); 
            Swal.fire({
              icon: 'success',
              title: 'Scholarship Published',
              text: 'Your Scholarship post has been published successfully!',
          });

            // Log the response from the server
            // Optionally, you can reset the form fields or navigate to another page upon successful submission.
          } else {
            console.error('Error uploading image:', imgResponseData.error);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
    return (
        <div className='mt-[20px]  bg-yellow-300 ' id='scholarship'>

            <div id='postscheduler' className=' bg-yellow-300 postscholarship postschedule ' >
                <h1 className='text-center'>Add a Scholarship Post</h1>
                <form onSubmit={handleSubmit} >


                    <div className='form-group'>
                        <label>Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    {/* <div className='form-group'>
                            <label>Title:</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div> */}
                    <div className='form-group'>
                        <label>Description:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Universityname:</label>
                        <textarea value={universityname} onChange={(e) => setUniversityname(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Scholarshipname:</label>
                        <textarea value={scholarshipname} onChange={(e) => setScholarshipname(e.target.value)} />
                    </div>


                    <div className='form-group'>
                        <label>Amount:</label>
                        <textarea value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Requirement:</label>
                        <textarea value={requirement} onChange={(e) => setRequirement(e.target.value)} />
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
                    <div className='form-group mt-5 mr-4'>
                        <button id='blog-btn' type="submit">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Postscholarship;