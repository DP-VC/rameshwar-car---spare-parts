import React from 'react';

const BrandCard = ({ name, description, color }) => {
    return (
        <div className={`bg-white p-6 rounded-lg shadow-sm border-l-4 ${color} hover:shadow-lg transition-shadow duration-300`}>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default BrandCard;
