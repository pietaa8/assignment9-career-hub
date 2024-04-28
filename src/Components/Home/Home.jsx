import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container mx-auto px-4'>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;