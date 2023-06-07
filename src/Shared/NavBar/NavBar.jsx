import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const NavMenu = <>

        <li><Link>Home</Link></li>
        <li><Link>Home</Link></li>
        <li><Link>Home</Link></li>
        <li><Link>Home</Link></li>
        <li><Link>Home</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-white shadow-md  p-5 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                              {NavMenu}
                        </ul>
                    </div>
                    <img style={{width:'80px',height:'50px'}} className='rounded mr-2' src="https://i.ibb.co/nm1m2G0/9471147-4194804.jpg" alt="" />
                    <a className=" normal-case text-xl">Islamic School</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;