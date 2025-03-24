import React from "react";

const DigitalServices = () => {
  return (
    <>
      <section className="ourWorks py-10 sm:py-20 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
        
        <div className="py-5 order-1 lg:order-none max-w-90"> 
          <p className="text-2xl sm:text-3xl font-bold text-center lg:text-left">
            We Offer a Full Range of Digital Marketing Services!
          </p>
          <div className="text pt-4 text-center lg:text-left">
            <p>
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
              consectetuer turpis, suspendisse.
            </p>
          </div>
          <div className="text pt-4 text-center lg:text-left">
            <p>
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
              consectetuer turpis, suspendisse.
            </p>
          </div>
        </div>

        <div className="flex justify-center order-2 lg:order-none">
          <img 
            src="https://themewagon.github.io/simple/images/Group1.png" 
            alt="thumbnail" 
            className="w-full max-w-sm"
          />
        </div>

        <div className="flex justify-center order-4 lg:order-none">
          <img 
            src="https://themewagon.github.io/simple/images/Group2.png" 
            alt="thumbnail" 
            className="w-full max-w-sm"
          />
        </div>

        <div className="py-5 order-3 lg:order-none max-w-90"> 
          <p className="text-2xl sm:text-3xl font-bold text-center lg:text-left">
            Leading Digital Agency for Business Solution.
          </p>
          <div className="text pt-4 text-center lg:text-left">
            <p>
              Power-packed with impressive features and well-optimized, this template is designed to provide the best performance in all circumstances.
            </p>
          </div>
          <div className="text pt-4 text-center lg:text-left">
            <p>
              Its smart features make it a powerful stand-alone website building tool.
            </p>
          </div>
          <div className="text-center lg:text-left">
            <button 
              className="bg-blue-500 text-white px-4 py-2 mt-6 rounded-sm hover:bg-transparent hover:text-blue-500 border border-blue-500 cursor-pointer transition-all duration-300"
            >
              Read More
            </button>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default DigitalServices;
