import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const InstractorClass = () => {
    const [instractorClass, setInstractorClass] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/intractoraddclass')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInstractorClass(data);
            })
    }, [])





    return (
        <div>
            <h1 className='text-3xl text-center font-semibold mb-5'>My All Class</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Total Enrolled Students </th>
                            <th>Status</th>
                            <th>Feedback </th>
                            <th>Update </th>
                        </tr>
                    </thead>
                    <tbody>
                        {instractorClass.map((table, index) => <tr key={table._id}>
                            <th>{index + 1}</th>
                            <td>{table.className}</td>
                            <td>{table.enrolled}</td>
                            <td>{table.status}</td>
                            <td>{table.feedback ? (
                                <Link to={`/feedback/${table._id}`}>
                                    View Feedback
                                </Link>
                            ) : (
                                'No Feedback'
                            )}</td>
                            <td>
                                <Link to={`/deshboard/update/${table._id}`}  ><button className='btn btn-primary '>Update</button></Link>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstractorClass;