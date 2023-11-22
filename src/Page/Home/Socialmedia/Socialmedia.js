import React from 'react';
import './Socialmedia.css';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { LinkedinShareButton, LinkedinIcon } from 'react-share';
const Socialmedia = () => {
    return (
        <div>
            <div className='mb-9 flex'>
                <div className='mr-1 '>
                    <FacebookShareButton
                        url={'http://localhost:3002/blog/2'}
                        quote={'Dummy text!'}

                    >
                        <div className='flex media-button  ' id='fb'>
                            <FacebookIcon size={32} round className='ml-1 media-color' />
                            <p className='media-text mb-[7px] mr-1'>share</p>
                        </div>


                    </FacebookShareButton>
                </div>
                <div className='mr-1 ml-1'>
                    <TwitterShareButton
                        url={'http://localhost:3002/blog/2'}
                        quote={'Dummy text!'}
                        hashtag="#muo"
                    >
                        <div className='flex media-button  ' id='twitter'>
                            <TwitterIcon size={32} round className='ml-1 media-color' />
                            <p className='media-text mb-[7px] mr-1'>share</p>
                        </div>

                    </TwitterShareButton>
                </div>
                <div className='mr-1 ml-1'>
                    <LinkedinShareButton
                        url={'http://localhost:3002/blog/2'}
                        quote={'Dummy text!'}
                        hashtag="#muo"
                    >
                        <div className='flex media-button  ' id='linkedin'>
                            <LinkedinIcon size={32} round className='ml-1 media-color' />
                            <p className='media-text mb-[7px] mr-1'>share</p>
                        </div>

                    </LinkedinShareButton>
                </div>


            </div>
        </div>
    );
};

export default Socialmedia;