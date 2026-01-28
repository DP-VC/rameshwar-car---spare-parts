import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import { Filter, X } from 'lucide-react';

const Products = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category');

    const [products, setProducts] = useState(productsData);
    const [filteredProducts, setFilteredProducts] = useState(productsData);

    // Filter States
    const [selectedBrand, setSelectedBrand] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
    const [showFilters, setShowFilters] = useState(false);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Derived lists for filter dropdowns
    const brands = ['All', ...new Set(products.map(p => p.brand))];
    const categories = ['All', ...new Set(products.map(p => p.category))];

    useEffect(() => {
        let result = products;

        if (selectedBrand !== 'All') {
            result = result.filter(p => p.brand === selectedBrand);
        }

        if (selectedCategory !== 'All') {
            result = result.filter(p => p.category === selectedCategory);
        }

        setFilteredProducts(result);
        setCurrentPage(1); // Reset to page 1 on filter change
    }, [selectedBrand, selectedCategory, products]);

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const paginate = (pageNumber) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(pageNumber);
    };

    // Update category if URL param changes
    useEffect(() => {
        if (initialCategory) {
            setSelectedCategory(initialCategory);
        }
    }, [initialCategory]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Spare Parts Catalog</h1>
                    <p className="text-gray-500 mt-1">Showing {filteredProducts.length} quality products</p>
                </div>

                {/* Mobile Filter Toggle */}
                <button
                    className="md:hidden mt-4 flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-md"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <Filter size={18} />
                    <span>Filters</span>
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
                        <div className="flex justify-between items-center mb-6 md:hidden">
                            <h2 className="font-bold text-lg">Filters</h2>
                            <button onClick={() => setShowFilters(false)}><X size={20} /></button>
                        </div>

                        {/* Brand Filter */}
                        <div className="mb-8">
                            <h3 className="font-semibold text-gray-800 mb-3">Brand</h3>
                            <div className="space-y-2">
                                {brands.map(brand => (
                                    <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="brand"
                                            value={brand}
                                            checked={selectedBrand === brand}
                                            onChange={(e) => setSelectedBrand(e.target.value)}
                                            className="text-brand-red focus:ring-brand-red h-4 w-4"
                                        />
                                        <span className="text-gray-600 text-sm">{brand}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-3">Category</h3>
                            <div className="space-y-2">
                                {categories.map(category => (
                                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            value={category}
                                            checked={selectedCategory === category}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            className="text-brand-red focus:ring-brand-red h-4 w-4"
                                        />
                                        <span className="text-gray-600 text-sm">{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Reset Button */}
                        {(selectedBrand !== 'All' || selectedCategory !== 'All') && (
                            <button
                                onClick={() => { setSelectedBrand('All'); setSelectedCategory('All'); }}
                                className="mt-6 w-full py-2 text-sm text-brand-red border border-brand-red rounded-md hover:bg-brand-red hover:text-white transition-colors"
                            >
                                Reset Filters
                            </button>
                        )}
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-grow">
                    {filteredProducts.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {currentProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            {totalPages > 1 && (
                                <div className="mt-10 flex justify-center items-center space-x-2">
                                    <button
                                        onClick={() => paginate(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`px-3 py-1 rounded-md border ${currentPage === 1 ? 'text-gray-400 border-gray-200 cursor-not-allowed' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                                    >
                                        Previous
                                    </button>

                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => paginate(i + 1)}
                                            className={`w-8 h-8 rounded-md flex items-center justify-center font-medium ${currentPage === i + 1
                                                ? 'bg-brand-red text-white'
                                                : 'text-gray-700 border border-gray-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => paginate(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className={`px-3 py-1 rounded-md border ${currentPage === totalPages ? 'text-gray-400 border-gray-200 cursor-not-allowed' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-dashed border-gray-300">
                            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                            <button
                                onClick={() => { setSelectedBrand('All'); setSelectedCategory('All'); }}
                                className="mt-4 text-brand-red font-medium hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
