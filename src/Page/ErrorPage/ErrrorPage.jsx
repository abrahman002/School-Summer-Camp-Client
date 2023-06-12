import React from 'react';
import { Link } from 'react-router-dom';

const ErrrorPage = () => {
    return (
        <div className='text-center'>
            <div className='flex justify-center'>
                <img style={{ height: '500px' }} src="https://i.ibb.co/hR50GSN/5155999-2704891.jpg" alt="" />

            </div>
            <Link><button className='btn btn-info'>back Home</button></Link>
        </div>
    );
};

export default ErrrorPage;