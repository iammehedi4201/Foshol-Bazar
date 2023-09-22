import React from "react";
import "./Carasoul.css";
import imgOne from "../../../assets/Images/carasoul-img/banana.png";
import imgTwo from "../../../assets/Images/carasoul-img/fruits-plate.png";
import imgThree from "../../../assets/Images/carasoul-img/plate-2.png";
import imgFour from "../../../assets/Images/carasoul-img/plate.png";

const Carasoul = () => {
  const carasoulButton = (
    <div className="flex justify-center w-full py-2 gap-2 absolute bottom-5">
      <a
        href="#item1"
        className="btn shadow-2xl sm:w-20  btn-success hover:bg-green-400"
      >
        1
      </a>
      <a
        href="#item2"
        className="btn shadow-2xl sm:w-20  btn-success hover:bg-green-400"
      >
        2
      </a>
      <a
        href="#item3"
        className="btn shadow-2xl sm:w-20  btn-success hover:bg-green-400"
      >
        3
      </a>
      <a
        href="#item4"
        className="btn shadow-2xl sm:w-20  btn-success hover:bg-green-400"
      >
        4
      </a>
    </div>
  );

  return (
    <div>
      <div className="carousel w-full ">
        <div
          id="item1"
          className="carousel-item w-full min-h-screen bg-[#98c869] relative"
        >
          <div className="max-w-screen-xl min-h-screen sm:flex justify-center items-center mx-auto p-5 relative  shadow-lg shadow-red-800 m-5">
            <div className="space-y-3 sm:w-1/2 sm:p-20">
              <h1 className="font-bold text-white">
                Banana{" "}
                <span className="text-[#ff736a] font-bold"> Every Day </span>
              </h1>
              <h3 className="text-white text-lg font-medium">
                Product crafted with care
              </h3>
              <p className="text-white text-sm">
                Bred for a high content of beneficial substances. Our products
                are all fresh and healthy.
              </p>
              <button className="btn btn-outline btn-wide">Shop</button>
            </div>
            <div className="sm:w-1/2">
              <img src={imgOne} className="sm:w-3/4 mx-auto" />
            </div>
          </div>

          <div className="section-back-text">Fresh</div>
          {carasoulButton}
        </div>
        {/* carasoul item-2 */}
        <div
          id="item2"
          className="carousel-item min-h-screen w-full bg-[#ffb524] relative"
        >
          <div className="max-w-screen-xl sm:flex justify-center items-center mx-auto p-5 relative shadow-lg shadow-red-800 m-5 ">
            <div className="space-y-3 sm:w-1/2 sm:p-20">
              <h1 className="font-bold text-white text-4xl">
                Save on all Products
                <br />
                <span className="text-red-500 font-bold "> 45% OFF </span>
              </h1>
              <h3 className="text-white text-lg font-medium">
                Product crafted with care
              </h3>
              <p className="text-white text-sm">
                Bred for a high content of beneficial substances. Our products
                are all fresh and healthy.
              </p>
              <button className="btn btn-outline btn-wide">Shop</button>
            </div>
            <div className="sm:w-1/2">
              <img src={imgTwo} className="sm:w-3/4 mx-auto" />
            </div>
          </div>
          <div className="section-back-text">Organic</div>
          {carasoulButton}
        </div>
        {/* carasoul item-3 */}
        <div id="item3" className="carousel-item w-full bg-[#ff6a8e] relative">
          <div className="max-w-screen-xl min-h-screen sm:flex justify-center items-center mx-auto p-5 relative shadow-lg shadow-red-800 m-5">
            <div className="space-y-3 sm:w-1/2 p-20">
              <h1 className="font-bold text-white">
                Organic Food
                <span className="text-[#ffb524] font-bold"> Every Day </span>
              </h1>
              <h3 className="text-white text-lg font-medium">
                Product crafted with care
              </h3>
              <p className="text-white text-sm">
                Bred for a high content of beneficial substances. Our products
                are all fresh and healthy.
              </p>
              <button className="btn btn-outline btn-wide">Shop</button>
            </div>
            <div className="sm:w-1/2">
              <img src={imgThree} className="sm:w-3/4 mx-auto " />
            </div>
          </div>
          {carasoulButton}
        </div>
        {/* carasoul item-4 */}
        <div id="item4" className="carousel-item w-full bg-[#ff736a] relative">
          <div className="max-w-screen-xl min-h-screen sm:flex justify-center items-center mx-auto p-5 relative shadow-lg shadow-red-800 m-5">
            <div className="space-y-3 sm:w-1/2 p-20">
              <h1 className="font-bold text-white">
                Healthy Food
                <span className="text-[#98c869] font-bold"> Delivery</span>
              </h1>
              <h3 className="text-white text-lg font-medium">
                Product crafted with care
              </h3>
              <p className="text-white text-sm">
                Bred for a high content of beneficial substances. Our products
                are all fresh and healthy.
              </p>
              <button className="btn btn-outline btn-wide">Shop</button>
            </div>
            <div className="sm:w-1/2">
              <img src={imgFour} className="sm:w-3/5 mx-auto" />
            </div>
          </div>
          <div className="section-back-text">Fresh</div>
          {carasoulButton}
        </div>
      </div>
    </div>
  );
};

export default Carasoul;
