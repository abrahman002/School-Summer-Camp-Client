import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DarkModeToggle from "react-dark-mode-toggle";
import './thame.css'

const NavBar = () => {
    const { auth, logOut } = useContext(AuthContext);
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => { error })
    }


    const NavMenu = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'>Instructors</Link></li>
        <li><Link to='/class'>Classes</Link></li>
        {auth.currentUser ? <>
            <li><Link to="/deshboard">Dashboard </Link></li>
            <li><Link onClick={handleLogOut}>LogOut</Link></li>

        </> :
            <li><Link to='login'>Login</Link></li>}

    </>

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    return (
        <div >
            <div className={`navbar bg-white shadow-lg fixed top-0 z-10 p-5 ${isDarkMode ? 'dark' : 'light'}`} >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {NavMenu}
                        </ul>
                    </div>
                    <img style={{ width: '80px', height: '50px' }} className='rounded mr-2' src="https://i.ibb.co/nm1m2G0/9471147-4194804.jpg" alt="" />
                    <a className=" normal-case text-xl">Islamic School</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        auth.currentUser && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full" title={auth.currentUser.displayName}>
                                <img src={auth.currentUser?.photoURL} />
                            </div>
                        </label>
                    }
                </div>
                <div>
                    <DarkModeToggle
                        onChange={toggleTheme}
                        checked={isDarkMode}
                        size={80}
                    />
                </div>

            </div>
            <div className={`content ${isDarkMode ? 'dark' : 'light'}`}>
                {/* The rest of your web page content */}
            </div>
        </div>
    );
};

export default NavBar;