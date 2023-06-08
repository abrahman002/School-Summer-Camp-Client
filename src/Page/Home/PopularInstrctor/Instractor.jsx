import React, { useEffect, useState } from 'react';
import InstractorCard from './InstractorCard';

const Instractor = () => {
    const [instractors, setInstractor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInstractor(data);
            })
    }, [])
    return (
        <div>
            
            <h1 className='text-2xl text-center font-semibold mt-10'>Popular Instractor Section</h1> 
         
            
                     
         <div className='grid md:grid-cols-3 container mx-auto gap-10 mt-10 mb-10'>
         {
               instractors.map(instractor=><InstractorCard
                  key={instractor._id}
                  instractor={instractor}
               ></InstractorCard>)
            }
         </div>
        </div>
    );
};

export default Instractor;