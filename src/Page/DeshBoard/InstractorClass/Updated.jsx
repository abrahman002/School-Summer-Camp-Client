import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import UseInstractorClass from '../../../hook/useInstractorClass/UseInstractorClass';

const Updated = () => {
    const {user}=useContext(AuthContext)
   const [cart]=UseInstractorClass();
   console.log(cart)

 const {_id,className,classImage,classPrice,classSeats}=cart;

   const handleUpdate=e=>{

   }
    return (
       <div className='w-full'>
            <div className='mt-10 mb-10'>
                <h1 className='text-center text-3xl  mb-10'>Update CLass</h1>
                <form  onSubmit={handleUpdate}>
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
                            <input type="text" name='image' placeholder='Class Image'  className="input input-bordered" />
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
                            <input type="text" name='seats' defaultValue={classSeats}  placeholder="Available seats" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price'  placeholder="Price" defaultValue={classPrice} className="input input-bordered" />
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary btn-block" value="Update Class" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Updated;