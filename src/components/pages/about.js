import React from "react";
import Image from "../../assets/4.png";

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full h-screen bg-amber-800">

      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">


        <img
          src={Image}
          alt="About Us"
          className="w-full h-auto object-cover rounded-tr-full rounded-bl-ful"
        />
      </div>



      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-800 mb-4">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            We understand that our customer is our most important asset and that without them, we could not succeed. This is why treat each and every customer as an extension of our family. We don’t have fancy sales people trying to pressure you into a high price purchase. We don’t have commission paid technicians to try to “upsell” you on services or parts that are not necessary. We provide quality services that you can count on. If we earn your trust, then we know that we have a customer for life.
            <br />
            <br />
            Our goal is to maintain a long-lasting relationship with our clients based on exceptional design and cost-effective solutions that meet our clients’ needs. We take all necessary measures to ensure a project’s success by striving to meet and exceed our client’s expectations. We can apply the necessary expertise to ensure your project is completed on time and to the highest professional standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
































