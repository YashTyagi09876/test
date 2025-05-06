import React, { useEffect, useState } from 'react';
 import image1 from '../../assets/elect.png'
const slides = [
  {
    title: 'RasBerry Pie Parts',
    subtitle: 'Rasberry Pie 3–7',
    price: '₹4,000',
    image: image1, // Replace with your real image URL
    product: {
      title: 'Rasberry Pie 4 With Wifi',
      rating: 4,
      reviews: 15,
      price: 4029.5,
      originalPrice: 4999,
      sold: 24,
      total: 80,
      img: 'https://i.ibb.co/pvvJ1z8/raspberry-card.jpg', // Replace with product card image
    },
  },
  {
    title: 'RasBerry Pie Parts',
    subtitle: 'Rasberry Pie 3–7',
    price: '₹4,000',
    image: image1, // Replace with your real image URL
    product: {
      title: 'Rasberry Pie 4 With Wifi',
      rating: 4,
      reviews: 15,
      price: 4029.5,
      originalPrice: 4999,
      sold: 24,
      total: 80,
      img: 'https://i.ibb.co/pvvJ1z8/raspberry-card.jpg', // Replace with product card image
    },
  },
  {
    title: 'RasBerry Pie Parts',
    subtitle: 'Rasberry Pie 3–7',
    price: '₹4,000',
    image: image1, // Replace with your real image URL
    product: {
      title: 'Rasberry Pie 4 With Wifi',
      rating: 4,
      reviews: 15,
      price: 4029.5,
      originalPrice: 4999,
      sold: 24,
      total: 80,
      img: 'https://i.ibb.co/pvvJ1z8/raspberry-card.jpg', // Replace with product card image
    },
  },
  {
    title: 'RasBerry Pie Parts',
    subtitle: 'Rasberry Pie 3–7',
    price: '₹4,000',
    image:image1, // Replace with your real image URL
    product: {
      title: 'Rasberry Pie 4 With Wifi',
      rating: 4,
      reviews: 15,
      price: 4029.5,
      originalPrice: 4999,
      sold: 24,
      total: 80,
      img: 'https://i.ibb.co/pvvJ1z8/raspberry-card.jpg', // Replace with product card image
    },
  }
  // Add more slides if needed
];
 
export default function RaspberrySlider() {
  const [current, setCurrent] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);
 
  const slide = slides[current];
 
  return (
    <div className="flex flex-col  items-center justify-center  py-10 bg-white md:px-6 lg:px-10 ">
      <div className="w-full  flex gap-10 lg:h-[406px] h-auto items-center">
        {/* Left Slide */}
        <div className="lg:w-[80%] w-full  h-full bg-[#002F6C] rounded-xl  p-4 text-white flex flex-col relative ">
          <div className='px-6 pt-2'>
          <h2 className="lg:text-[57.11px] md:text-[40px]  font-bold mb-1 ">{slide.title}</h2>
          <p className="text-xl text-cyan-400 mb-6">{slide.subtitle}</p>
          <p className="text-base font-medium mb-1">Starting From</p>
          <p className="text-4xl font-bold text-white mb-6">{slide.price}</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full w-36 text-sm">
            Shop Now
          </button>
          </div>
          <img
            src={slide.image}
            alt="Raspberry Slide"
            className="absolute  rotate-360 tranform scale-x-[-1]     right-0 object-contain bottom-0  rounded-2xl xl:w-[600px] sm:w-[400px] w-[200px]   "
          />
        </div>
 
        {/* Right Product Card */}
        <div className="w-[20%] h-full bg-white p-4 lg:flex justify-center items-center hidden  ">
          <div className="border border-gray-200 rounded-lg p-4 w-full max-w-xs">
            <div className="relative mb-4">
              <img
                src={slide.product.img}
                alt="Product"
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="font-medium text-sm">{slide.product.title}</h3>
            <div className="flex items-center mt-1">
              <div className="flex text-blue-500">
                {'★'.repeat(slide.product.rating)}
                {'☆'.repeat(5 - slide.product.rating)}
              </div>
              <span className="ml-1 text-gray-500 text-xs">({slide.product.reviews})</span>
            </div>
            <div className="mt-2">
              <span className="text-lg font-bold text-gray-900">
                ₹{slide.product.price.toLocaleString()}
              </span>
              <span className="text-sm line-through text-gray-400 ml-2">
                ₹{slide.product.originalPrice.toLocaleString()}
              </span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Sold: {slide.product.sold} / {slide.product.total}
            </div>
            <button className="mt-4 w-full border border-gray-300 rounded flex items-center justify-center gap-2 py-2 text-sm font-medium hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
     
      {/* Slider indicators */}
      <div className="flex gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-8 h-2 rounded-full ${index === current ? 'bg-[#002F6C]' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}
 