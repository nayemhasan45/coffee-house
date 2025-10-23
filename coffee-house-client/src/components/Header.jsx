import React from 'react';
import logo from '../assets/images/more/logo1.png';
import bg from '../assets/images/more/15.jpg';

const Header = () => {
    return (
        <div className="flex items-center justify-center gap-2 md:gap-4 bg-cover bg-center h-16 md:h-32" style={{ backgroundImage: `url(${bg})` }}>
            <img className='w-8 h-9 md:w-14 md:h-16' src={logo} alt="" />
            <h1 className='font-rancho text-white text-xl md:text-6xl '>Espresso Emporium</h1>
        </div>
    );
};

export default Header;