import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-gray-300 pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Business Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Rameshwar Car & Spare Parts</h3>
                        <p className="mb-4 text-sm leading-relaxed">
                            Authorized dealer of Maruti Suzuki, Hyundai, and Tata Motors genuine parts.
                            We also stock premium Shell lubricants for all engine types.
                            Trusted by locals for quality and authenticity.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-brand-red transition-colors">Home</Link></li>
                            <li><Link to="/products" className="hover:text-brand-red transition-colors">All Products</Link></li>
                            <li><Link to="/brands" className="hover:text-brand-red transition-colors">Our Brands</Link></li>
                            <li><Link to="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start space-x-3">
                                <MapPin className="text-brand-red mt-1 flex-shrink-0" size={18} />
                                <p>

                                    Shop No. 3, Paras Market, Jin Compound,<br /> Near Jam Travellers, Opp. Reliance Mall,<br /> Bus Station Road, Surendranagar, Gujarat, India

                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="text-brand-red flex-shrink-0" size={18} />
                                <a href="tel:+919876543210" className="hover:text-white">+91 7870763333</a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="text-brand-red flex-shrink-0" size={18} />
                                <a href="mailto:patelmitulp1@gmail.com" className="hover:text-white">patelmitulp1@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Rameshwar Car & Spare Parts. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
