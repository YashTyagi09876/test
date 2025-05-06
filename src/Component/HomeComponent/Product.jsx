import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import raspberry from '../../assets/rasperrybi.png';
import filtericon from '../../assets/filtericon.png';

const Product = () => {
    const products = Array(20).fill({
        id: 1,
        name: 'Raspberry Pi 4',
        description: 'With Wifi',
        image: raspberry,
        rating: 4,
        reviewCount: 15,
        price: 4029.5,
        originalPrice: 5029.5,
        deliveryDate: 'Friday, Jan 18',
        deliveryType: 'FREE Delivery',
    });

    const [price, setPrice] = useState(9999);
    const [showSidebar, setShowSidebar] = useState(false);

    const min = 50;
    const max = 9999;

    const handleSliderChange = (e) => {
        setPrice(Number(e.target.value));
    };

    const percentage = ((price - min) / (max - min)) * 100;

    const handleApply = () => {
        alert(`Filtering products below ₹${price}`);
    };

    return (
        <div className="relative">
            {/* Toggle Button for Mobile */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 bg-[#132D6A] text-white px-4 py-2 rounded-xl"
                onClick={() => setShowSidebar(true)}
            >
                Filters
            </button>

            {/* Overlay */}
            {showSidebar && (
                <div
                    className="fixed inset-0 bg-opacity-40 z-40"
                    onClick={() => setShowSidebar(false)}
                />
            )}

            <div className="flex flex-col lg:flex-row gap-4 py-6 lg:px-12 md:px-10 px-4 mx-auto">

                {/* Sidebar */}
                <div
                    className={`
                        fixed top-0 left-0 z-50 bg-white w-3/4 max-w-xs h-full p-4 rounded-r-3xl shadow-lg transition-transform duration-300
                        ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
                        lg:static lg:translate-x-0 lg:w-1/4 lg:rounded-3xl lg:shadow-sm lg:h-[calc(150vh-3rem)]  space-y-6
                    `}
                >
                    <div className="flex justify-between items-center lg:hidden mb-4">
                        <h2 className="text-lg font-semibold">Filters</h2>
                        <button
                            onClick={() => setShowSidebar(false)}
                            className="text-[#132D6A] text-sm"
                        >
                            Close ✕
                        </button>
                    </div>

                    {/* Filter by Price */}
                    <div>
                        <h3 className="font-semibold mb-2">Filter by Price</h3>
                        <div className="flex items-center space-x-4 relative w-full">
                            <input
                                type="range"
                                min={min}
                                max={max}
                                value={price}
                                onChange={handleSliderChange}
                                className="w-full appearance-none h-2 rounded-full"
                                style={{
                                    background: `linear-gradient(to right, #F97316 0%, #F97316 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
                                    WebkitAppearance: 'none',
                                    height: '6px',
                                    borderRadius: '9999px',
                                    outline: 'none',
                                }}
                            />
                            <style>
                                {`
                                input[type="range"]::-webkit-slider-thumb {
                                    -webkit-appearance: none;
                                    height: 16px;
                                    width: 16px;
                                    border-radius: 9999px;
                                    background: #F97316;
                                    cursor: pointer;
                                    margin-top: -5px;
                                }
                                input[type="range"]::-moz-range-thumb {
                                    height: 16px;
                                    width: 16px;
                                    border-radius: 9999px;
                                    background: #F97316;
                                    cursor: pointer;
                                }
                            `}
                            </style>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <p className="text-sm font-semibold">Price: ₹{price} – ₹{max}</p>
                            <button
                                onClick={handleApply}
                                className="px-4 py-1 text-sm bg-[#132D6A] rounded-3xl text-white hover:bg-blue-700"
                            >
                                Apply
                            </button>
                        </div>
                    </div>

                    {/* Filter Sections */}
                    {[
                        {
                            title: 'Filter by Price',
                            items: ['Under ₹500', '₹500 - ₹999', '₹1000 - ₹1999', '₹2000 - ₹4999', '₹5000 - ₹9999', 'Over ₹10000']
                        },
                        {
                            title: 'Filter by Categories',
                            items: Array(6).fill('Drone Parts')
                        },
                        {
                            title: 'Filter by Color',
                            items: ['White', 'Black', 'Grey', 'Brown', 'Blue', 'Green']
                        }
                    ].map((filter, i) => (
                        <div key={i}>
                            <h3 className="bg-[#f7941d] rounded-3xl text-white px-4 py-2 text-sm font-medium mb-2">
                                {filter.title}
                            </h3>
                            <ul className="space-y-1 text-sm">
                                {filter.items.map((label, index) => (
                                    <li key={index} className="flex justify-between">
                                        <label>
                                            <input type="checkbox" className="mr-2" />
                                            {label}
                                        </label>
                                        <span>(2)</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Filter by Brand */}
                    <div>
                        <h3 className="bg-[#f7941d] rounded-3xl text-white px-4 py-2 text-sm font-medium mb-2">
                            Filter by Brand
                        </h3>
                        <div className="grid grid-cols-3 gap-2">
                            {Array(6).fill('Raspberry Pi').map((brand, index) => (
                                <span key={index} className="flex items-center gap-2 bg-gray-200 text-xs px-3 py-2 rounded-3xl">
                                    <img src={filtericon} className="w-4 h-4" alt="icon" />
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="lg:w-3/4 w-full">
                    <div className="flex-col items-center justify-between px-4 py-2 mb-4">
                        <div className='flex justify-between'>
                            <div className="flex space-x-6 text-sm font-medium">
                                <button className="font-bold text-black">Featured</button>
                                <button className="text-gray-600 hover:text-black">On Sale</button>
                                <button className="text-gray-600 hover:text-black">Top Rated</button>
                            </div>
                            <div className="text-xs text-gray-600 cursor-pointer hover:underline">
                                View All Products &gt;
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-[#666666] my-2"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                        {products.map((product, index) => (
                            <div key={index} className="bg-white shadow-md rounded-xl border border-gray-200 p-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-32 object-contain mb-4"
                                />
                                <h2 className="text-sm font-semibold text-[#1d3b85]">{product.name}</h2>
                                <p className="text-xs text-gray-500">{product.description}</p>
                                <div className="flex items-center text-yellow-500 text-sm mt-2">
                                    {Array(5)
                                        .fill()
                                        .map((_, i) =>
                                            i < Math.floor(product.rating) ? (
                                                <FaStar key={i} />
                                            ) : i < product.rating ? (
                                                <FaStarHalfAlt key={i} />
                                            ) : (
                                                <FaRegStar key={i} />
                                            )
                                        )}
                                    <span className="text-gray-500 ml-2 text-xs">
                                        ({product.reviewCount})
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-lg font-semibold text-black">
                                        ₹{product.price.toLocaleString()}
                                    </span>
                                    <span className="text-sm line-through text-gray-400 ml-2">
                                        ₹{product.originalPrice.toLocaleString()}
                                    </span>
                                </div>
                                <div className="mt-2 text-xs text-gray-700">
                                    Get it <strong>{product.deliveryDate}</strong>
                                    <p className="text-[#ABA1A1]">{product.deliveryType}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
