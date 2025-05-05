import image7 from '../../assets/homepage7.png'
import image8 from '../../assets/homepage8.png'
import image9 from '../../assets/homepage9.png'


const PromoSection = () => {
    return (
        <div className=" w-full  mx-auto  py-10 flex flex-col md:flex-row gap-6 ">
            {/* Left Main Card */}
            <div className='md:w-1/2 w-full relative'>
                <div className="lg:col-span-1 bg-[#1e293b] rounded-2xl text-white flex  justify-between p-6 ">
                    <div className='w-1/2'>
                        <p className="text-[23.13px] mb-2">Rasberry Pie</p>
                        <h2 className="text-[58.45px] font-bold leading-tight mb-2">Case BB-3</h2>
                        <button className="bg-orange-400 text-white px-4 py-2 my-2 rounded-full font-semibold mb-4">
                            Discover Now
                        </button>
                        <p className="text-[12.49px] text-gray-300 py-2">BE THE FIRST TO OWN</p>
                        <p className="text-md font-medium ">From ₹399</p>
                    </div>
                    <div className='w-1/2 '>
                        <img
                            src={image7}
                            alt="Case BB-3"
                            className='rotate-180 tranform scale-x-[-1] right-0 object-contain absolute bottom-0 w-[300px] rounded-2xl'
                        />
                    </div>
                </div>
            </div>
            {/* Right Grid Cards */}
            <div className='md:w-1/2 w-full relative'>
                <div className=" grid sm:grid-cols-2 gap-4 ">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-blue-900 font-bold text-[34.83px]">3d Printer</p>
                           <p className="text-sm text-orange-500 mb-2">Parts</p>
                            <button className="bg-orange-400 text-white px-3 py-1 text-sm rounded-full">
                                Discover Now
                            </button>
                       </div>
                        <img
                            src={ image8}
                            className="w-40 h-auto object-contain absolute translate-x-1/3 left-36 top-12" />
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
                        <div>
                            <button className="bg-blue-900 text-white px-3 py-1 text-sm rounded-full mb-1">
                                Discover Now
                            </button>
                            <p className="text-sm text-orange-500">Parts</p>
                            <p className="text-blue-900 font-bold text-[34.83px]">Drone BB-3</p>
                        </div>
                        <img
                            src={image9}
                            alt="Drone"
                            className="w-40 h-auto object-contain absolute -top-7 -right-2"
                        />
                    </div>

                    {/* Card 3 (repeated like Card 2) */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
                        <div>
                            <button className="bg-blue-900 text-white px-3 py-1 text-sm rounded-full mb-1">
                                Discover Now
                            </button>
                            <p className="text-sm text-orange-500">Parts</p>
                            <p className="text-blue-900 font-bold text-[34.83px]">Drone BB-3</p>
                        </div>
                        <img
                            src={image9}
                            alt="Drone"
                            className="w-40 h-auto object-contain absolute translate-x-2/3 left-20 bottom-6"
                        />
                    </div>

                    {/* Card 4 (like Card 1) */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-blue-900 font-bold text-[34.83px]">3d Printer</p>
                           <p className="text-sm text-orange-500 mb-2">Parts</p>
                            <button className="bg-orange-400 text-white px-3 py-1 text-sm rounded-full">
                                Discover Now
                            </button>
                       </div>
                        <img
                            src={ image8}
                            className="w-40 h-auto object-contain absolute right-0 bottom-0" />
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default PromoSection;
