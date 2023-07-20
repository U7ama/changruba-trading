import React from "react";
// import Client1 from "../../assets/client1.png";
// import Client4 from "../../assets/client4.png";
// import Client5 from "../../assets/client5.png";

const OurClients = () => {
  return (
    <div id="client" className="max-w-4xl my-[10px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
      </div>
      <div className="flex justify-center gap-8">
        <img
          className="w-24 h-24 object-cover hidden md:block lg:block"
          src="https://kktraderspakistan.com/wp-content/uploads/2023/06/EplaLabs.jpg"
          alt="Client 1"
        />
        <img
          className="w-24 h-24 object-cover hidden md:block lg:block"
          src="https://kktraderspakistan.com/wp-content/uploads/2023/06/NaheedSuperMarket.jpg"
          alt="Client 2"
        />
        <img
          className="w-24 h-24 object-cover"
          src="https://kktraderspakistan.com/wp-content/uploads/2023/06/PakPrecise.jpg"
          alt="Client 3"
        />
        <img
          className="w-24 h-24 object-cover"
          src="https://kktraderspakistan.com/wp-content/uploads/2023/06/MidasSafety.jpg"
          alt="Client 4"
        />
        <img
          className="w-24 h-24 object-cover"
          src="https://kktraderspakistan.com/wp-content/uploads/2023/06/AmreliSteels.jpg"
          alt="Client 5"
        />
      </div>
    </div>
  );
};

export default OurClients;
