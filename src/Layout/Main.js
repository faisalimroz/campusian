import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Main.css'
const Main = () => {
    const location = useLocation();
    console.log(location)
    const noHeaderFooter =location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
              <Navbar></Navbar>
            <Outlet></Outlet>
            { noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;