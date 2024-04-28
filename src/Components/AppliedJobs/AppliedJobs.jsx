import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import { Link } from 'react-router-dom';
import Frame4 from '../../assets/assetsof/Icons/Frame-4.png'
import Frame from '../../assets/assetsof/Icons/Frame.png'

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    // Retrieve the applied jobs from local storage
    const appliedJobsString = localStorage.getItem('appliedJobs');
    const appliedJobs = JSON.parse(appliedJobsString) || [];

    setAppliedJobs(appliedJobs);
  }, []);

  return (
    <div>
      <h2 className='text-lg text-center font-extrabold'>Applied Jobs</h2>
      <button className='text-start ml-72 border-2 rounded-sm'>Filter By</button>
      <ul>
        {appliedJobs.map(job => (
          <div className='p-10 mt-10 border-4 rounded-md w-3/5 h-72 ml-60 mr-52' key={job.id}>
           <div className='flex'>
           <img className='image' src={job.companyLogo} alt="" />
            <div>
            <h3 className='job-title'>{job.jobTitle}</h3>
            <p>{job.companyName}</p>
            <div className='flex mt-2'>
                <button className='border-2 border-sky-500  w-28 h-10 mr-3 '>{job.remoteOrOnsite}</button>
                <button className='border-2 border-sky-500  w-28 h-10'>{job.fulltimeOrPartTime}</button>

            </div>
           <div className='flex mt-5'>
            <img src={Frame4} alt="" />
           <p>{job.location}</p>
            <img src={Frame} alt="" />
            <p>{job.salary}</p>
           </div>
            </div>
            <Link to={`job/${job.id}`}>
  <button className='job-button'>
    View Details
  </button>
</Link>

           </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
