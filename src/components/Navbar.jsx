import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart, Info, MapPin, Home, Layers } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={18} /> },
        { name: 'Products', path: '/products', icon: <ShoppingCart size={18} /> },
        { name: 'Brands', path: '/brands', icon: <Layers size={18} /> },
        { name: 'About', path: '/about', icon: <Info size={18} /> },
        { name: 'Contact', path: '/contact', icon: <MapPin size={18} /> },
    ];

    return (
        <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
                        <img src="/logo.png" alt="Rameshwar Car & Spare Parts" className="h-14 w-auto object-contain" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`flex items-center space-x-1 hover:text-brand-red transition-colors duration-200 font-medium ${location.pathname === link.path ? 'text-brand-red' : 'text-gray-700'
                                    }`}
                            >
                                <span>{link.name}</span>
                            </Link>
                        ))}
                        <a
                            href="tel:+917870763333"
                            className="bg-brand-red hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold transition-transform transform hover:scale-105 flex items-center space-x-2 shadow-md"
                        >
                            <Phone size={18} />
                            <span>Call Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-700 hover:text-brand-red focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={closeMenu}
                                className={`block px-4 py-3 rounded-lg text-base font-medium flex items-center space-x-3 transition-colors ${location.pathname === link.path ? 'bg-red-50 text-brand-red' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        ))}
                        <a
                            href="tel:+917870763333"
                            className="block w-full text-center bg-brand-red text-white py-3 rounded-lg font-bold mt-6 shadow-md"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
