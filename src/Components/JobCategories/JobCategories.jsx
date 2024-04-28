import React from 'react';
import './JobCategories.css'

const JobCategories = ({category}) => {
    const {logo,name,jobs}=category;
    
    return (
        <div className='category'>
          
                <img src={logo} alt="" />
                <h3>{name}</h3>
                <p>{jobs}</p>
            
    

            
        </div>
    );
};

export default JobCategories;