import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Class = () => {
    const [classCard, setClassCard] = useState([]);
    const { user } = useContext(AuthContext)
    const navigate=useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/intractoraddclass')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClassCard(data)
            })
    }, [])

    const handleSelectClass = () => {
        if (!user) {
            Swal.fire({
                title: "Please log in",
                text: "Please log in to select a class.",
                icon: "error",
                confirmButtonText: "OK"
            });
            navigate('/login');
            return;
        }
    }
    return (
        <div className='mt-36'>
            <h1 className='text-3xl text-center font-semibold mb-5'>Class</h1>
            <div className='grid grid-cols-3 gap-5 container mx-auto mb-20'>
                {
                    classCard.map(card =>
                        <div className="card card-compact w-96 bg-base-100 shadow" key={card._id}>
                            <figure><img src={card.classImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Class Name: {card?.className}</h2>
                                <p>Instractor Name: {user?.name}</p>
                                <p>Available Seats: {card.classSeats}</p>
                                <p>Price: {card.classPrice}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-info" onClick={handleSelectClass}>
                                        {user ? 'Select Class' : 'Log in to Select Class'}
                                    </button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Class;