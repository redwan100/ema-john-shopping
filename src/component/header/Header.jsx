import React from 'react';
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center bg-[#1C2B35] py-3 sticky top-0 left-0 z-50'>
            <img className='pl-16' src={logo} alt="" />
            <div className='text-white pr-16'>
                <NavLink to={'/'} className='ml-5'>Shop</NavLink>
                <NavLink to={'/orders'} className='ml-5' href="/orders">Orders</NavLink>
                <NavLink to={'/inventory'} className='ml-5' href="/inventory">Inventory</NavLink>
                <NavLink to={'/login'} className='ml-5' href="/login">Login</NavLink>
            </div>
        </nav>
    );
};

export default Header;