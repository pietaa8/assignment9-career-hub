import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className=' mt-12 p-28 flex justify-between bg-blue-50'>
            <h1 className='text-lg font-extrabold'>Best Career Opportunities</h1>
            <div className='anchor'>
                <a href="/">Home</a>
                <a href="/statistics">Statistics</a>
                <a href="/appliedJobs">AppliedJobs</a>
                <a href="/blogs">Blogs</a>
            </div>
            <button className='button'>StartApplying</button>

           
            
        </div>
    );
};

export default Header;