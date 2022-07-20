import React, { useEffect, useState } from 'react';

// import components
import Logo from '../assets/images/thierno.jpg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';

const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                setBg(true);
            } else {
                setBg(false);
            }
        });
    });

    return (
        <header
            className={`${bg && 'bg-white shadow-md py-4'
                } p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}
        >
            <div className='container mx-auto flex items-center justify-between'>
                {/* logo */}
                <a href='#'>
                    <img src={Logo} alt='logo image' className='h-[35px]' />
                </a>
                {/* nav */}
                <Nav />
                {/* nav mobile */}
                <NavMobile />
            </div>
        </header>
    );
};

export default Header;