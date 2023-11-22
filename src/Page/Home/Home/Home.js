import React from 'react';

import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Blogshow from '../Blog/Blogshow/Blogshow';
import Counterup from '../Counterup/Counterup';
import Responsibility from '../Responsibility/Responsibility';

const Home = () => {
    // const [blog,setBlog]=useState()

    // const [data, setData] = useState([])
    // // console.log(data)
    // const num=3;
    // useEffect(()=>{
        
    //     fetch('blog.json')
    //     .then(res=>res.json())
    //     .then(data=>{

    //         setData(data)
    //         const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    //         console.log(sortedBlogs.slice(0,3))
    //         const bl=sortedBlogs.slice(0,num)
    //         setBlog(bl[0])
    //         console.log(blog)
    //     })
      
    //     // setData(sortedBlogs.slice(0,3))
    // },[])
    // const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
   
    // console.log(sortedBlogs)
    return (
        <div>
            
            <Banner></Banner>
            <Blogshow></Blogshow>
            <Counterup></Counterup>
            <Responsibility></Responsibility>
            
        </div>
    );
};

export default Home;