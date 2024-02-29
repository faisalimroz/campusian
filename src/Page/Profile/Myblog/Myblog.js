import React, { useEffect, useState } from 'react';

const Myblog = () => {
    const [userBlogs, setUserBlogs] = useState([]);

    useEffect(() => {
        // Fetch blogs based on user's email
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => {
                // Set the retrieved blogs in state
                setUserBlogs(data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    const handleDelete = async (blogId) => {
        console.log('delete',blogId)
        try {
            // Make a DELETE request to your backend to delete the blog
            const response = await fetch(`http://localhost:5000/blogs/${blogId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // If the deletion was successful, update the state
                setUserBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== blogId));
            } else {
                console.error('Error deleting blog:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <div>
            <h1 className='text-center text-4xl'>All Blogs</h1>
            <ul>
                {Array.isArray(userBlogs) && userBlogs.length > 0 ? (
                    userBlogs.map(blog => (
                        <li key={blog._id} className='flex border-2 p-2 bg-slate-400 rounded-lg '>
                            <p className='w-[600px] text-white text-xl'>Title: {blog.title}</p>
                         
                            <button className='m-2 bg-amber-500 h-[40px] ' onClick={() => handleDelete(blog._id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No blogs found</p>
                )}
            </ul>
        </div>
    );
};

export default Myblog;
