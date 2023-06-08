import React from 'react';
import Slider from '../Slider/Slider';
import PopulerClass from '../PopulerClass/PopulerClass';
import Instractor from '../PopularInstrctor/Instractor';
import Counter from '../CounterSection/Counter';

const Home = () => {
    return (
        <div className='mt-20'>
            <Slider></Slider>
            <PopulerClass></PopulerClass>
            <Instractor></Instractor>
            <Counter></Counter>
        </div>
    );
};

export default Home;