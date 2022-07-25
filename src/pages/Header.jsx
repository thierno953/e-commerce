import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GrCart } from "react-icons/gr";

// import components
import Logo from '../assets/images/thierno.jpg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';

const Header = () => {
    const [bg, setBg] = useState(false);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

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
        <section
        id='home'
        className='lg:h-full lg:max-h-800 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]'
    >
        <header
            className={`${bg && 'bg-white shadow-md py-4'
                } p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}
        >
            <div className='container mx-auto flex items-center justify-between'>
                {/* logo */}
                <Link to='/'>
                    <img src={Logo} alt='logo' className='h-[35px]' />
                </Link>
                <Link to="/cart" className='flex font-primary text-xl'><GrCart />({totalQuantity})</Link>
                {/* nav */}
                <Nav />
                {/* nav mobile */}
                <NavMobile />
            </div>
        </header>
        </section>
    );
};

export default Header;