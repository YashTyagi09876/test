import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import raspberry from '../../assets/rasperrybi.png';
import filtericon from '../../assets/filtericon.png';
const Product = () => {
    const products = Array(14).fill({
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
    const [price, setPrice] = useState(9999)
    const min = 50;
    const max = 9999;
 
 
    const handleSliderChange = (e) => {
        setPrice(Number(e.target.value));
    };
 
    // Calculate the percentage of how far the slider has moved
    const percentage = ((price - min) / (max - min)) * 100;
 
    const handleApply = () => {
        // Add your filtering logic here
        alert(`Filtering products below ₹${price}`);
    };
 
    return (
        <div className="flex gap-4 py-6 lg:px-12 md:px-10  mx-auto">
            {/* Sidebar - 25% */}
            <div className="w-1/4 p-4 bg-white h-auto rounded-3xl shadow-sm space-y-6">
                {/* Filter by Price */}
                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Filter by Price</h3>
 
                    {/* Range slider */}
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
                                appearance: 'none',
                                height: '6px',
                                borderRadius: '9999px',
                                outline: 'none',
                            }}
                        />
 
                        {/* Thumb styling */}
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
              position: relative;
              z-index: 10;
            }
            input[type="range"]::-moz-range-thumb {
              height: 16px;
              width: 16px;
              border-radius: 9999px;
              background: #F97316;
              cursor: pointer;
              position: relative;
              z-index: 10;
            }
          `}
                        </style>
                    </div>
 
                    {/* Price display and Apply button */}
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-sm font-semibold">Price: ₹{price} – ₹{max}</p>
                        <button className="px-4 py-1 text-sm bg-[#132D6A] rounded-3xl text-white  hover:bg-blue-700">
                            Apply
                        </button>
                    </div>
                </div>
 
 
 
                {/* Filter by Price Ranges */}
                <div>
                    <h3 className="bg-[#f7941d] rounded-3xl text-white px-4 py-2 text-sm font-medium mb-2">
                        Filter by Price
                    </h3>
                    <ul className="space-y-1 text-sm">
                        {[
                            'Under ₹500',
                            '₹500 - ₹999',
                            '₹1000 - ₹1999',
                            '₹2000 - ₹4999',
                            '₹5000 - ₹9999',
                            'Over ₹10000',
                        ].map((label, index) => (
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
 
                {/* Filter by Categories */}
                <div>
                    <h3 className="bg-[#f7941d] rounded-3xl text-white px-4 py-2 text-sm font-medium mb-2">
                        Filter by Categories
                    </h3>
                    <ul className="space-y-1 text-sm">
                        {Array(6)
                            .fill('Drone Parts')
                            .map((label, index) => (
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
 
                {/* Filter by Color */}
                <div>
                    <h3 className="bg-[#f7941d] rounded-3xl text-white px-4 py-2  text-sm font-medium mb-2">
                        Filter by Color
                    </h3>
                    <ul className="space-y-1 text-sm">
                        {['White', 'Black', 'Grey', 'Brown', 'Blue', 'Green'].map(
                            (color, index) => (
                                <li key={index} className="flex justify-between">
                                    <label>
                                        <input type="checkbox" className="mr-2" />
                                        {color}
                                    </label>
                                    <span>(2)</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
 
                {/* Filter by Brand */}
                <div>
                    <h3 className="bg-[#f7941d] rounded-3xl text-white px-4 py-2  text-sm font-medium mb-2">
                        Filter by Brand
                    </h3>
                    <div className="grid grid-cols-3 space-x-1">
                        {Array(6)
                            .fill('Raspberry Pi')  
                            .map((brand, index) => (
 
                                <span
                                    key={index}
                                    className="flex gap-2 items-center bg-gray-200 text-xs px-4 py-2 rounded-3xl"
                                >
                                      <img src={filtericon} className='w-6 h-6' alt='filtericon' />
                                    {brand}
                                 
                                </span>
                                 
                            ))}
                    </div>
                </div>
            </div>
 
            {/* Product Grid - 75% */}
            <div className="w-3/4 bg-white  ">
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
                   
                    <div className=" w-full h-[1px] bg-[#666666] my-2"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl border border-gray-200 p-4"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-32 object-contain mb-4"
                            />
 
                            <h2 className="text-sm font-semibold text-[#1d3b85]">{product.name}</h2>
                            <p className="text-xs text-gray-500">{product.description}</p>
 
                            {/* Rating */}
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
 
                            {/* Price */}
                            <div className="mt-2">
                                <span className="text-lg font-semibold text-black">
                                    ₹{product.price.toLocaleString()}
                                </span>
                                <span className="text-sm line-through text-gray-400 ml-2">
                                    ₹{product.originalPrice.toLocaleString()}
                                </span>
                            </div>
 
                            {/* Delivery */}
                            <div className="mt-2 text-xs text-gray-700">
                                Get it <strong>{product.deliveryDate}</strong>
                                <p className="text-[#ABA1A1]">{product.deliveryType}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
 
export default Product;