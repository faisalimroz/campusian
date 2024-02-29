import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Blogdetails/Blogdetails.css';
import Socialmedia from '../../../Socialmedia/Socialmedia';

const Blogdetails = () => {
  const {bid}=useParams();
  console.log(bid)
  const [blogPost, setBlogPost] = useState(null);

  // ...

useEffect(() => {
  console.log('idd',bid)
  fetch(`http://localhost:5000/blog/${bid}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch blog details');
      }
      return response.json();
    })
    .then(data => {
      console.log('big',data)
      setBlogPost(data);
    })
    .catch(error => {
      console.log(error);
      // Handle the error, such as showing an error message
    });
}, [bid]);

// ...


  return (
    <div>
      {blogPost && blogPost.title ? (
        <div id='' className="blog  mx-auto ">
          <div className="blog-div">
            <figure>
              <img id='blog-img' className='blog-img' src={blogPost.img} alt="Shoes" />
            </figure>
            <h2 className="blog-titles font-bold">{blogPost.title}</h2>
            <p className='blog-p '>{blogPost.description}</p>
          </div>
          <div className='mt-2'>
            <Socialmedia></Socialmedia>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      
    </div>
  );
};

export default Blogdetails;
