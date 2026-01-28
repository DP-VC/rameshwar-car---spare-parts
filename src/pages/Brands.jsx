import React from 'react';
import BrandCard from '../components/BrandCard';

const Brands = () => {
    const brandFeatures = [
        { name: 'Maruti Suzuki Genuine Parts', description: 'As an authorized retailer, we provide the complete range of varied spare parts ensuring quality and compatibility for your Maruti Suzuki vehicles.', color: 'border-blue-600' },
        { name: 'Hyundai Genuine Parts', description: 'We stock legitimate Hyundai parts. From engine components to electrical fittings, get everything you need for your Hyundai car.', color: 'border-blue-400' },
        { name: 'Tata Motors Genuine Parts', description: 'Trust only genuine Tata Motors Spare Parts for your vehicle. We offer high-performance parts for both passenger and commercial vehicles.', color: 'border-blue-800' },
        { name: 'Shell Engine Oil & Lubricants', description: 'We are authorized sellers of Shell Lubricants. Protect your engine with high-grade oils designed for maximum efficiency.', color: 'border-yellow-400' },
    ];

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Authorized Partners</h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500">
                        We are proud to partner with leading automotive manufacturers to bring you 100% genuine spare parts.
                    </p>
                    <div className="w-32 h-1.5 bg-brand-red mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {brandFeatures.map((brand, index) => (
                        <div key={index} className="transform hover:-translate-y-1 transition-transform duration-300">
                            <BrandCard {...brand} />
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-gray-50 rounded-2xl p-10 text-center border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Genuine Matters?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-8">
                        <div>
                            <h3 className="font-bold text-brand-blue mb-2">Safety First</h3>
                            <p className="text-gray-600 text-sm">Genuine parts are tested to ensure they meet strict safety standards, keeping you and your passengers safe.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-brand-blue mb-2">Perfect Fit</h3>
                            <p className="text-gray-600 text-sm">Engineered specifically for your vehicle model, ensuring seamless integration and optimal performance.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-brand-blue mb-2">Long Term Value</h3>
                            <p className="text-gray-600 text-sm">While cheap alternatives exist, genuine parts last longer and protect your vehicle's warranty and resale value.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;
