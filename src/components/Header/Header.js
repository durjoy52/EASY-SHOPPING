import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center my-4'>
            <NavLink className={({isActive})=>isActive ? 'text-orange-700 mr-6 font-extrabold' : 'text-black mr-6 font-bold'} to='/'>Home</NavLink>
            <NavLink className={({isActive})=>isActive ? 'text-orange-700 mr-6 font-extrabold' : 'text-black mr-6 font-bold'} to='/reviews'>Reviews</NavLink>
            <NavLink className={({isActive})=>isActive ? 'text-orange-700 mr-6 font-extrabold' : 'text-black mr-6 font-bold'} to='/dashboard'>Dashboard</NavLink>
            <NavLink className={({isActive})=>isActive ? 'text-orange-700 mr-6 font-extrabold' : 'text-black mr-6 font-bold'} to='/blogs'>Blogs</NavLink>
        </div>
    );
};

export default Header;