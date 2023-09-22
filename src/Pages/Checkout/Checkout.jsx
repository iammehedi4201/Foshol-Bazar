import React, { useContext, useEffect, useState } from "react";
import "./Checkout.css";
import pathaoLogo from "../../assets/Images/Delivery_Icon/pathao-seeklogo.com.svg";
import uberLogo from "../../assets/Images/Delivery_Icon/Uber_logo_2018.svg";
import { AuthContext } from "../../Providers/AuthProvider";
import CheckoutProductRow from "./CheckoutProductRow/CheckoutProductRow";
import { toast } from "react-hot-toast";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const [loadedCartItems, setLoadedCartItems] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState(""); //for delivery choose

  const modifiedCartItems = [];

  // const order={
  //     order:modifiedCartItems
  // }
  // console.log(order);

  for (const item of loadedCartItems) {
    const { userName, userEmail, ...rest } = item;
    modifiedCartItems.push(rest);
  }

  //handle select Delivey method
  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  //loading carts item
  useEffect(() => {
    fetch(`http://localhost:3000/cart-items?email=${user?.email}`,{
          method:"GET",
          headers:{
            authorization :`Bearer ${localStorage.getItem("bazar-access-token")}`
          }
    })
      .then((res) => res.json())
      .then((data) => {
        setLoadedCartItems(data);
      })
      .catch((error) => console.error(error));
  }, [user.email]);

  //Total Calculation
  let sumOfTotal = 0;
  let shippingCharge = 50;
  for (const order of loadedCartItems) {
    sumOfTotal = sumOfTotal + order.productPrice * order.productQuantity;
  }

  //handle orderInfo
  const hanldeOrderInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const address = form.address.value;
    const city = form.city.value;
    const phoneNumber = form.phoneNumber.value;
    const date = form.date.value;
    const paymentMethod = form.paymentMethod.value;
    const orderInfo = {
      customerName :user.displayName,
      customerEmail:user.email,
      phoneNumber,
      shippingAddress:{
        address,
        city
      },
      date,
      paymentMethod,
      deilveryMethod:selectedMethod,
      orderItems:modifiedCartItems,
      totalPrice :sumOfTotal 
    };

    fetch('http://localhost:3000/orders',{
          method:"POST",
          headers:{
             'content-type' : 'application/json'
          },
          body:JSON.stringify(orderInfo)
    })
    .then(res=>res.json())
    .then(data=>{
        if (data.insertedId) {
           toast.success("Order placed Successfully")
        }
    })
    .catch(error=>console.error(error))

  };

  return (
    <div>
      {/* page header  */}
      <section className="bg-green-700 relative bg-img">
        <div className="flex items-center justify-center max-w-screen-xl min-h-[40vh] mx-auto">
          <section className="z-10 space-y-4">
            <h1 className="text-white font-bold text-4xl">Foshol Bazar</h1>
            <p className="text-white font-bold text-xl text-center">Home \ </p>
          </section>
        </div>
        <div className="white-curve-after"></div>
        <div className="section-back-text">Checkout</div>
      </section>
      {/* ------------- */}
      <section className="bg-[#1d1c22]">
        <div className="max-w-screen-2xl min-h-[100vh] mx-auto p-5">
          <div className="pt-[80px]">
            {/* Order summary part */}
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 pt-2  p-10 ">
              <div className="p-10 pt-8 bg-[#1d1c22] rounded-l-lg h-auto shadow-inner shadow-green-500">
                <p className="text-xl font-bold text-teal-500 ">
                  Order Summary
                </p>
                <p className="text-white">
                  Check your items. And select a suitable shipping method.
                </p>
                {loadedCartItems.map((item) => (
                  <CheckoutProductRow
                    key={item._id}
                    item={item}
                  ></CheckoutProductRow>
                ))}

                {/* Shipping  part  */}

                <p className="mt-8 text-lg font-bold text-teal-500 ">
                  Shipping Methods
                </p>
                <form className="mt-5 grid gap-6">
                  <div className="relative text-black">
                    <input
                      className="peer hidden"
                      id="radio_1"
                      type="radio"
                      name="radio"
                      value="pathao"
                      checked={selectedMethod === "pathao"}
                      onChange={handleMethodChange}
                    />
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-red-400 peer-checked:bg-orange-200 bg-white flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      htmlFor="radio_1"
                    >
                      <img
                        className="w-14 object-contain"
                        src={pathaoLogo}
                        alt=""
                      />
                      <div className="ml-5">
                        <span className="mt-2 font-semibold">
                          Pathao Delivery
                        </span>
                        <p className="text-slate-900 font-medium text-sm leading-6">
                          Delivery: 2-4 Days
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="relative text-black">
                    <input
                      className="peer hidden"
                      id="radio_2"
                      type="radio"
                      name="radio"
                      value="uber"
                      checked={selectedMethod === "uber"}
                      onChange={handleMethodChange}
                    />
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-indigo-800 peer-checked:bg-orange-200 bg-white flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      htmlFor="radio_2"
                    >
                      <img
                        className="w-14 object-contain"
                        src={uberLogo}
                        alt=""
                      />
                      <div className="ml-5">
                        <span className="mt-2 font-semibold">
                          Uber Delivery
                        </span>
                        <p className="text-slate-900 font-medium text-sm leading-6">
                          Delivery: 2-4 Days
                        </p>
                      </div>
                    </label>
                  </div>
                </form>
              </div>

              {/* Payment part  */}

              <form onSubmit={hanldeOrderInfo}>
                <div className="mt-10 bg-[#1d1c22] p-10 pt-8 lg:mt-0 text-black rounded-r-lg  shadow-lg shadow-green-500">
                  <p className="text-xl text-teal-500  font-medium">
                    Payment Details
                  </p>
                  <p className="text-white">
                    Complete your order by providing your payment details.
                  </p>
                  <div>
                    <label
                      htmlFor="address"
                      className="mt-4 mb-2 block text-white text-lg font-medium tex"
                    >
                      Address
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full bg-white text-black font-semibold rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="khilgoan bashobo-175/6"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-900"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="relative flex">
                      <div className="sm:w-1/2 w-full">
                        <label
                          htmlFor="city"
                          className="mt-4 mb-2 block text-lg font-medium text-white"
                        >
                          city
                        </label>
                        <input
                          type="text"
                          name="city"
                          className="w-full bg-white  text-black font-semibold rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Enter City name "
                        />
                        <div className="pointer-events-none absolute inset-y-3.5 left-0 inline-flex items-end px-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="sm:w-1/2 w-full mx-2 items-end">
                        <label
                          htmlFor="city"
                          className="mt-4 mb-2 ml-4 block text-lg font-medium text-white"
                        >
                          Payment method
                        </label>
                        <select
                          name="paymentMethod"
                          className="select select-accent mx-2  w-full"
                        >
                          <option value={"Bikash"}>Bikash</option>
                          <option value={"Nogod"}>Nogod</option>
                        </select>
                      </div>
                    </div>

                    <div className=" sm:flex sm:justify-between">
                      <div className="relative sm:w-2/3 ">
                        <label
                          htmlFor="card-no"
                          className="mt-4 mb-2 block text-lg  font-medium text-white"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="phoneNumber"
                          name="phoneNumber"
                          className="w-full text-black font-semibold bg-white rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Your phone Number"
                        />
                        <div className="pointer-events-none absolute inset-y-3.5 left-0 inline-flex items-end px-3">
                          <svg
                            className="h-4 w-4 text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                          </svg>
                        </div>
                      </div>

                      <div className="">
                        <label
                          htmlFor="card-no"
                          className="mt-4 mb-2 block text-lg font-medium text-white"
                        >
                          Data
                        </label>
                        <input
                          type="date"
                          name="date"
                          className="w-full  text-black font-semiboldrounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="MM/YY"
                        />
                      </div>
                    </div>

                    {/* <!-- Total --> */}

                    <div className="mt-6 border-t border-b py-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-white">
                          Subtotal
                        </p>
                        <p className="font-semibold text-white">$560</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-white">
                          Shipping
                        </p>
                        <p className="font-semibold text-white">$100</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm font-medium text-white">Total</p>
                      <p className="text-2xl font-semibold text-white">
                        $1220.00
                      </p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 mb-8 w-full rounded-md bg-[#FF3811] px-6 py-3 font-medium text-white"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
