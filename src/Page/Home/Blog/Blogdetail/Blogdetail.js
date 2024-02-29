import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Blogdetail/Blogdetail.css';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { AuthContext } from '../../../../contexts/AuthProvider';

const Blogdetail = ({ blog }) => {
    const {img, title, description, _id, date,email,postedby } = blog;
    console.log(img)
    
    const { user } = useContext(AuthContext)

    // const isAdmin = user && user.role === 'admin';
    const [isAdmin, setIsAdmin] = useState(false);
  
    useEffect(() => {
      const fetchUserRole = async () => {
        try {
          // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to fetch the user role from MongoDB
          const response = await fetch(`http://localhost:5000/users/${user.email}`);
          const data = await response.json();
  
          if (data && data.role === 'admin') {
            setIsAdmin(true);
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      };
  
      // Fetch the user's role when the component mounts
      if (user && user.uid) {
        fetchUserRole();
      }
    }, [user]);
    console.log('user', user);
    console.log('issAdmin', isAdmin);
    
    return (
        
            <Link to={`/blog/${_id}`}>

                <div>
                    <div id='blog-card' className="card  card-compact w-96 bg-base-100 shadow-xl mt-5">
                        <figure><img id='blog-img' src={img} alt={title} /></figure>
                        <div className="card-body ">
                            <h2 className="card-title  blog-title">{title}</h2>
                            <p id="my-paragraph">{description}<span>...</span></p>
                            <h2 className='text-lg' id="my-paragraph">Author: {postedby}</h2>
                            <h2>{date}</h2>


                        </div>
                    </div>

                </div>
            </Link>

       

    );
};

export default Blogdetail;