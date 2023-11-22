import React, { useState } from 'react';
import './Counterup.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Counterup = () => {
    const [counteStart, setCounterStart] = useState(false)

    return (
        <>
            <ScrollTrigger onEnter={()=>setCounterStart(true)} onExit={()=>setCounterStart(false)}>
                <div className='counter-container mt-5'>
                    <div className='counter'>
                        <h1 className='value'>
                            {counteStart && <CountUp start={0} end={4000} duration={2} delay={0}></CountUp>}
                        </h1>
                        <h1 className='counter-label'>Members</h1>
                    </div>
                    <div className='counter'>
                        <h1 className='value'>
                            {counteStart && <CountUp start={0} end={230} duration={2} delay={0}></CountUp>}+
                        </h1>
                        <h1 className='counter-label'>Events</h1>
                    </div>
                    <div className='counter'>
                        <h1 className='value'>
                            {counteStart && <CountUp start={0} end={40} duration={2} delay={0}></CountUp>}+
                        </h1>
                        <h1 className='counter-label'>Awards</h1>
                    </div>

                </div>
            </ScrollTrigger>

        </>
    );
};

export default Counterup;