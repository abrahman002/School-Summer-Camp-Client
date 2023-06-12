import React, { useContext } from 'react';
import UseCart from '../../hook/useCart/UseCart';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ClassCard = ({ card }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [, refetch] = UseCart();
    const { className,classImage,classPrice,classSeats,enrolled,_id } = card;


    const handleSelectClass = (card) => {
        console.log(card.classPrice)
        if (user && user.email) {
            const classItem = { card: _id, className, classImage,classPrice,  email: user.email }
            console.log(classItem)
            fetch('http://localhost:5000/addclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to add the Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }


        // if (!user) {
        //     Swal.fire({
        //         title: "Please log in",
        //         text: "Please log in to select a class.",
        //         icon: "error",
        //         confirmButtonText: "OK"
        //     });
        //     navigate('/login');
        //     return;
        // }
    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow" >
                <figure><img src={card.classImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {card?.className}</h2>
                    <p>Instractor Name: {user?.name}</p>
                    <p>Available Seats: {card.classSeats}</p>
                    <p>Price: {card.classPrice}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-info" onClick={() => handleSelectClass(card)}>
                            {user ? 'Select Class' : 'Log in to Select Class'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;