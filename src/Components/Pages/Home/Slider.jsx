import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full h-[80vh]">
        <div id="item1" className="carousel-item w-full slider1">
          <div className="flex ml-24 items-center w-full">
            <div>
              <h4 className="text-5xl text-white font-semibold">
                Harmony at your
                <br /> fingertips.
              </h4>
              <p className="text-yellow-600 text-lg font-semibold py-4">
                Discover the joy of learning music instruments online.
              </p>
              <div className="flex gap-4 items-center">
                <button className="hover:bg-black hover:text-white transition  bg-white text-black font-semibold rounded-sm py-2 px-3">
                  Subscribe
                </button>
                <button className="py-2 px-3 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:border-yellow-600 hover:text-white transition font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full slider2">
          <div className="flex ml-24 items-center w-full">
            <div>
              <h4 className="text-5xl text-white font-semibold">
                "Unlock your musical
                <br /> potential.
              </h4>
              <p className="text-yellow-600 text-lg font-semibold py-4">
                Master instruments with our expert guidance.
              </p>
              <div className="flex gap-4 items-center">
                <button className="hover:bg-black hover:text-white transition  bg-white text-black font-semibold rounded-sm py-2 px-3">
                  Subscribe
                </button>
                <button className="py-2 px-3 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:border-yellow-600 hover:text-white transition font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full slider3">
          <div className="flex ml-24 items-center w-full">
            <div>
              <h4 className="text-5xl text-white font-semibold">
                Begin your musical
                <br /> journey.
              </h4>
              <p className="text-yellow-600 text-lg font-semibold py-4">
                Learn music instruments online
              </p>
              <div className="flex gap-4 items-center">
                <button className="hover:bg-black hover:text-white transition  bg-white text-black font-semibold rounded-sm py-2 px-3">
                  Subscribe
                </button>
                <button className="py-2 px-3 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:border-yellow-600 hover:text-white transition font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full slider4">
          <div className="flex ml-24 items-center w-full">
            <div>
              <h4 className="text-5xl text-white font-semibold">
                Master the Art.
              </h4>
              <p className="text-yellow-600 text-lg font-semibold py-4">
                of playing music instruments from the comfort of your home.
              </p>
              <div className="flex gap-4 items-center">
                <button className="hover:bg-black hover:text-white transition  bg-white text-black font-semibold rounded-sm py-2 px-3">
                  Subscribe
                </button>
                <button className="py-2 px-3 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:border-yellow-600 hover:text-white transition font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Slider;
