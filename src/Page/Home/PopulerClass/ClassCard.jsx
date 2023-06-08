import React from 'react';

const ClassCard = ({classCrad}) => {
    const {class_name,image_url,students_enrolled,class_info}=classCrad;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow mt-5">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {class_name}</h2>
                    <p>{class_info}</p>
                    <h2 className="card-title">Student-Enrooled: {students_enrolled}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">ADD favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;