import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const[open,setOpen] = useState(false)
    return (
    <div className='bg-slate-300 mb-4'>
        <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
            {open?<XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>
        <div className={`flex flex-col md:flex-row justify-center items-center absolute duration-300 ease-in ${open ? 'top-6' : 'top-[-120px]'} w-full md:static bg-slate-300 p-2`}>
            <NavLink className={({isActive})=>isActive ? 'text-orange-700 mr-6 font-extrabold  border-b-red-700 border-b-2 px-2' : 'text-black mr-6 font-bold border-b-2 px-2'} to='/'>Home</NavLink>
            <NavLink className={({isActive})=>isActive ? 'text-orange-700 mr-6 font-extrabold border-b-red-700 border-b-2 px-2' : 'text-black mr-6 font-bold border-b-2 px-2'} to='/reviews'>Reviews</NavLink>
            <NavLink className={({isActive})=>isActive ? 'text-orange-700 border-b-red-700 mr-6 font-extrabold border-b-2 px-2' : 'text-black mr-6 font-bold border-b-2 px-2'} to='/dashboard'>Dashboard</NavLink>
            <NavLink className={({isActive})=>isActive ? 'text-orange-700 border-b-red-700 mr-6 font-extrabold border-b-2 px-2' : 'text-black mr-6 font-bold border-b-2 px-2'} to='/blogs'>Blogs</NavLink>
        </div>
    </div>
    );
};

export default Header;