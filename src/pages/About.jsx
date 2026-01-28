import React from 'react';
import { Award, Users, ThumbsUp, Calendar } from 'lucide-react';

const About = () => {
    return (
        <div>
            {/* Hero Header */}
            <section className="bg-brand-blue py-20 text-center px-4">
                <h1 className="text-4xl font-extrabold text-white mb-4">About Rameshwar Car & Spare Parts</h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                    Your trusted destination for genuine automobile solutions since 2010.
                </p>
            </section>

            {/* Main Content */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="prose prose-lg text-gray-600">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
                        <p>
                            Rameshwar Car & Spare Parts is a premier dealership located in the heart of Surendranagar, Gujarat.
                            Established with a vision to provide authentic automotive components to car owners and mechanics,
                            we have grown into a trusted name in the region.
                        </p>
                        <p>
                            We specialize in genuine parts for Maruti Suzuki, Hyundai, and Tata Motors vehicles.
                            Unlike general spare part shops, we source directly from authorized channels to ensure that
                            every nut, bolt, and filter you buy from us is officially certified.
                        </p>
                        <p>
                            Our commitment goes beyond just selling parts. We believe in educating our customers about
                            vehicle health and maintenance, ensuring they make informed decisions for their cars.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-red-50 p-6 rounded-xl text-center">
                            <Calendar className="w-10 h-10 text-brand-red mx-auto mb-3" />
                            <span className="block text-2xl font-bold text-gray-800">10+</span>
                            <span className="text-sm text-gray-500">Years Experience</span>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl text-center">
                            <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                            <span className="block text-2xl font-bold text-gray-800">5000+</span>
                            <span className="text-sm text-gray-500">Happy Customers</span>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl text-center">
                            <Award className="w-10 h-10 text-green-600 mx-auto mb-3" />
                            <span className="block text-2xl font-bold text-gray-800">100%</span>
                            <span className="text-sm text-gray-500">Genuine Parts</span>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-xl text-center">
                            <ThumbsUp className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                            <span className="block text-2xl font-bold text-gray-800">4</span>
                            <span className="text-sm text-gray-500">Top Brands</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Promise</h2>
                    <div className="bg-white p-8 rounded-2xl shadow-sm italic text-xl text-gray-600 leading-relaxed border-l-8 border-brand-red">
                        "To keep your vehicle running like new by providing only the highest quality, manufacturer-approved spare parts at fair and transparent prices."
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
