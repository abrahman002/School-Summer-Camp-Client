import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ManageClass = () => {
    const [instructorClasses, setInstructorClasses] = useState([]);
    const { user } = useContext(AuthContext);
    const [feedbackText, setFeedbackText] = useState('');

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


    const handleFeedbackSubmit = (classId, feedbackText) => {
        fetch(`http://localhost:5000/classes/${classId}/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedbackText }),
        })
            .then((res) => res.json())
            .then((data) => {
                // Handle the response or perform any necessary actions
                console.log('Feedback submitted successfully');
            })
            .catch((error) => {
                console.error('Error submitting feedback:', error);
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
                                    <td>
                                        <label htmlFor={`modal_${instrctor._id}`} className="btn btn-info w-20">Feedback</label>
                                        <input type="checkbox" id={`modal_${instrctor._id}`} className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Feedback for {instrctor.className}</h3>
                                                <textarea
                                                    className="w-full px-4 py-2 border rounded"
                                                    placeholder="Enter feedback"
                                                    rows={4}
                                                    onChange={(e) => setFeedbackText(e.target.value)}
                                                ></textarea>
                                                <div className="modal-action">
                                                    <button
                                                        className="btn btn-success"
                                                        onClick={() => handleFeedbackSubmit(instrctor._id, feedbackText)}
                                                    >
                                                        Submit
                                                    </button>
                                                    <label htmlFor={`modal_${instrctor._id}`} className="btn">Close</label>
                                                </div>
                                            </div>
                                        </div>
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
