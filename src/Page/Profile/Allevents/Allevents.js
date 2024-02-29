import React, { useEffect, useState } from 'react';

const Allevents = () => {
    const [userBlogs, setUserBlogs] = useState([]);

    useEffect(() => {
        // Fetch blogs based on user's email
        fetch('http://localhost:5000/events')
            .then(response => response.json())
            .then(data => {
                // Set the retrieved blogs in state
                setUserBlogs(data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    const handleDelete = async (eventId) => {
        console.log('delete',eventId)
        try {
            // Make a DELETE request to your backend to delete the blog
            const response = await fetch(`http://localhost:5000/events/${eventId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // If the deletion was successful, update the state
                setUserBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== eventId));
            } else {
                console.error('Error deleting blog:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <div>
            <h1 className='text-center text-4xl'>All Events</h1>
            <ul>            
                {Array.isArray(userBlogs) && userBlogs.length > 0 ? (
                    userBlogs.map(blog => (
                        <li key={blog._id} className='flex border-2 p-2 bg-slate-400 rounded-lg'>
                            <p className='w-[600px] h-auto text-white text-xl '>Tittle: {blog.title}</p>
                            
                            <button className='m-2 bg-amber-500' onClick={() => handleDelete(blog._id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No Event found</p>
                )}
            </ul>
        </div>
    );
};

export default Allevents;