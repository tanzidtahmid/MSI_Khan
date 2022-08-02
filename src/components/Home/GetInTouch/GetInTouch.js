import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const GetInTouch = () => {
    return (
        <div className='text-center mt-16'>
            <h4 className='text-xl' style={{ color: 'rgb(11 194 194)' }}>What's Next?</h4>
            <div className="mt-8">
            <h1 className='text-5xl font-bold'>Get In Touch</h1>
            <p>I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. <br /> I'll try my best to get back to you! </p>
            </div>

            <div className='mt-16'>
                <button className=' px-3 py-2 mt-5 rounded-md'>  Say Hello</button>
            </div>

            <div className='mt-16'>
                <p>Designed & Built by Tanzid Mahamud</p>
                <p> <FontAwesomeIcon icon={ faStar }></FontAwesomeIcon> Star &   <FontAwesomeIcon icon={ faCodeBranch }></FontAwesomeIcon>   FroksBy Tanzid Mahamud</p>
            </div>
        </div>
    );
};

export default GetInTouch;