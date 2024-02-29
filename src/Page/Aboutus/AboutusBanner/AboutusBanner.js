import React from 'react';
import './AboutusBanner.css'
const AboutusBanner = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-[50vh]  " id='hero' >
                    <div className=" "></div>
                    <div id='hero-content' className="hero-content text-center " >
                        <div className="max-w-md">
                            <h1 id='contact-text' className="mb-5 text-5xl font-bold"></h1>
                            {/* <div className="text-lg breadcrumbs text-center">
                            <ul className='bread'>
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/contact'>Contact Us</Link></li>
                            </ul>
                        </div> */}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutusBanner;