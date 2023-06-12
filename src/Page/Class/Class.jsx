import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseCart from '../../hook/useCart/UseCart';
import ClassCard from './ClassCard';

const Class = () => {
    const [classCard, setClassCard] = useState([]);
   

    useEffect(() => {
        fetch('http://localhost:5000/intractoraddclass')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClassCard(data)
            })
    }, [])

   
    return (
        <div className='mt-36'>
            <h1 className='text-3xl text-center font-semibold mb-5'>Class</h1>
            <div className='grid grid-cols-3 gap-5 container mx-auto mb-20'>
                {
                    classCard.map(card =><ClassCard
                      key={card._id}
                      card={card}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Class;