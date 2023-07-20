import React from "react";
import Image from "../../assets/main.png";

const HomePage = () => {
  const handleGetStarted = (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    // Validate the email address (optional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Open the email app or Gmail in a new tab
    const emailLink = `mailto:${email}`;
    window.open(emailLink, "_blank");
  };

  return (
    <div id="home" className="w-full min-h-screen p-8 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto md:flex md:flex-row-reverse md:items-center">
        <div className="md:w-1/2 md:pr-8 my-11">
          <img
            src="https://media.istockphoto.com/id/1318116805/photo/logistics-team-walking-together-in-inland-port.webp?b=1&s=170667a&w=0&k=20&c=jsB1jac4vshQebgeEzsVs7RW-k-z4m32gYZAvuqBUIw="
            alt="Home"
            className="w-full h-auto object-cover rounded-tr-full rounded-bl-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Who are <span className="text-amber-800">we ?</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              For 35 years, we have provided exceptional service to a variety of clients in the residential and private sectors.We want to be the only contractor that you need to call by providing an array of services within our company and are devoted to providing excellent customer.
            </p>

            <div className="text-center md:text-left">
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your Email"
                  className="px-4 py-2 bg-white rounded-full shadow-lg focus:outline-none"
                />
                <button
                  onClick={handleGetStarted}
                  className="px-6 py-3 bg-amber-800 text-white rounded-full shadow-lg hover:bg-amber-900"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
