import React from 'react';

const InstractorCard = ({ instractor }) => {

    const { name, image_url, students } = instractor;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-sm">
                <figure><img className='rounded h-48 w-full' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Student: {students}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstractorCard;