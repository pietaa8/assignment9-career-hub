import React from 'react';
import './FeaturedJobs.css'
import Frame from '../../assets/assetsof/Icons/Frame.png'
import Frame1 from '../../assets/assetsof/Icons/Frame-4.png'
import { Link } from 'react-router-dom';


const FeaturedJobs = ({job}) => {
    const{id,companyLogo,jobTitle,companyName,remoteOrOnsite,fulltimeOrPartTime,location,salary}=job;
    return (
        <div className='jobs'>
            <img src={companyLogo} alt="" />
            <p className='title'>{jobTitle}</p>
            <p>{companyName}</p>
            <div className='flex mt-2'>
                <button className='border-2 border-sky-500  w-28 h-10 mr-3 '>{remoteOrOnsite}</button>
                <button className='border-2 border-sky-500  w-28 h-10'>{fulltimeOrPartTime}</button>

            </div>
            <div className='flex mt-2'>
                <img src={Frame} alt="" />
                <p className='mr-2'>{location}</p>
                <img src={Frame1} alt="" />

                <p>{salary}</p>

            </div>
            <button className='btn'>
            <Link to={`job/${job.id}`}>View Details</Link>

                 </button>


        </div>
    );
};

export default FeaturedJobs;