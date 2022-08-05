import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import './Video.css'

const Videos = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold my-32 "> Some Of <span style={{ color: 'rgb(11 194 194)' }}> My Videos </span></h1>

            <div className="articleCard grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 p-4  " >
                <div>  <iframe width="560" height="315" className='rounded-xl videos' src="https://www.youtube.com/embed/8kFd-cYP468" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='bg-[#18264a] rounded-xl  md:-ml-20 md:flex flex-col justify-center md:px-4 md:pb-10 md:h-80 sm:h-96 md:mt-5 flex flex-col justify-center py-8 px-2 h-80 -mt-5  videoDetails'>
                    <h2 className='text-2xl md:text-xl sm:text-xs font-bold py-3 '>মন্ত্রীর কাছে মানুষের ভোগান্তি তুলে ধরলেন শিক্ষার্থী</h2>
                    <p>মাননীয় পানিসম্পদ উপমন্ত্রী শরীয়তপুর-২ আসনের সংসদ সদস্য এ কে এম এনামুল হক শামীম ভাইর সামনে এটাই আমার প্রথম বক্তৃতা। শরীয়তপুরবাসীর সমস্যা তুলে ধরার পরপরই তিনি কাছে ডেকে বক্তব্যের জন্য ধন্যবাদ দিয়েছেন এবং সমাধানকল্পে তার প্রতিশ্রুতি ব্যক্ত করেছেন। একই সঙ্গে শরীয়তপুরে শেখ হাসিনা কৃষি বিশ্ববিদ্যালয় প্রতিষ্ঠিত হতে যাচ্ছে বলে তিনি জানিয়েছেন। </p>
                    <div>
                        <button className=' px-2 py-1 mt-2 rounded-md bg-cyan-500 md:mt-2 md:px-2 md:py-1'>  Read More</button>
                    </div>

                </div>
            </div>
            <div className="articleCard grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 p-4  " >
                <div>  <iframe width="560" height="315" className='rounded-xl videos' src="https://www.youtube.com/embed/PDF2QEdQkU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div  className='bg-[#18264a] rounded-xl  md:-ml-20 md:flex flex-col justify-center md:px-4 md:pb-10 md:h-80 sm:h-96 md:mt-5 flex flex-col justify-center py-8 px-2 h-80 -mt-5  videoDetails'>
                    <h2 className='text-2xl md:text-xl sm:text-xs font-bold py-3 '>Amar Bangabandhu Winner Speech by MSI KHAN | বঙ্গবন্ধুকে নিয়ে পুরস্কারপ্রাপ্ত বক্তব্য | MUJIB100</h2>
                    <p> মুজিব শতবর্ষ উপলক্ষে @ICT Division আয়োজিত ‘আমার বঙ্গবন্ধু’ শীর্ষক প্রতিযোগিতায় আমার এই বক্তব্যটি বিজয়ী হয়েছে। এই ভিডিওতে স্বাধীন বাংলাদেশ রাষ্ট্রের জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান সম্পর্কে আমার ভাবনা  তুলে ধরেছি। </p>
                    <div>
                        <button className=' px-2 py-1 mt-2 rounded-md bg-cyan-500 md:mt-2 md:px-2 md:py-1'>  Read More</button>
                    </div>

                </div>
            </div>
            <div className="articleCard grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 p-4  " >
                <div>  <iframe width="560" height="315" className='rounded-xl videos' src="https://www.youtube.com/embed/Gl22fRL7Z0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div  className='bg-[#18264a] rounded-xl  md:-ml-20 md:flex flex-col justify-center md:px-4 md:pb-10 md:h-80 sm:h-96 md:mt-5 flex flex-col justify-center py-8 px-2 h-80 -mt-5  videoDetails'>
                    <h2 className='text-2xl md:text-xl sm:text-xs font-bold py-3'>ধর্ষিতা শব্দটি পরিহার করুন | ATN NEWS | News Hour Xtra | MSI KHAN</h2>
                    <p>এই টকশোটি গত ৭ জানুয়ারি ২০২০ রাত সাড়ে ৯টা থেকে ১১ পর্যন্ত সময়ে এটিএন নিউজে সরাসরি প্রচারিত হয়েছে। মঙ্গলবারের  'নিউজ আওয়ার এক্সটা'র সঞ্চালক ছিলেন সাংবাদিক মুন্নি সাহা। অনুষ্ঠানে ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থী হিসেবে উপস্থিত ছিলাম আমি সাইফুল ইসলাম খান এবং আমার সঙ্গে ছিলেন তাসনিম সুলতানা মৌলি।</p>
                    <div>
                        <button className=' px-2 py-1 mt-2 rounded-md bg-cyan-500 md:mt-2 md:px-2 md:py-1'>  Read More</button>
                    </div>

                </div>
            </div>



            <div className='text-center'>
                <button className=' px-3 py-2 mt-5 rounded-md bg-cyan-500'> <a href="https://www.youtube.com/c/MSIKHAN" className='text-lg'> Visite My Youtube Channel</a> </button>
            </div>
        </div>
    );
};

export default Videos;