import React from 'react';
import article1 from '../../Images/article1.jpg'
import Navbar from '../Home/Navbar/Navbar';

const SingleArticle = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div>
                    <img className='object-contain ' src={article1} alt="" />
                </div>
                <div>
                    <h2 className='text-5xl font-bold py-3 text-center '>গণতন্ত্রের সংলাপ at RTV</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore earum sed qui quae id nostrum a provident exercitationem laboriosam atque ad expedita dolores, similique, harum eveniet ducimus, adipisci minus quibusdam asperiores et! Provident quasi dolores asperiores nostrum, eos repellendus maxime voluptatem non? Aliquam, consequatur. Impedit autem fugit nulla adipisci omnis sequi et cum cumque harum eaque. Minima aspernatur ab ducimus asperiores, cumque nobis quam similique facilis maxime sunt blanditiis velit ex, impedit accusamus, quidem eos dolor atque. Tempore, est quaerat. Incidunt nesciunt, magnam dolor facilis dolorem ab deserunt dignissimos harum minus dolore quia commodi, magni quo alias voluptatem atque minima.</p>
                </div>
            </div>
        </div>
    );
};

export default SingleArticle;