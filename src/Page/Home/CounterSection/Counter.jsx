import React from 'react';
import './counter.css';
import CountUp, { useCountUp } from 'react-countup';
import { Fade } from 'react-awesome-reveal';


const Counter = () => {
    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });
    return (
        <Fade>
        <div className='counter flex justify-evenly items-center '>
            <div className='md:text-3xl font-bold text-sm '>
            <h1>Free Student</h1>
            <CountUp 
             start={0}
            end={8899}
             duration={1}
             enableScrollSpy
            />
            </div>
            <div className='md:text-3xl font-bold  text-sm'>
            <h1>Online Student</h1>
            <CountUp 
             start={0}
            end={5599}
             duration={1}
             delay={5}
             enableScrollSpy
            />
            </div>
            <div className='md:text-3xl font-bold text-xl'>
            <h1>Offline Student</h1>
            <CountUp 
             start={0}
            end={9999}
             duration={1}
             delay={5}
             enableScrollSpy
            />
            </div>
        </div>
        </Fade>
    );
};

export default Counter;