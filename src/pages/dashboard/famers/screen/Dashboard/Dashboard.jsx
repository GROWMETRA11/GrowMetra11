import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import BagIcon from "../../../../../Components/iconComponent/BagIcon";
import NewCartIcon from "../../../../../Components/iconComponent/NewCartIcon";
import DeliveryIcon from "../../../../../Components/iconComponent/DeliveryIcon";
import TimeDeliveryIcon from "../../../../../Components/iconComponent/TimeDeliveryIcon";
import Tomato from "../../../../../assets/images/Tomatoes.webp";
import Maize from "../../../../../assets/images/Maize.webp";
import Banana from "../../../../../assets/images/Banana.webp";
import Apple from "../../../../../assets/images/Apple.webp";
import StarIcon from "../../../../../Components/iconComponent/StarIcon";
import ViewStore from "../../../../../Components/Buttons/ViewStore";
import { EyeClosed } from "lucide-react";
import CompleteVerification from "./CompleteVerification";

const Dashboard = () => {
  const [modal, setModal] = useState(false);

  const Cards = [
    { icon: <BagIcon />, text: "Active Orders", values: 3 },
    { icon: <NewCartIcon />, text: "Items in cart", values: 5 },
    { icon: <DeliveryIcon />, text: "On the way", values: 3 },
    { icon: <TimeDeliveryIcon />, text: "Awaiting Delivery", values: 2 },
  ];

  const Orders = [
    {
      id: "ORD-2024-001",
      name: "Fresh Red Tomatoes",
      seller: "Farm Fresh Co",
      qty: "10kg",
      price: "₦15,500",
      status: "In Transit",
      progress: 60,
      eta1: "Estimated Delivery",
      eta: "2 days",
      image: Tomato,
    },
    {
      id: "ORD-2024-002",
      name: "Organic Yellow Maize",
      seller: "Farm Fresh Co",
      qty: "10kg",
      price: "₦15,500",
      status: "In Transit",
      progress: 20,
      eta1: "Estimated Delivery",
      eta: "2 days",
      image: Maize,
    },
    {
      id: "ORD-2024-003",
      name: "Fresh Banana",
      seller: "Farm Fresh Co",
      qty: "10kg",
      price: "₦15,500",
      status: "In Transit",
      progress: 90,
      eta1: "Estimated Delivery",
      eta: "2 days",
      image: Banana,
    },
    {
      id: "ORD-2024-004",
      name: "Fresh Apple",
      seller: "Farm Fresh Co",
      qty: "10kg",
      price: "₦15,500",
      status: "In Transit",
      progress: 100,
      eta1: "Estimated Delivery",
      eta: "2 days",
      image: Apple,
    },
  ];

  const topRated = [
    { name: "Farm Fresh Co", text: "Fresh Produce", review: "324 Reviews", rating: 4.8 },
    { name: "Farm Fresh Co", text: "Fresh Produce", review: "324 Reviews", rating: 4.8 },
    { name: "Farm Fresh Co", text: "Fresh Produce", review: "324 Reviews", rating: 4.8 },
  ];

  return (
    <DashboardLayout>
      <CompleteVerification open={modal} onClose={() => setModal(false)} />

      {/* Welcome */}
      <div>
        <h2 className="font-normal text-3xl">Welcome, Abdurrahman.</h2>
        <p className="text-[16px] font-normal mt-1">
          Your personalized marketplace dashboard
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {Cards.map((card, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <div>{card.icon}</div>
            <div className="mt-5 mb-4 text-[15px]">{card.text}</div>
            <div className="text-[32px] font-medium">{card.values}</div>
          </div>
        ))}
      </div>

      {/* Orders + Sidebar */}
      <div className="w-full flex flex-col lg:flex-row gap-6 mt-6">

        {/* Left */}
        <div className="w-full lg:w-[65%]">
          <div className="flex justify-between">
            <h2 className="text-2xl">Your Active Orders</h2>
            <p
              onClick={() => setModal(true)}
              className="text-green-400 cursor-pointer"
            >
              View All
            </p>
          </div>

          <div className="my-6 p-6">
            {Orders.map((order, index) => (
              <div key={index} className="mb-6 bg-white p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <img
                    className="w-24 sm:w-36 rounded-md object-cover"
                    src={order.image}
                    alt={order.name}
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{order.name}</h2>
                    <p>Order #{order.id}</p>

                    <div className="flex gap-3 text-sm mt-1 text-gray-600 flex-wrap">
                      <p>Seller: {order.seller}</p>
                      <p>Qty: {order.qty}</p>
                      <p className="font-semibold text-black">{order.price}</p>
                    </div>
                  </div>

                  <span className="text-sm">{order.status}</span>
                </div>

                <div className="mt-3 flex justify-between text-sm px-1">
                  <p>{order.eta1}</p>
                  <p>{order.eta}</p>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: order.progress + "%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[32%]">
          <div className="p-6 bg-white rounded-lg">
            <h2 className="mb-4">Recent Activity</h2>

            {/* Activity Items */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div>
                  <p>Order delivered successfully</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p>Seller confirmed your order</p>
                  <p className="text-sm text-gray-600">5 hours ago</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div>
                  <p>Payment processed</p>
                  <p className="text-sm text-gray-600">Yesterday</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p>Order placed</p>
                  <p className="text-sm text-gray-600">2 days ago</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <ViewStore text="Browse Market" className="mb-4" />
              <ViewStore
                text="View Cart"
                className="border border-black rounded-lg"
              />
            </div>

            {/* Wallet */}
            <div className="bg-green-500 p-6 text-white rounded-lg mt-6">
              <div className="flex justify-between mb-3">
                <p>Available Balance</p>
                <EyeClosed />
              </div>
              <p className="text-3xl font-medium mb-3">₦28,500</p>
              <ViewStore
                text="Add Funds"
                className="border border-white bg-transparent rounded-md"
              />
            </div>

            {/* Escrow */}
            <div className="bg-green-500 p-6 text-white rounded-lg mt-4">
              <div className="flex justify-between mb-3">
                <p>Escrow Summary</p>
                <EyeClosed />
              </div>
              <p className="text-3xl font-medium mb-2">₦12,500</p>
              <p className="text-sm">
                ₦12,500 currently held in escrow across 3 transactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Rated Sellers */}
      <div className="p-6 mt-6">
        <h2 className="font-bold">Top Rated Sellers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {topRated.map((rate, index) => (
            <div key={index} className="py-5 px-6 shadow-lg rounded-lg bg-white">
              <div className="flex justify-between items-center mb-2">
                <p>{rate.name}</p>
                <div className="flex items-center gap-2">
                  <span>{rate.rating}</span>
                  <StarIcon />
                </div>
              </div>

              <p className="mb-2">{rate.text}</p>
              <p className="mb-3">{rate.review}</p>

              <ViewStore className="text-base" />
            </div>
          ))}
        </div>
      </div>

      {/* Support Button */}
      <div className="flex justify-end p-6">
        <button className="bg-white rounded-full shadow-md px-4 py-2.5 flex items-center gap-2 border">
          <span className="font-medium text-gray-700 text-sm">Support</span>
          <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
