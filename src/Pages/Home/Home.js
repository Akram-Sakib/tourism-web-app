import React from 'react';
import AboutOne from '../../Components/AboutOne/AboutOne';
import Places from '../../Components/Places/Places';
import Slider from '../../Components/Slider/Slider';
import Tours from '../../Components/Tours/Tours';

const Home = () => {
    return (
        <main>
           <Slider/>
           <Places/>
           <AboutOne/>
           <Tours/>
        </main>
    );
};

export default Home;