import React, { useEffect, useState } from 'react';
import './News.css'
import NewsDetail from '../News/NewsDetail/NewsDetail'
const News = () => {
    const [news,setNews]=useState([])
    
    // setArrr(arrr.sort(0, 6))
    useEffect(()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])
    return (
        <div>
             <div className='mt-8  flex flex-wrap justify-evenly'>
         
         {
            news.map(news=><NewsDetail key={news.id} news={news}></NewsDetail>)
         }
         </div>
        </div>
    );
};

export default News;