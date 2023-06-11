import React from 'react';
import { Fade } from "react-awesome-reveal";

const Blog = () => {
    return (
        <>
            <Fade cascade damping={0.1}>
                <h2 className='text-3xl text-center font-semibold mt-5'>Our Recent Blog Post</h2>
            </Fade>
            <Fade>
                <div className='grid md:grid-cols-3 gap-5 mt-10 mb-10 container mx-auto'>

                    <div className="card card-compact w-96 bg-base-100 shadow-sm">
                        <figure><img className='rounded h-48 w-full' src='https://i.ibb.co/fGLTV0c/4771089-29039.jpg' alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">The Guiding Light</h2>
                            <p>A blog dedicated to exploring and spreading the wisdom, teachings, and principles of Islam. Discover insightful articles, reflections, and practical guidance on leading a fulfilling Islamic lifestyle.</p>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-sm">
                        <figure><img className='rounded h-48 w-full' src='https://i.ibb.co/vZvRnpV/4805865-29513.jpg' alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">Quranic Insights</h2>
                            <p>Dive deep into the Quran and uncover profound insights, lessons, and interpretations from the holy book of Islam. Explore the beauty, wisdom, and spiritual guidance contained within its verses, with articles, reflections, and resources to enhance your understanding.</p>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-sm">
                        <figure><img className='rounded h-48 w-full' src='https://i.ibb.co/BnNr5L3/download-1.jpg' alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">Islamic Lifestyle Chronicles</h2>
                            <p>Embark on a journey of embracing an Islamic lifestyle through this blog. Explore topics such as faith, spirituality, family, relationships, health, and personal development, all within the context of Islamic principles and teachings.</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default Blog;