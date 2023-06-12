import React, { useEffect, useState } from 'react';

const StudentEnrollClass = () => {
    const [historys, setHistorys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHistorys(data)
            })
    }, [])
    return (
        <div>
            <h1>Enroll Class</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Date</th>
                                <th>Email</th>
                                <th>Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            {historys.map((card, index) => <tr key={card._id}>
                                <th>
                                    {index + 1}
                                </th>

                                <td>
                                    {card.date}
                                </td>
                                <td>{card.email}</td>
                                <td>{card.price}</td>

                            </tr>)}


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentEnrollClass;