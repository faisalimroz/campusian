import React, { useEffect, useState }  from 'react';

const Allnews = () => {
    const [userBlogs, setUserBlogs] = useState([]);

    useEffect(() => {
        // Fetch blogs based on user's email
        fetch('http://localhost:5000/newses')
            .then(response => response.json())
            .then(data => {
                // Set the retrieved blogs in state
                setUserBlogs(data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    const handleDelete = async (newsId) => {
        console.log('delete',newsId)
        try {
            // Make a DELETE request to your backend to delete the blog
            const response = await fetch(`http://localhost:5000/newses/${newsId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // If the deletion was successful, update the state
                setUserBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== newsId));
            } else {
                console.error('Error deleting blog:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <div>
            <h1 className='text-center text-4xl'>All News</h1>
            <ul>
                {Array.isArray(userBlogs) && userBlogs.length > 0 ? (
                    userBlogs.map(blog => (
                        <li key={blog._id} className='flex border-2 p-2 bg-slate-400 rounded-lg '>
                            <p className='w-[600px] text-white text-xl'>Title: {blog.title}</p>
                         
                            <button className='m-2 bg-amber-500' onClick={() => handleDelete(blog._id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No blogs found</p>
                )}
            </ul>
        </div>
    );
};

export default Allnews;