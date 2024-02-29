import React from 'react';
import './Aboutus.css';
import AboutusBanner from './AboutusBanner/AboutusBanner';

const Aboutus = () => {
    return (
        <>
            <div>
                <AboutusBanner></AboutusBanner>
            </div>
            <div className='mb-5'>
            <div className="grid-container bg-amber-200">
                <div className="cardd p-6">
                    <div className='image-container'>
                        <img id='img' src="https://i.ibb.co/1qSQ8XW/image.png" alt="Card Image" />
                    </div>

                    <div className="cardd-content mt-3">
                        <h2 className='text-2xl'>History</h2>
                        <p className='text-md black'>Daffodil International University (DIU) is recognized in independent government assessments as one of top graded universities in Bangladesh. The university has been founded by Daffodil Group with the approval of the Ministry of Education under the Private University Act of 1992 and its amendment in 1998 and Daffodil International University came into being on 24th January 2002, the University today combines impressive modern facilities and a dynamic approach to teaching and research with its proud heritage of service and achievement.</p>
                    </div>
                </div>
            </div>
            <div className="grid-container bg-amber-200">
                <div className="cardd mt-2 p-6">


                    <div className="cardd-content mt-2 ml-5 mb-[50px]">
                        <h2 className='text-2xl'>Convocation</h2>
                        <p className='text-md black'>Daffodil International University (DIU) held its 10th convocation with a colourful event on February 9.

                            The convocation was organized at the Shawdhinata Sommelon Kendro of the university at Daffodil Smart City, Birulia Savar, Dhaka.

                            Delegated by Md Abdul Hamid, president of Bangladesh and chancellor of Daffodil International University, Dr Dipu Moni MP, minister, Ministry of Education, presided over the convocation ceremony and conferred the degrees, said a press release.

                            Professor Atul Khosla, founder and vice chancellor of Shoolini University, Himachal Pradesh, India attended the convocation as the convocation speaker. </p>
                    </div>
                    <div className='image-container mb-3'>
                        <img id='imgg' src="https://i.ibb.co/zZL2hst/image.png" alt="Card Image" />
                    </div>
                </div>
            </div>
            </div>
         


        </>
    );
};

export default Aboutus;