import React from "react";
import Imagee from "../../assets/1.png";
import Imageee from "../../assets/2.png";
import Imageeee from "../../assets/3.png";

const Features = () => {
  return (
    <div id="feature" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured <span className="text-amber-800">Products</span></h2>
        <p className="text-lg text-gray-700 mb-8">
          Here are some of our featured products:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white'>
            <div className="bg-white rounded-lg shadow-lg">
              <img src="https://kktraderspakistan.com/wp-content/uploads/2023/06/sloan_logo.png" alt="Property" className="w-full max-h-64 rounded-t-lg h-1/3 md:h-64 border border-[#73767a]" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">SLOAN LUBRICANTS</h3>
                <p className="text-sm text-gray-500">For over 28 years, Sloan International Inc. U.S.A. have been developing specialized and comprehensive range of hi-temperature lubricants, protective coatings, anti-seize compounds and other workshop aids, which are specially formulated to provide an answer to the problems related to loss of production reliability, high maintenance charges and wasted energy.</p>
              </div>
            </div>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white'>
            <div className="bg-white rounded-lg shadow-lg">
              <img src="https://kktraderspakistan.com/wp-content/uploads/2023/06/KSP-Logo.png" alt="Property" className="w-full max-h-64 rounded-t-lg h-1/3 md:h-64 border border-[#73767a]" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">K.S.Paul Products</h3>
                <p className="text-sm text-gray-500">KS Paul is well known for unique range of high-performance lubricants for open gears, bearings or kilns in the cement and mining industries, low-temperature greases for arctic environments, NSF H1-registered lubricants for the food and beverage industry, bearing greases for the most economical long-term lubrication of wind turbines or sophisticated metal forming lubricants for outstanding parts quality in the forging industry, in particular for the most demanding applications</p>
              </div>
            </div>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white'>
            <div className="bg-white rounded-lg shadow-lg">
              <img src="https://kktraderspakistan.com/wp-content/uploads/2023/06/at_logo_small.png" alt="Property" className="w-full max-h-64 rounded-t-lg h-1/3 md:h-64 border border-[#73767a]" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">A.T Chemicals PTE Limited​</h3>
                <p className="text-sm text-gray-500">A.T Chemicals have been developing a specialized and comprehensive range of water-soluble heavy duty multipurpose electronic/industrial cleaner/degreaser that is unbeatable for any though cleaning job and gentle on the environment. They are effective at cutting grease, grime, paint, ink and adhesive etc. Mild on the skin, without sacrificing cleaning power.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;




























