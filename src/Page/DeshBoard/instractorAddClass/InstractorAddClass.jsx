import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const InstractorAddClass = () => {
    const { user } = useContext(AuthContext);

    const handleAddClasss=(event)=>{
        event.preventDefault()

        const form=event.target;
        const className=form.className.value;
        const classImage=form.image.value;
        const classSeats=form.seats.value;
        const classPrice=form.price.value;
        const status='pending'
        const UpdateClass={
            className,classImage,classSeats,classPrice,status
        }

        console.log(UpdateClass)

        fetch('http://localhost:5000/intractoraddclass',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(UpdateClass)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class added.',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

    }
    return (
        <div className='w-full'>
            <div className='mt-10 mb-10'>
                <h1 className='text-center text-3xl  mb-10'>Add CLass</h1>
                <form  onSubmit={handleAddClasss}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Class Name</span>
                            </label>
                            <input type="text" name='className'  placeholder="Class Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="text" name='image' placeholder='Class Image' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instractor Name</span>
                            </label>
                            <input type="text" placeholder="Instractor Name" defaultValue={user.name} readOnly  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instractor Email</span>
                            </label>
                            <input type="text" placeholder="Instractor Email" defaultValue={user.email} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available seats</span>
                            </label>
                            <input type="text" name='seats'  placeholder="Available seats" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price'  placeholder="Price" className="input input-bordered" />
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary btn-block" value="Add Class" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InstractorAddClass;