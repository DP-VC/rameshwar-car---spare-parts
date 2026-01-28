import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
            <div className="h-48 overflow-hidden relative group">
                <img
                    src={product.image.startsWith('/') ? `${import.meta.env.BASE_URL}${product.image.slice(1)}` : product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-brand-blue text-white text-xs px-2 py-1 rounded-sm uppercase font-semibold">
                    {product.brand}
                </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs text-gray-500 font-medium mb-1">{product.category}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                <div className="mt-auto">
                    <Link
                        to={`/products/${product.id}`}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-gray-100 hover:bg-brand-red hover:text-white text-gray-800 py-2 rounded-md font-medium transition-colors duration-200"
                    >
                        <span>View Details</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
