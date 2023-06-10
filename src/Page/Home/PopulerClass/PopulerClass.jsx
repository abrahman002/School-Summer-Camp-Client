import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';

const PopulerClass = () => {
    const [popular,setPopular]=useState([]);
    
    
    useEffect(()=>{
        fetch('http://localhost:5000/intractoraddclass')
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            const popularClass=data.filter(popularClass=>popularClass.category === 'popular');
            setPopular(popularClass)
        })
    },[])
    return (
        <div>
           <h1 className='text-3xl text-center font-semibold container mt-10 '>Popular Class Section</h1>
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
    );
};

export default PopulerClass;