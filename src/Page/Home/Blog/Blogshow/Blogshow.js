import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Blogshow/Blogshow.css';

const Blogshow = () => {
  const [blog, setBlog] = useState()

  const [data, setData] = useState([])
  // console.log(data)
  const numBlogsToShow = 3;
  useEffect(() => {

    fetch('http://localhost:5000/blogs')
  
      .then(res => res.json())
    
      .then(data => {
      console.log(data)
        setData(data)

        // console.log(sortedBlogs.slice(0,3))
        // const bl=sortedBlogs.slice(0,num)
        // setBlog(bl)
        // console.log(blog)
      })

    // setData(sortedBlogs.slice(0,3))
  }, [])
  const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
    <div>
      <h1 className='text-center text-3xl font-bold mt-3'>Update News</h1>
    </div>
       <div className='mt-8  flex flex-wrap justify-evenly'>
      {sortedBlogs.slice(0, numBlogsToShow).map((blog) => (
        <div key={blog.id}>
          <h2>
            <Link to={`/blog/${blog._id}`}>
              <div>
                <div id='blog-card' className="card  card-compact w-96 bg-base-100 shadow-xl mt-5">
                  <figure><img className='h-[150px]' src={blog.img} alt="Shoes" /></figure>
                  <div className="card-body ">
                    <h2 className="card-title  blog-title">{blog.title}</h2>
                    <p id="my-paragraph">{blog.description}<span>...</span></p>
                    <h2>{blog.date}</h2>


                  </div>
                </div>

              </div>
            </Link>
          </h2>

        </div>
      ))}
    </div>
    </>
  );
};

export default Blogshow;