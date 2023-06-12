import React, { useEffect, useState } from 'react';
import InstractorCard from './InstractorCard';
import { Fade } from 'react-awesome-reveal';

const Instractor = () => {
    const [instractors, setInstractor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const popularIntractor=data.filter(instractor=>instractor.category === 'popular');
                setInstractor(popularIntractor);
            })
    }, [])
    return (
        <Fade>
        <div>
            
            <h1 className='text-2xl text-center font-semibold mt-10 popular-tilte'>Popular Instractor Section</h1> 
         
            
                     
         <div className='grid md:grid-cols-3 container mx-auto gap-10 mt-10 mb-10'>
         {
               instractors.map(instractor=><InstractorCard
                  key={instractor._id}
                  instractor={instractor}
               ></InstractorCard>)
            }
         </div>
        </div>
        </Fade>
    );
};

export default Instractor;