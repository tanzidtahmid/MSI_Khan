import React from 'react';
import Achievements from '../Achievements/Achievements';
import Articles from '../Articles/Articles';
import GetInTouch from '../GetInTouch/GetInTouch';
import HeroSrction from '../HeroSection/HeroSrction';
import Navbar from '../Navbar/Navbar';
import Videos from '../Videos/Videos';

const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className=' max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <HeroSrction></HeroSrction>
                <Articles></Articles>
                <Achievements></Achievements>
                <Videos></Videos>
                <GetInTouch></GetInTouch>
            </div>
        </div>
    );
};

export default Home;