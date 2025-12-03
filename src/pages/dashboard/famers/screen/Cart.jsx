import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import DeleteIcon from "../../../../Components/iconComponent/DeleteIcon";
import tomatoes from "../../../../assets/images/Fresh Tomatoes.png";
import maize from "../../../../assets/images/Maize.webp";
import potatoes from "../../../../assets/images/potato.png";

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
      seller: "Seller: Garden Prime",
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
      <h2 className="text-[32px] font-normal">Shopping Cart</h2>
      <p className="text-base font-normal">3 items in your cart.</p>
      <div className="w-full flex gap-[41px] mt-6">
        {/* Left Items */}
        <div className="w-[65%]">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className=" px-6 py-[60px] shadow-md bg-white rounded-lg flex items-end gap-[11px] mb-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[144px] h-[109px] object-cover rounded-md"
              />

              <div className="flex-1">
                <p className="font-normal text-base">{item.name}</p>
                <p className="text-sm text-gray-500">Seller: {item.seller}</p>
                <p className="text-green-500 font-medium text-[14px] mt-1">
                  ₦{item.price.toLocaleString()}
                </p>

                <div className="flex border border-gray-400 w-30 font-medium rounded-lg justify-center items-center mt-3 gap-3">
                  <button className="">-</button>
                  <span>{item.quantity}</span>
                  <button className="">+</button>
                </div>
              </div>

              <DeleteIcon />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md w-[32%] h-fit">
          {/* <div className="px-6 pt-[22px]">
          <p className="text-[20px] font-normal mb-5 ">Order Summary</p>

          <div className="text-base font-normal flex justify-between">
            <p className="text-gray-800">Subtotal</p>
            <p>₦32,100</p>
          </div>

          <div className="text-base font-normal flex justify-between my-3">
            <p className="text-gray-800">Shipping Fee</p>
            <p>₦2,000</p>
          </div>

          <div className="text-base font-normal flex justify-between">
             <p>Tax (5%)</p>
             <p>₦1,605</p>
          </div>

          </div>
          <div className="bg-[#D9D9D9B2] w-full h-[2px] my-4"></div>

          <div className="flex justify-between text-base px-6 mb-[35px]">
            <p>Total</p>
            <p className="text-green-500">₦35,705</p>
          </div>

          <div className="px-6 pb-[22px]">
            <input className="px-3 py-[8px] w-full text-base mb-5 rounded-lg max-w-[312px] box-sizing border border-gray-600 " type="text" placeholder="Promo Code" />
            <button className="h-10 text-base flex justify-center items-center mb-5 w-full bg-white border border-gray-500 rounded-lg ">Apply Code</button>
            <button className="h-10 text-base flex justify-center items-center mb-5 w-full bg-green-300 text-white border border-gray-500 rounded-lg ">Proceed to Checkout</button>
            <button className="h-10 text-base flex justify-center items-center w-full bg-white border border-gray-500 rounded-lg ">Continue Shopping</button>
          </div> */}
          <div className="bg-white p-5 rounded-xl shadow-md w-full max-w-sm">
            <h2 className="font-semibold text-lg mb-5">Order Summary</h2>

            <div className="space-y-3">
              {summaryData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <p>{item.label}</p>
                  <p className="font-medium">₦{item.amount.toLocaleString()}</p>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            {/* Total */}
            <div className="flex justify-between items-center text-base font-semibold">
              <p>Total</p>
              <p className="text-green-600">
                ₦
                {summaryData.reduce((a, b) => a + b.amount, 0).toLocaleString()}
              </p>
            </div>

            {/* Promo Code */}
            <input
              type="text"
              placeholder="Promo Code"
              className="border w-full mt-5 p-2 rounded-md focus:outline-none"
            />

            <button className="w-full border p-2 rounded-md mt-3">
              Apply Code
            </button>

            {/* Checkout */}
            <button className="w-full bg-green-500 text-white p-3 rounded-md mt-4">
              Proceed to Checkout
            </button>

            {/* Continue Shopping */}
            <button className="w-full border p-3 rounded-md mt-3">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Cart;
