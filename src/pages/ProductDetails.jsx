import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { ArrowLeft, Phone, BadgeCheck, Truck, ShieldCheck } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const product = productsData.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
                <Link to="/products" className="text-brand-red mt-4 inline-block hover:underline">Back to Products</Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-gray-500 mb-8">
                <Link to="/" className="hover:text-brand-red">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/products" className="hover:text-brand-red">Products</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-800 font-medium">{product.name}</span>
            </nav>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="md:flex">
                    {/* Image Section */}
                    <div className="md:w-1/2 p-4 md:p-8 bg-gray-50 flex items-center justify-center">
                        <div className="relative rounded-lg overflow-hidden w-full h-80 md:h-96 shadow-sm">
                            <img
                                src={product.image.startsWith('/') ? `${import.meta.env.BASE_URL}${product.image.slice(1)}` : product.image}
                                alt={product.name}
                                className="w-full h-full object-contain mix-blend-multiply"
                            />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                        <div className="mb-1">
                            <span className="text-brand-red font-bold tracking-wide text-sm uppercase">{product.brand}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

                        <div className="flex items-center space-x-4 mb-6">
                            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">{product.category}</span>
                            <span className="flex items-center text-green-600 text-sm font-medium">
                                <BadgeCheck size={16} className="mr-1" /> Genuine Part
                            </span>
                        </div>

                        <div className="prose prose-sm text-gray-600 mb-8 border-b border-gray-100 pb-8">
                            <h3 className="text-gray-900 font-bold text-lg mb-2">Description</h3>
                            <p>{product.description}</p>

                            <h3 className="text-gray-900 font-bold text-lg mt-4 mb-2">Compatibility</h3>
                            <p>Suitable for {product.brand} vehicles. Please verify model compatibility with our support team.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
                            <a
                                href="tel:+919876543210"
                                className="flex-1 flex items-center justify-center space-x-2 bg-brand-blue text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-lg"
                            >
                                <Phone size={20} />
                                <span>Call for Price</span>
                            </a>
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center space-x-2 bg-green-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-lg border border-green-400"
                            >
                                <span>WhatsApp Enquiry</span>
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                            <div className="flex items-center">
                                <ShieldCheck size={16} className="mr-2 text-brand-red" />
                                <span>Warranty Available</span>
                            </div>
                            <div className="flex items-center">
                                <Truck size={16} className="mr-2 text-brand-red" />
                                <span>Store Pickup</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
