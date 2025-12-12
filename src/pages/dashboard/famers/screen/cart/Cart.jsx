import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import DeleteIcon from "../../../../../Components/iconComponent/DeleteIcon";
import tomatoes from "../../../../../assets/images/Fresh Tomatoes.png";
import maize from "../../../../../assets/images/Maize.webp";
import potatoes from "../../../../../assets/images/potato.png";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      image: tomatoes,
      name: "Fresh Red Tomatoes",
      seller: "Farm Fresh Co",
      price: "15,500",
      quantity: 1,
    },
    {
      id: 2,
      image: maize,
      name: "Organic Yellow Maize",
      seller: "Green Valley Farms",
      price: "10,500",
      quantity: 5,
    },
    {
      id: 3,
      image: potatoes,
      name: "Premium Sweet Potatoes",
      seller: "Seller: Garden Prime",
      price: "9,500",
      quantity: 5,
    },
  ];

  const summaryData = [
    { label: "Subtotal", amount: 32100 },
    { label: "Shipping Fee", amount: 2000 },
    { label: "Tax (5%)", amount: 1605 },
  ];

  return (
    <DashboardLayout>
      <h2 className="text-2xl sm:text-3xl md:text-[32px] font-normal">Shopping Cart</h2>
      <p className="text-sm sm:text-base md:text-lg font-normal">3 items in your cart.</p>

      {/* WRAPPER */}
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[41px] mt-6">

        {/* LEFT ITEMS */}
        <div className="w-full lg:w-[65%]">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="px-4 sm:px-6 py-6 sm:py-[60px] shadow-md bg-white rounded-lg 
              flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-[11px] mb-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[120px] sm:w-[144px] h-[100px] sm:h-[109px] object-cover rounded-md mx-auto sm:mx-0"
              />

              <div className="flex-1 text-center sm:text-left">
                <p className="font-normal text-sm sm:text-base md:text-lg">{item.name}</p>
                <p className="text-xs sm:text-sm text-gray-500">Seller: {item.seller}</p>
                <p className="text-green-500 font-medium text-xs sm:text-sm md:text-[14px] mt-1">
                  ₦{item.price.toLocaleString()}
                </p>

                <div className="flex border border-gray-400 w-max mx-auto sm:mx-0 mt-3 font-medium rounded-lg justify-center items-center gap-3 px-4 py-1 text-sm sm:text-base">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
              </div>

              <div className="mx-auto sm:mx-0">
                <DeleteIcon />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="bg-white rounded-lg shadow-md w-full lg:w-[32%] h-fit">
          <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md w-full">
            <h2 className="font-semibold text-base sm:text-lg md:text-xl mb-5">Order Summary</h2>

            <div className="space-y-3 text-sm sm:text-base md:text-[16px]">
              {summaryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p>{item.label}</p>
                  <p className="font-medium">₦{item.amount.toLocaleString()}</p>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            <div className="flex justify-between items-center text-base sm:text-lg md:text-xl font-semibold">
              <p>Total</p>
              <p className="text-green-600">
                ₦{summaryData.reduce((a, b) => a + b.amount, 0).toLocaleString()}
              </p>
            </div>

            <input
              type="text"
              placeholder="Promo Code"
              className="border w-full mt-5 p-3 rounded-md focus:outline-none text-sm sm:text-base md:text-[16px]"
            />

            <button className="w-full border p-3 rounded-md mt-3 text-sm sm:text-base md:text-[16px]">
              Apply Code
            </button>

            <button className="w-full bg-green-500 text-white p-3 rounded-md mt-4 text-sm sm:text-base md:text-[16px]">
              Proceed to Checkout
            </button>

            <button className="w-full border p-3 rounded-md mt-3 text-sm sm:text-base md:text-[16px]">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Cart;
