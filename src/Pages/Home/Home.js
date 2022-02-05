import React from 'react';
import AboutOne from '../../Components/AboutOne/AboutOne';
import Brands from '../../Components/Brands/Brands';
import Gallery from '../../Components/Gallery/Gallery';
import News from '../../Components/News/News';
import Places from '../../Components/Places/Places';
import Slider from '../../Components/Slider/Slider';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Tours from '../../Components/Tours/Tours';
import VideoSection from '../../Components/VideoSection/VideoSection';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <main>
           <Slider/>
           <Places/>
           <AboutOne/>
           <Tours/>
           <VideoSection/>
           <Brands/>
           <Testimonial/>
           <Gallery/>
           <WhyChooseUs/>
           <News/>
        </main>
    );
};

export default Home;