import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='flex justify-center items-center gap-5'>
            <NavLink to={'/'}><button>Home</button></NavLink>
            <NavLink to={'addCoffee'}><button>Add Coffee</button></NavLink>
            <NavLink to={'updateCoffee'}><button>Update Coffee</button></NavLink>
        </div>

    );
};

export default Navbar;