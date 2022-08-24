import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import Achievement1 from '../../../Images/Achievement1.jpg'
import './Achievements.css'
import { useNavigate } from 'react-router-dom';

const Achievements = () => {
    const navigate = useNavigate()
    return (
        <div>
             
            <AnimationOnScroll  animateIn="animate__tada">
        <h1 className="text-3xl font-bold my-32 " > Some Of <span style={{color:'rgb(11 194 194)'}}> My Achievements </span></h1>
        </AnimationOnScroll>
        


        <div className='grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-items-center align-middle my-10'>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
           <div className="articleCard w-80 md:w-96 lg:w-96 2xl:w-96  p-4 bg-[#18264a] rounded-xl" >
               <div> <img src={Achievement1} alt="" /> </div>
               <div>
                   <h2 className='text-2xl font-bold py-3'>আমার বঙ্গবন্ধু বক্তৃতা প্রতিযোগিতায় লক্ষ টাকা জয়ী</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, necessitatibus fugiat! Possimus ullam iure quam error perspiciatis quaerat porro expedita quo, rem ipsam ab nam dolor corporis, blanditiis, modi voluptates. Velit, excepturi?</p>
               </div>
           </div>
           </AnimationOnScroll>
           <AnimationOnScroll animateIn="animate__fadeInDownBig">
           <div className="articleCard w-80 md:w-96 lg:w-96 2xl:w-96 p-4 bg-[#18264a] rounded-xl">
           <div> <img src={Achievement1} alt="" /> </div>
               <div>
                   <h2 className='text-2xl font-bold py-3'>আমার বঙ্গবন্ধু বক্তৃতা প্রতিযোগিতায় লক্ষ টাকা জয়ী</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, necessitatibus fugiat! Possimus ullam iure quam error perspiciatis quaerat porro expedita quo, rem ipsam ab nam dolor corporis, blanditiis, modi voluptates. Velit, excepturi?</p>
               </div>
           </div>
           </AnimationOnScroll>
           <AnimationOnScroll animateIn="animate__fadeInRightBig">
           <div className="articleCard w-80 md:w-96 lg:w-96 2xl:w-96 p-4 bg-[#18264a] rounded-xl">
           <div> <img src={Achievement1} alt="" /> </div>
               <div>
                   <h2 className='text-2xl font-bold py-3'>আমার বঙ্গবন্ধু বক্তৃতা প্রতিযোগিতায় লক্ষ টাকা জয়ী</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, necessitatibus fugiat! Possimus ullam iure quam error perspiciatis quaerat porro expedita quo, rem ipsam ab nam dolor corporis, blanditiis, modi voluptates. Velit, excepturi?</p>
               </div>
           </div>
           </AnimationOnScroll>
        </div>
      <div className='text-center'>
      <button className=' px-3 py-2 mt-5 rounded-md bg-cyan-500' onClick={() => navigate('/all-achivements')}>More Achievements</button>
      </div>
   </div>
    );
};

export default Achievements;