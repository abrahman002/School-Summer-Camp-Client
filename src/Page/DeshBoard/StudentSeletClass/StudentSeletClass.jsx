import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StudentSeletClass = () => {
    const [seletClass, setSeletClass] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addclass')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSeletClass(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold'>My selet class</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Class Price</th>
                                <th>Delete</th>
                                <th>Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {seletClass.map((card, index) => <tr key={card._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={card.classImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {card.className}
                                </td>
                                <td>{card.classPrice}</td>
                                <th>
                                    <button className="btn btn-warning btn-sm">Delete</button>
                                </th>
                                <th>
                                    <Link to='/deshboard/payment'><button className="btn btn-info btn-sm">Pay</button></Link>
                                </th>
                            </tr>)}

                        </tbody>

                    </table>
                </div>


            </div>
        </div>
    );
};

export default StudentSeletClass;