import React, { useEffect, useState } from 'react';
import './NewsDetails.css';
import {  useParams } from 'react-router-dom';

const NewsDetails = () => {
    const { id } = useParams();
    console.log(id)
    const [newsPost, setNewsPost] = useState();
    useEffect(() => {
        fetch('news.json')
      
            .then(res => res.json())
            .then(data => {
                const post = data.find(post => post.id === id);
                setNewsPost(post);
                console.log(newsPost.title)
            })
    }, [])
    return (
        <div>
            <div id='' className="news  mx-auto ">

                <div className="news-div">
                    <img className='news-img' src="https://i.ibb.co/cLy8Q38/image.png" alt="Shoes" />
                    <h1 className="news-title">Web Developer</h1>
                    <p className='news-p'>If a dog chews shoes whose shoes does he choose? ChatGPT is a natural language processing tool driven by AI technology that allows you to have human-like conversations and much more with the chatbot. The language model can answer questions and assist you with tasks, such as composing emails, essays, and code</p>
                    <h2> Posted by: Faisal </h2>


                </div>
            </div>
        </div>
    );
};

export default NewsDetails;