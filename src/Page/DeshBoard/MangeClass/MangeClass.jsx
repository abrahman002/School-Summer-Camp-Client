import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ManageClass = () => {
    const [instructorClasses, setInstructorClasses] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/intractoraddclass')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setInstructorClasses(data);
            });
    }, []);

    const handleApprove = (classId) => {
        fetch(`http://localhost:5000/classes/${classId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'approved' }),
        })
            .then((res) => res.json())
            .then((data) => {
                setInstructorClasses((prevClasses) =>
                    prevClasses.map((cls) =>
                        cls._id === classId ? { ...cls, status: 'approved' } : cls
                    )
                );
            })
            .catch((error) => {
                console.error('Error approving class:', error);
            });
    };

    const handleDeny = (classId) => {
        fetch(`http://localhost:5000/classes/${classId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'denied' }),
        })
            .then((res) => res.json())
            .then((data) => {
                // Update the class status locally
                setInstructorClasses((prevClasses) =>
                    prevClasses.map((cls) =>
                        cls._id === classId ? { ...cls, status: 'denied' } : cls
                    )
                );
            })
            .catch((error) => {
                console.error('Error denying class:', error);
            });
    };

    return (
        <div>
            <div>
                <h1 className='text-3xl text-center font-semibold mb-5'>My All Class</h1>
                <div className='overflow-x-auto'>
                    <table className='table table-zebra'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {instructorClasses.map((instrctor, index) => (
                                <tr key={instrctor._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className='avatar'>
                                            <div className='mask mask-squircle w-12 h-12'>
                                                <img src={instrctor.classImage} alt='Avatar' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{instrctor.className}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{instrctor.classSeats}</td>
                                    <td>{instrctor.classPrice}</td>
                                    <td>{instrctor.status}</td>
                                    <td>
                                        {instrctor.status === 'pending' && (
                                            <>
                                                <button className='btn btn-success mb-2'
                                                    onClick={() => handleApprove(instrctor._id)}
                                                    disabled={instrctor.status !== 'pending'}
                                                >
                                                    Approve 
                                                </button> <br />
                                                <button className='btn btn-warning'
                                                    onClick={() => handleDeny(instrctor._id)}
                                                    disabled={instrctor.status !== 'pending'}
                                                >
                                                    Deny
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClass;

