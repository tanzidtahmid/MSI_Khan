import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import './Video.css'

const Videos = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold my-32 "> Some Of <span style={{ color: 'rgb(11 194 194)' }}> My Videos </span></h1>

            <div className="articleCard grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 p-4  " >
                <div>  <iframe width="560" height="315" className='rounded-xl videos' src="https://www.youtube.com/embed/aS-s26Z8cjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='bg-[#18264a] rounded-xl  md:-ml-12 md:flex flex-col justify-center md:px-4 md:pb-10 md:h-72 sm:h-96 md:mt-3 flex flex-col justify-center py-5 px-2 h-80 -mt-5  videoDetails'>
                    <h2 className='text-2xl md:text-xl sm:text-xs font-bold py-3 '>বঙ্গবন্ধুর মননে পিছিয়ে পড়া মানুষ | Bangabandhu Sheikh Mujibur Rahman । MSI KHAN | MUJIB10</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, necessitatibus fugiat! Possimus ullam iure quam error perspiciatis quaerat porro expedita quo, rem ipsam ab nam dolor corporis, blanditiis, modi voluptates. Velit, excepturi?</p>
                    <div>
                        <button className=' px-2 py-1 mt-2 rounded-md md:mt-2 md:px-2 md:py-1'>  Read More</button>
                    </div>

                </div>
            </div>
            <div className="articleCard grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 p-4  " >
                <div>  <iframe width="560" height="315" className='rounded-xl videos' src="https://www.youtube.com/embed/PDF2QEdQkU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='bg-[#18264a] rounded-xl  md:-ml-12 md:flex flex-col justify-center md:px-4 md:pb-10 md:h-72 sm:h-96 md:mt-3 flex flex-col justify-center py-5 px-2 h-80 -mt-5  videoDetails'>
                    <h2 className='text-2xl md:text-xl sm:text-xs font-bold py-3 '>Amar Bangabandhu Winner Speech by MSI KHAN | বঙ্গবন্ধুকে নিয়ে পুরস্কারপ্রাপ্ত বক্তব্য | MUJIB100</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, necessitatibus fugiat! Possimus ullam iure quam error perspiciatis quaerat porro expedita quo, rem ipsam ab nam dolor corporis, blanditiis, modi voluptates. Velit, excepturi?</p>
                    <div>
                        <button className=' px-2 py-1 mt-2 rounded-md md:mt-2 md:px-2 md:py-1'>  Read More</button>
                    </div>

                </div>
            </div>
            <div className="articleCard grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 p-4  " >
                <div>  <iframe width="560" height="315" className='rounded-xl videos' src="https://www.youtube.com/embed/PDF2QEdQkU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='bg-[#18264a] rounded-xl  md:-ml-12 md:flex flex-col justify-center md:px-4 md:pb-10 md:h-72 sm:h-96 md:mt-3 flex flex-col justify-center py-5 px-2 h-80 -mt-5  videoDetails'>
                    <h2 className='text-2xl md:text-xl sm:text-xs font-bold py-3'>Amar Bangabandhu Winner Speech by MSI KHAN | বঙ্গবন্ধুকে নিয়ে পুরস্কারপ্রাপ্ত বক্তব্য | MUJIB100</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, necessitatibus fugiat! Possimus ullam iure quam error perspiciatis quaerat porro expedita quo, rem ipsam ab nam dolor corporis, blanditiis, modi voluptates. Velit, excepturi?</p>
                    <div>
                        <button className=' px-2 py-1 mt-2 rounded-md md:mt-2 md:px-2 md:py-1'>  Read More</button>
                    </div>

                </div>
            </div>











           


























            <div className='text-center'>
                <button className=' px-3 py-2 mt-5 rounded-md'>Visite My Youtube Channel </button>
            </div>
        </div>
    );
};

export default Videos;