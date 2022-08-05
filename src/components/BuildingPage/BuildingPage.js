import React from 'react';
import Navbar from '../Home/Navbar/Navbar';

const BuildingPage = () => {
    return (
        <div>  
            <Navbar></Navbar>
        <h1 className="text-3xl font-bold text-center py-10 " > This Page <span style={{color:'rgb(11 194 194)'}}> is Building </span></h1>
        </div>
    );
};

export default BuildingPage;