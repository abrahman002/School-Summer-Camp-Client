import React, { useEffect, useState } from 'react';

const PopulerClass = () => {
    const [popular,setPopular]=useState([]);
    
    
    useEffect(()=>{
        fetch('http://localhost:5000/popularclass')
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            setPopular(data)
        })
    },[])
    return (
        <div>
            {popular.length}
        </div>
    );
};

export default PopulerClass;