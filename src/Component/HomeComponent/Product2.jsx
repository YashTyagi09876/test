// import React from "react";
// import { FaArrowLeft } from "react-icons/fa";
// // import check from "../../assets/";
// import product from "../../assets/product.png";
// // import cart from "../../assets/cart.png";
// import shop from "../../assets/shop.png";
// export default function ProductCard() {
//   return (
//    <div className='bg-white'>
//     <div className="w-full md:w-[70%] flex md:flex-row flex-col items-center justify-between bg-white text-[#002e6e] text-sm font-medium px-4 py-2  rounded-md shadow-sm">
//       {/* Left Section */}
//       <div className="flex items-center gap-3">
//         <button className="w-7 h-7 flex items-center justify-center bg-orange-500 text-white rounded-full">
//           <FaArrowLeft size={12} />
//         </button>
//         <span>
//           Back to previous page | Listed in category:{" "}
//           <span className="font-semibold">Raspberry Pi 4 (With Wifi)</span>
//         </span>
//       </div>
 
//       {/* Right Section (Title) */}
//       <div className="text-[#002e6e] font-semibold whitespace-nowrap">
//         Raspberry Pi 4 (With Wifi)
//       </div>
//     </div>
//     <div className="w-full  p-6 rounded-lg h-auto flex flex-col md:flex-row gap-8 bg-white">
//       {/* Left: Images */}
 
//       <div className="w-full flex md:flex-row flex-col md:w-[60%] gap-4 mt-6 pl-10">
//         <div className='w-full md:w-[496px] md:h-[525px]'>
//           <img
//             src={product}
//             alt="Raspberry Pi"
//             className="w-full rounded-md border"
//           />
//         </div>
 
//         <div className="flex md:flex-col flex-row gap-4 ">
//           {[1, 2, 3, 4].map((_, i) => (
//             <img
//               key={i}
//               src={product}
//               alt="thumb"
//               className=" w-[70px] h-[60px] md:w-[110px] md:h-[115px] border rounded-md"
//             />
//           ))}
//         </div>
//       </div>
 
//       {/* Right: Details */}
//       <div className="w-full md:w-[40%] mx-auto p-5 bg-white space-y-4 text-[#1b1b1b] font-sans">
//         {/* Title & Tag */}
//         <div className="flex md:flex-row flex-col gap-2 items-center">
//           <h1 className="text-lg font-semibold">Raspberry Pi 4 (With Wifi )</h1>
//           <span className="bg-gray-100 text-sm font-semibold px-8 py-2 rounded-full">16 Gb</span>
 
//         </div>
//         <p className="text-xs text-gray-500">Free 2 Days Shipping | 1 Year Warranty</p>
 
 
//         {/* Shipping & Warranty */}
 
//         {/* Rating */}
//         <div className="flex items-center gap-2 text-sm">
//           <div className="flex text-yellow-400 text-base">★★★★★</div>
//           <p className="text-gray-500">4.5 from 392 Reviews</p>
//         </div>
 
//         {/* Pricing */}
//         <div className="flex items-center gap-3">
//           <p className="text-2xl font-bold text-[#ff5e00]">Rs 50,080</p>
//           <span className="line-through text-gray-400">₹3,029.50</span>
//         </div>
 
//         {/* Model Numbers */}
//         <div>
//           <p className="font-semibold mb-1 text-sm">Model Number</p>
//           <div className="flex gap-2">
//             <button className="px-4 py-1 text-sm bg-orange-500 text-white rounded-md">Hh3</button>
//             <button className="px-4 py-1 text-sm border border-gray-300 rounded-md">Gh2</button>
//           </div>
//         </div>
 
//         {/* Colors */}
//         <div>
//           <p className="font-semibold mb-1 text-sm">Colour</p>
//           <div className="flex gap-4">
//             <div className="flex items-center gap-2 text-sm">
//               <span className="w-5 h-5 rounded-full border border-gray-400 bg-black"></span> Black
//             </div>
//             <div className="flex items-center gap-2 text-sm">
//               <span className="w-5 h-5 rounded-full border border-gray-400 bg-green-600"></span> Green
//             </div>
//             <div className="flex items-center gap-2 text-sm">
//               <span className="w-5 h-5 rounded-full border border-gray-400 bg-blue-700"></span> Blue
//             </div>
//           </div>
//         </div>
 
//         {/* Features */}
//         <div className="space-y-2 text-sm text-[#1b1b1b]">
//           <div className="flex items-center gap-2">
//             {/* <img src={check} alt="check" className="w-4 h-4" /> */}
//             Central Processing Unit (CPU)
//           </div>
//           <div className="flex items-center gap-2">
//             {/* <img src={check} alt="check" className="w-4 h-4" /> */}
//             Memory Unit
//           </div>
//           <div className="flex items-center gap-2">
//             {/* <img src={check} alt="check" className="w-4 h-4" /> */}
//             SD Card Slot
//           </div>
//         </div>
 
