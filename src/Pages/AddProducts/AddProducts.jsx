import React from "react";
import { Link } from "react-router-dom";
import "./AddProduct.css";

const AddProducts = () => {
  return (
    <div>
      {/* page header  */}
      <section className="bg-emerald-700 relative bg-img">
        <div className="flex items-center justify-center max-w-screen-xl min-h-[40vh] mx-auto">
          <section className="z-10 space-y-4">
            <h1 className="text-white font-bold text-4xl">Foshol Bazar</h1>
            <p className="text-white font-bold text-xl text-center">Home \ </p>
          </section>
        </div>
        <div className="white-curve-after"></div>
        <div className="section-back-text">Add Products</div>
      </section>
      {/* ------------- */}
      <section className="bg-[#1d1c22]">
        <div className="flex items-center justify-center max-w-screen-xl min-h-screen mx-auto p-5">
          <div className="w-full">
            <div className="bg-gray-100 text-gray-500 shadow-2xl shadow-[#3a826f] w-full overflow-hidden">
              <div className="w-full">
                <div className="w-full  py-10 px-5 md:px-10 bg-[#1d1c22] shadow-inner shadow-[#01291e]">
                  <div className="text-center mb-10 space-y-2">
                    <h1 className="font-bold text-3xl text-emerald-700">
                      ADD PRODUCT
                    </h1>
                    <p className="text-gray-300 text-sm font-semibold">
                      Enter your Product Information
                    </p>
                  </div>
                  <div>
                    <form>
                      <div className="flex flex-col sm:flex-row -mx-3">
                        <div className="w-full sm:w-1/2  px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md text-white  font-bold px-1"
                          >
                           Seller Name
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              type="text"
                              name="productName"
                              className="w-full text-gray-100  bg-gray-600  -ml-10 pl-10 pr-3 py-2 mt-2 rounded-lg border-2 border-gray-600 outline-none focus:border-emerald-700"
                              placeholder="Mehedi hasan"
                            />
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2 px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md text-white font-bold px-1"
                          >
                            Seller Email 
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              type="email"
                              name="email"
                              className="w-full text-gray-100  bg-gray-600  -ml-10 pl-10 pr-3 py-2 mt-2 rounded-lg border-2 border-gray-600 outline-none focus:border-emerald-700"
                              placeholder="abc@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row -mx-3">
                        <div className="w-full sm:w-1/2  px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md text-white  font-bold px-1"
                          >
                            Product Name
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              type="text"
                              name="productName"
                              className="w-full text-gray-100  bg-gray-600  -ml-10 pl-10 pr-3 py-2 mt-2 rounded-lg border-2 border-gray-600 outline-none focus:border-emerald-700"
                              placeholder="Tometo"
                            />
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2 px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md text-white font-bold px-1"
                          >
                            Catagorey
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              type="text"
                              name="lastName"
                              className="w-full text-gray-100  bg-gray-600  -ml-10 pl-10 pr-3 py-2 mt-2 rounded-lg border-2 border-gray-600 outline-none focus:border-emerald-700"
                              placeholder="Vegitable"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row -mx-3">
                        <div className="w-full sm:w-1/2 px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md text-white  font-bold px-1"
                          >
                            Price
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              type="number"
                              name="price"
                              className="w-full text-gray-100  bg-gray-600  -ml-10 pl-10 pr-3 py-2 mt-2 rounded-lg border-2 border-gray-600 outline-none focus:border-emerald-700"
                              placeholder="$255"
                            />
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2 px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md text-white font-bold px-1"
                          >
                            Rating
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                             
                            </div>
                            <input
                              type="number"
                              name="rating"
                              className="w-full -ml-10 pl-10 pr-3 py-2 mt-2 text-gray-100  bg-gray-600 rounded-lg border-2 border-gray-600 outline-none focus:border-emerald-700"
                              placeholder="4.5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md font-semibold px-1 text-white"
                          >
                            PhotoURL
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            
                            </div>
                            <input
                              type="text"
                              name="photourl"
                              className="w-full text-gray-100  bg-gray-600  font-semibold -ml-10 mt-2 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-600 outline-none focus:border-emerald-700"
                              placeholder="https://i.ibb.co/CmdNfgx/Passport-Size.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                          <label
                            htmlFor=""
                            className="text-md font-semibold px-1 text-white"
                          >
                            Description
                          </label>
                          <div className="flex">
                            <textarea
                              id="description"
                              rows="8"
                              class="block p-2.5 w-full mt-2 text-md font-semibold text-gray-100  bg-gray-600 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Your description here"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      {/* <div className="flex -mx-3">
                        <div className="w-full px-3 mb-12">
                          <label
                            htmlFor=""
                            className="text-md text-white  font-bold px-1 mb"
                          >
                           File 
                          </label>
                          <div className="flex">
                            <div class="flex items-center justify-center w-full">
                              <label
                                for="dropzone-file"
                                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                              >
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                  <svg
                                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                  </svg>
                                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold">
                                      Click to upload
                                    </span>{" "}
                                    or drag and drop
                                  </p>
                                  <p class="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input
                                  id="dropzone-file"
                                  type="file"
                                  class="hidden"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                          <button
                            type="submit"
                            className="block w-full max-w-xs mx-auto bg-emerald-700 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                          >
                            ADD PRODUCT
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProducts;
