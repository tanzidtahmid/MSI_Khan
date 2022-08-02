import React from 'react';
import { useNavigate } from 'react-router-dom';
import article1 from '../../../Images/article1.jpg';
import article2 from '../../../Images/Article2.jpg';
// import article3 from '../../../Images/article3.jpg'

const Articles = () => {
    const navigate = useNavigate()
    const handleReadMore = () => {
        navigate('/full_article')
    }
    return (
        <div>
            <h1 className="text-3xl font-bold my-32 "> Some Of <span style={{ color: 'rgb(11 194 194)' }}> My Articles </span></h1>

            {/* <div className='grid grid-cols-3 gap-3 justify-items-center align-middle my-10'> */}
            <div className="articleCard grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 p-4  " >
                <div> <img className='rounded-xl' src={article1} alt="" /> </div>
                <div className='bg-[#18264a] rounded-xl  md:-ml-12 md:flex flex-col justify-center md:px-4 md:h-72 md:mt-5 flex flex-col justify-center py-5 px-2 h-80 -mt-5 '>
                    <h2 className='text-2xl font-bold py-3 '>গণতন্ত্রের সংলাপ at RTV</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, necessitatibus fugiat! Possimus ullam iure quam error perspiciatis quaerat porro expedita quo, rem ipsam ab nam dolor corporis, blanditiis, modi voluptates. Velit, excepturi?</p>
                    <div>
                        <button onClick={() => handleReadMore()} className=' px-2 py-1 mt-2 rounded-md md:mt-5 md:px-3 md:py-2'>  Read More</button>
                    </div>

                </div>
            </div>
            <div className="articleCard grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 p-4  " >
                <div> <img className='rounded-xl' src={article1} alt="" /> </div>
                <div className='bg-[#18264a] rounded-xl  md:-ml-12 md:flex flex-col justify-center md:px-4 md:h-72 md:mt-5 flex flex-col justify-center py-5 px-2 h-80 -mt-5 '>
                    <h2 className='text-2xl font-bold py-3 '>গণতন্ত্রের সংলাপ at RTV</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, necessitatibus fugiat! Possimus ullam iure quam error perspiciatis quaerat porro expedita quo, rem ipsam ab nam dolor corporis, blanditiis, modi voluptates. Velit, excepturi?</p>
                    <div>
                        <button onClick={() => handleReadMore()} className=' px-2 py-1 mt-2 rounded-md md:mt-5 md:px-3 md:py-2'>  Read More</button>
                    </div>

                </div>
            </div>
            <div className="articleCard grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 p-4  " >
                <div> <img className='rounded-xl' src={article1} alt="" /> </div>
                <div className='bg-[#18264a] rounded-xl  md:-ml-12 md:flex flex-col justify-center md:px-4 md:h-72 md:mt-5 flex flex-col justify-center py-5 px-2 h-80 -mt-5 '>
                    <h2 className='text-2xl font-bold py-3 '>গণতন্ত্রের সংলাপ at RTV</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, necessitatibus fugiat! Possimus ullam iure quam error perspiciatis quaerat porro expedita quo, rem ipsam ab nam dolor corporis, blanditiis, modi voluptates. Velit, excepturi?</p>
                    <div>
                        <button onClick={() => handleReadMore()} className=' px-2 py-1 mt-2 rounded-md md:mt-5 md:px-3 md:py-2'>  Read More</button>
                    </div>

                </div>
            </div>
            <div className='text-center'>
                <button className=' px-3 py-2 mt-5 rounded-md'>More Articles</button>
            </div>
        </div>
    );
};

export default Articles;