//         {/* Sold avatars & count */}
//         <div className="flex items-center gap-2 text-sm">
//           <div className="flex -space-x-2">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <img
//                 key={i}
//                 src={`https://randomuser.me/api/portraits/thumb/men/${i}.jpg`}
//                 alt="user"
//                 className="w-6 h-6 rounded-full border-2 border-white"
//               />
//             ))}
//           </div>
//           <p className="text-gray-600">1,241 Sold in the last 24 hours</p>
//         </div>
 
//         {/* Buy Now Button */}
//         <div className='flex items-center gap-2'>
//           <button className="w-[30%] bg-[#002e6e] hover:bg-[#003b85] text-white py-3 rounded-lg flex justify-center items-center gap-3">
 
//             <span className="text-sm font-medium">Buy Now</span>
//             <img src={shop} className='w-4 h-4' />
//           </button>
//           {/* <img src={cart} alt="cart" className="w-10 h-10" /> */}
//         </div>
 
//       </div>
 
//     </div>
//     </div>
//   );
// }
 
import React from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import shop from "../../assets/shop.png";
import { servicesData } from "./data";

export default function ProductCard() {
  const { id } = useParams();
  const selectedCase = servicesData.find((data) => data.id === id);

  if (!selectedCase) {
    return (
      <div className="p-10 text-red-500 font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="w-full md:w-[70%] flex md:flex-row flex-col items-center justify-between text-[#002e6e] text-sm font-medium px-4 py-2 rounded-md shadow-sm">
        <div className="flex items-center gap-3">
          <button className="w-7 h-7 flex items-center justify-center bg-orange-500 text-white rounded-full">
            <FaArrowLeft size={12} />
          </button>
          <span>
            Back to previous page | Listed in category:{" "}
            <span className="font-semibold">{selectedCase.title}</span>
          </span>
        </div>
        <div className="text-[#002e6e] font-semibold whitespace-nowrap">
          {selectedCase.title}
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full p-6 flex flex-col md:flex-row gap-8">
        {/* Left: Images */}
        <div className="w-full md:w-[60%] flex flex-col md:flex-row gap-4 mt-6 pl-10">
          <div className="w-full md:w-[496px] md:h-[525px]">
            <img
              src={selectedCase.image}
              alt={selectedCase.title}
              className="w-full rounded-md border"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-4">
            {selectedCase.thumbnails.map((thumb, i) => (
              <img
                key={i}
                src={thumb}
                alt={`thumb-${i}`}
                className="w-[70px] h-[60px] md:w-[110px] md:h-[115px] border rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-[40%] p-5 space-y-4 text-[#1b1b1b] font-sans">
          {/* Title & Tag */}
          <div className="flex md:flex-row flex-col gap-2 items-center">
            <h1 className="text-lg font-semibold">{selectedCase.title}</h1>
            <span className="bg-gray-100 text-sm font-semibold px-8 py-2 rounded-full">
              {selectedCase.size}
            </span>
          </div>
          <p className="text-xs text-gray-500">
            Free 2 Days Shipping | 1 Year Warranty
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex text-yellow-400 text-base">★★★★★</div>
            <p className="text-gray-500">
              {selectedCase.rating} from {selectedCase.reviews} Reviews
            </p>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold text-[#ff5e00]">
              {selectedCase.price}
            </p>
            <span className="line-through text-gray-400">
              {selectedCase.oldPrice}
            </span>
          </div>

          {/* Model Numbers */}
          <div>
            <p className="font-semibold mb-1 text-sm">Model Number</p>
            <div className="flex gap-2">
              {selectedCase.modelNumbers.map((model, index) => (
                <button
                  key={index}
                  className={`px-4 py-1 text-sm rounded-md ${
                    index === 0
                      ? "bg-orange-500 text-white"
                      : "border border-gray-300"
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <p className="font-semibold mb-1 text-sm">Colour</p>
            <div className="flex gap-4">
              {selectedCase.colors.map((color, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm capitalize"
                >
                  <span
                    className="w-5 h-5 rounded-full border border-gray-400"
                    style={{ backgroundColor: color }}
                  ></span>
                  {color}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2 text-sm">
            {selectedCase.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <span>✔</span>
                {feature}
              </div>
            ))}
          </div>

          {/* Sold Info */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/thumb/men/${i}.jpg`}
                  alt="user"
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-gray-600">
              {selectedCase.sold} Sold in the last 24 hours
            </p>
          </div>

          {/* Buy Now */}
          <div className="flex items-center gap-2">
            <button className="w-[30%] bg-[#002e6e] hover:bg-[#003b85] text-white py-3 rounded-lg flex justify-center items-center gap-3">
              <span className="text-sm font-medium">Buy Now</span>
              <img src={shop} alt="shop icon" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

















