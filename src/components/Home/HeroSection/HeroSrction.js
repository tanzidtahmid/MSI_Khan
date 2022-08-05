import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { TextParticles } from 'react-text-particles';
import Typical from 'react-typical';
import Profile from '../../../Images/ProfilePic.jpg';
import './HeroAnimention.css'
import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const HeroSrction = () => {
    return (
        // <TextParticles />
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 justify-items-center py-5 my-8  '>
            <div className='flex flex-col justify-center align-middle'>
                <div>
                    <h1 className='text-5xl font-bold '>HI, I AM <span className='name font-extrabold'> MSI KHAN </span> </h1>
                </div>
                <div>
                <Typical
                    steps={['Journalist', 1000, 'Debater', 8000]}
                    loop={Infinity}
                    wrapper="a"
                />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, libero a. Provident expedita, accusamus tempore ea quibusdam quas nihil architecto iste ratione esse, assumenda fugit quae cum temporibus dicta non ipsum a amet natus.</p>
                </div>
                <div className="socialMedia list-none grid grid-cols-8 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-0 my-10 ">
                    <li ><FontAwesomeIcon icon={faFacebook} size='2x' className='cursor-pointer' onClick={()=>window.open("https://www.facebook.com/msikhan11", '_blank', 'noopener,noreferrer')} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} size='2x' className='cursor-pointer' onClick={()=>window.open("https://twitter.com/msikhan11", '_blank', 'noopener,noreferrer')} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} size='2x' className='cursor-pointer' onClick={()=>window.open()} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} size='2x' className='cursor-pointer' onClick={()=>window.open("https://www.instagram.com/msi.khan", '_blank', 'noopener,noreferrer')} /></li>
                    <li><FontAwesomeIcon icon={faYoutube} size='2x' className='cursor-pointer' onClick={()=>window.open("https://www.youtube.com/msikhan", '_blank', 'noopener,noreferrer')} /></li>
                </div>
                <div>
                <button className=' px-3 py-2 text-2xl rounded-md btn '>Resume</button>
                <button className=' px-4 py-2 text-2xl rounded-md ml-4 btn'>My CV</button>
                </div>
            </div>
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <div>
                <img className='profilePic' src={Profile} alt="" />
            </div>
            </AnimationOnScroll>
        </div>
    );
};

export default HeroSrction;