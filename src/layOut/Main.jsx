import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>

            <Footer></Footer>

        </>
    );
};

export default Main;