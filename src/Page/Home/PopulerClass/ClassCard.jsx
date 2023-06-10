import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import UseCart from '../../../hook/useCart/UseCart';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ClassCard = ({ classCrad }) => {
    const { className,classImage,classPrice,classSeats,enrolled,_id } = classCrad;
    const { user } = useContext(AuthContext);
    const [, refetch] = UseCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddClass = classCrad => {
        console.log(classCrad)
        if (user && user.email) {
            const classItem = { classId: _id, className, classImage,  email: user.email }
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
    }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow mt-5">
                <figure><img className='rounded w-full h-40' src={classImage} alt="Quran Memorization" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {className}</h2>
                   
                    <h2 className="card-title">Student-Enrooled: {enrolled}</h2>
                    <p>Price: {classPrice}</p>
                    <p> Available Seats: {classSeats}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={()=>handleAddClass(classCrad)}>Add class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;