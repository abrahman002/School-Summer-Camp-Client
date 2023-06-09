import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaTrashAlt, FaUserNurse, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    // const [isButtonDisabled, setButtonDisabled] = useState(false);


    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

           

    }
    const handleMakeInstractor = (user) => {
        fetch(`http://localhost:5000/users/instractor/${user._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an instractor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
       
    }
    return (
        <div className='w-full'>
            <h1 className='text-3xl font-bold '>All User : {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instractor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr
                            key={user._id}
                        >
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin' ? 'admin' :
                                <button className='btn btn-ghost bg-orange-500 text-white' onClick={() => handleMakeAdmin(user)}>
                                    <FaUserShield />
                                </button>

                            }</td>
                            <td>
                                {user.role === 'instractor' ? 'instractor' :
                                    <button className='btn btn-ghost bg-red-500 text-white'  onClick={() => handleMakeInstractor(user)}><FaUserNurse /></button>
                                }
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;