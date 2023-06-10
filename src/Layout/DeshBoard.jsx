import React from 'react';
import { FaAddressBook, FaBookmark, FaCalendarPlus, FaHome, FaMagnet, FaScroll, FaSpellCheck, FaUser, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hook/useAdmin/useadmin';
import useInstractor from '../hook/useInstractor/useInstractor';

const DeshBoard = () => {

    // const isAdmin = true;

    const [isAdmin] = useAdmin()
    const [isInstractor] = useInstractor()
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-20 ml-2">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-orange-300 text-base-content">
                        {isAdmin ? <>
                            <li><NavLink to='/deshboard/mangeclass'> <FaCalendarPlus />Manage Classes</NavLink></li>
                            <li><NavLink to='/deshboard/alluser'><FaUsers />Manage Users</NavLink></li>

                        </> :
                            isInstractor ? <>
                                <li><NavLink to='/deshboard/instractoraddclass'> <FaCalendarPlus />Add Class</NavLink></li>
                                <li><NavLink to='/deshboard/instractorclass'><FaUsers />My Class</NavLink></li>

                            </> :
                                <>
                                    <li><NavLink to='/'><FaHome />  Home</NavLink></li>
                                    <li><NavLink> <FaHome />My Selet Classes</NavLink></li>
                                    <li><NavLink to='/deshboard/mycart'><FaBookmark />My Enroll Class</NavLink></li>
                                </>

                        }

                        <div className='divider'></div>
                        <li><NavLink to='/'><FaHome />  Home</NavLink></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DeshBoard;