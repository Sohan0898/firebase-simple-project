import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';

const Main = () => {
    return (
        <div className=' p-40 text-center'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;