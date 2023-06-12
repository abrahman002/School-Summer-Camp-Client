import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';
import { Fade } from 'react-awesome-reveal';

const PopulerClass = () => {
    const [popular,setPopular]=useState([]);
    
    
    useEffect(()=>{
        fetch('https://islamic-school-server.vercel.app/intractoraddclass')
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            const popularClass=data.filter(popularClass=>popularClass.category === 'popular');
            setPopular(popularClass)
        })
    },[])
    return (
      <Fade>
        <div>
           <h1 className='text-3xl text-center font-semibold container mt-10 popular-class'>Popular Class Section</h1>
          <div className='grid md:grid-cols-3 container mx-auto md:p-10 p-5'>
          {
            popular.map(classCrad=><ClassCard
              key={classCrad._id}
              classCrad={classCrad}
            >
            </ClassCard>)
           }
          </div>
        </div>
        </Fade>
    );
};

export default PopulerClass;