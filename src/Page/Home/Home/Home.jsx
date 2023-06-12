import React from 'react';
import Slider from '../Slider/Slider';
import PopulerClass from '../PopulerClass/PopulerClass';
import Instractor from '../PopularInstrctor/Instractor';
import Counter from '../CounterSection/Counter';
import Blog from '../BlogSection/Blog';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='mt-20 home'>
             <Helmet>
                <title>Islamic School | Home</title>
            </Helmet>
            <Slider></Slider>
            <PopulerClass></PopulerClass>
            <Instractor></Instractor>
         
            <Counter></Counter>
            <Blog></Blog>
        </div>
    );
};

export default Home;