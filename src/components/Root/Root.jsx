import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>

            <div className="bg-slate-100 px-36">
                <Header></Header>
            </div>
            <div>
                <Outlet> </Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;