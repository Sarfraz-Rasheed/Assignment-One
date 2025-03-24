import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full p-10 bg-gray-100 flex justify-center items-center min-h-[80vh]">
        <div className="text-center max-w-3xl">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Search engine optimisation & <br className="hidden sm:block" />{" "}
            Marketing.
          </h1>

          {/* Description */}
          <p className="text-gray-500 mt-4 text-sm sm:text-base px-4 sm:px-0">
            Simple is a simple template with a creative design that solves all
            your marketing and SEO queries.
          </p>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-4 mt-5 flex-wrap">
            <button className="bg-[#fec4af] text-[#fc7341] text-sm px-6 py-3 rounded-sm border-2 border-transparent hover:bg-white hover:text-[#fc7341] hover:border-[#fc7341] cursor-pointer transition-all duration-300">
              Get Started
            </button>
            <button className="bg-[#b7eddd] text-[#5ed6b3] text-sm px-6 py-3 rounded-sm border-2 border-transparent hover:bg-white hover:text-[#5ed6b3] hover:border-[#5ed6b3] cursor-pointer transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center mt-8">
            <img
              src="https://themewagon.github.io/simple/images/Group171.svg"
              alt="thumbnail"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
