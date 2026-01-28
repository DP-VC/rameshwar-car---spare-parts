import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Disc, Settings, Zap, Filter, Droplet, CheckCircle, ArrowRight } from 'lucide-react';
import BrandCard from '../components/BrandCard';

const Home = () => {
    const categories = [
        { name: 'Engine Parts', icon: <Wrench size={32} />, path: '/products?category=Engine Parts' },
        { name: 'Brake Parts', icon: <Disc size={32} />, path: '/products?category=Brake Parts' },
        { name: 'Suspension Parts', icon: <Settings size={32} />, path: '/products?category=Suspension Parts' },
        { name: 'Electrical Parts', icon: <Zap size={32} />, path: '/products?category=Electrical Parts' },
        { name: 'Filters', icon: <Filter size={32} />, path: '/products?category=Filters' },
    ];

    const brandFeatures = [
        { name: 'Maruti Suzuki Genuine Parts', description: 'Ensure the longevity and performance of your Maruti vehicle with original parts designed for perfect fit.', color: 'border-blue-600' },
        { name: 'Hyundai Genuine Parts', description: 'Original equipment manufacturer parts for all Hyundai models, guaranteeing safety and reliability.', color: 'border-blue-400' },
        { name: 'Tata Motors Genuine Parts', description: 'Built tough for Tata vehicles. Authentic spare parts for passenger and commercial vehicles.', color: 'border-blue-800' },
        { name: 'Shell Engine Oil & Lubricants', description: 'World-class lubricants to keep your engine running smoothly and efficiently under all conditions.', color: 'border-yellow-400' },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-brand-blue text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-blue-900 opacity-90 z-0"></div>
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                        RAMESHWAR CAR & SPARE PARTS
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-3xl mx-auto">
                        Authorized Car Spare Parts & Genuine Lubricants
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/products" className="px-8 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-red-600 transition-colors shadow-lg transform hover:scale-105">
                            Browse Products
                        </Link>
                        <Link to="/contact" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-brand-blue transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">Our Authorized Partners</h2>
                        <div className="w-24 h-1 bg-brand-red mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {brandFeatures.map((brand, index) => (
                            <BrandCard key={index} {...brand} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Find Parts by Category</h2>
                        <p className="text-gray-600 mt-2">Comprehensive range of spares for every need</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat, index) => (
                            <Link key={index} to={cat.path} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group border border-gray-100 hover:border-brand-red w-40 sm:w-48 h-40">
                                <div className="text-brand-blue group-hover:text-brand-red mb-3 transition-colors">
                                    {cat.icon}
                                </div>
                                <span className="font-semibold text-gray-800 text-sm">{cat.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-brand-dark text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why Choose Rameshwar?</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <CheckCircle className="text-brand-red mt-1 mr-4 flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">100% Genuine Parts</h3>
                                        <p className="text-gray-400">We only stock authentic parts from authorized manufacturers. No fakes, no compromises.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle className="text-brand-red mt-1 mr-4 flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Authorized Dealer</h3>
                                        <p className="text-gray-400">Officially authorized retailer for Maruti Suzuki, Hyundai, Tata, and Shell.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle className="text-brand-red mt-1 mr-4 flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                                        <p className="text-gray-400">Years of experience in the automobile industry to help you find exactly what you need.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block relative h-96 bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop"
                                alt="Car Spare Parts Shop"
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-brand-red text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Specific Part?</h2>
                    <p className="text-xl mb-8 opacity-90">Give us a call or send a WhatsApp message. We are here to help you get your vehicle back on the road.</p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <a href="tel:+919876543210" className="bg-white text-brand-red hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105">
                            Call Now
                        </a>
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white border border-green-400 px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105">
                            WhatsApp Enquiry
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
