import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const links =
        <>
            <li><NavLink to="/"> Home</NavLink></li>
            <li><NavLink to="/jobs">Jobs</NavLink></li>
            <li><NavLink to="/appliedJobs">Applied Jobs</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><NavLink to="/blog">Blogs</NavLink></li>
        </>
    return (
        <div className="navbar bg-slate-100 mx-36">
            {/* <div className="bg-slate-100"> */}
                <div className="navbar-start w-96">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end w-96">
                    <a className="btn text-white bg-blue-600">Star Applying</a>
                </div>
            </div>
        // </div>
    );
};

export default Header;