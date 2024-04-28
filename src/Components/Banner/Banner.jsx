import React from 'react';
import img1 from '../../assets/assetsof/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div>
             <div className='flex mt-10 p-28'>
                <div>
                    <h1 className='font-extrabold text-7xl'>One Step Closure To My</h1>
                    <h3 className='text-7xl font-extrabold text-blue-700 my-5'>Dream Job</h3>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='button mt-5'>Get Started</button>

                </div>
                <img className='img' src={img1} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;