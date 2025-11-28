import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import BagIcon from "../../../../Components/iconComponent/BagIcon";
import NewCartIcon from "../../../../Components/iconComponent/NewCartIcon";
import DeliveryIcon from "../../../../Components/iconComponent/DeliveryIcon";
import TimeDeliveryIcon from "../../../../Components/iconComponent/TimeDeliveryIcon";
import Tomato from "../../../../assets/images/Tomatoes.webp";
import Maize from "../../../../assets/images/Maize.webp";
import Banana from "../../../../assets/images/Banana.webp";
import Apple from "../../../../assets/images/Apple.webp";
import StarIcon from "../../../../Components/iconComponent/StarIcon"
import ViewStore from "../../../../Components/Buttons/ViewStore";
import { EyeClosed } from "lucide-react";

const Dashboard = () => {
  {
    /* Cards */
  }
  const Cards = [
    {
      icon: <BagIcon />,
      text: "Active Orders",
      values: 3,
    },
    {
      icon: <NewCartIcon />,
      text: "Items in cart",
      values: 5,
    },
    {
      icon: <DeliveryIcon />,
      text: "On the way",
      values: 3,
    },
    {
      icon: <TimeDeliveryIcon />,
      text: "Awaiting Delivery",
      values: 2,
    },
  ];

  {
    /* Orders */
  }
  const Orders = [
    {
      id: "ORD-2024-001",
      name: "Fresh Red Tomatoes",
      seller: "Farm Fresh Co",
      qty: "10kg",
      price: "₦15,500",
      status: "In Transit",
      statusColor: "bg-yellow-100 text-yellow-700",
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
      statusColor: "bg-yellow-100 text-yellow-700",
      progress: 60,
      eta1: "Estimated Delivery",
      eta: "2 days",
      image: Maize,
    },
    {
      id: "ORD-2024-002",
      name: "Fresh Banana",
      seller: "Farm Fresh Co",
      qty: "10kg",
      price: "₦15,500",
      status: "In Transit",
      statusColor: "bg-yellow-100 text-yellow-700",
      progress: 60,
      eta1: "Estimated Delivery",
      eta: "2 days",
      image: Banana,
    },
    {
      id: "ORD-2024-002",
      name: "Fresh Apple",
      seller: "Farm Fresh Co",
      qty: "10kg",
      price: "₦15,500",
      status: "In Transit",
      statusColor: "bg-yellow-100 text-yellow-700",
      progress: 60,
      eta1: "Estimated Delivery",
      eta: "2 days",
      image: Apple,
    },
  ];

  const topRated = [
    {
      name: "Farm Fresh Co",
      text: "Fresh Produce",
      review: "324 Reviews",
      star:   <StarIcon /> ,
      rating: 4.8 
    },
    {
      name: "Farm Fresh Co",
      text: "Fresh Produce",
      review: "324 Reviews",
      star:   <StarIcon /> ,
      rating: 4.8 
    },
    {
      name: "Farm Fresh Co",
      text: "Fresh Produce",
      review: "324 Reviews",
      star:   <StarIcon /> ,
      rating: 4.8 
    }
  ]

  return (
    <DashboardLayout className="relative">
      {/* Text */}
      <div>
      <div>
        <h2 className="font-normal text-3xl">Welcome, Abdurrahman.</h2>
        <p className="text-[16px] font-normal mt-1">
          {" "}
          Your personalized marketplace dashboard{" "}
        </p>
      </div>

      {/* Cards */}
      <div className=" grid gap-6 grid-cols-4 mt-5.5">
        {Cards.map((card, index) => (
          <div key={index} className=" p-6 bg-white rounded-lg shadow-md ">
            <div>{card.icon}</div>
            <div className="mt-5 mb-4 font-normal text-[15px] leading-4">
              {card.text}
            </div>
            <div className="font-medium text-[32px] leading-5">
              {card.values}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="w-full flex gap-[41px] mt-6">
        {/*Left Items */}
        <div className=" w-[65%]">
          {/* Text */}
          <div className="flex justify-between">
            <h2 className="text-2xl font-normal leading-[100%] text-black">
              Your Active Orders
            </h2>
            <p className="text-green-400 font-normal text-[16px]">View All</p>
          </div>

          {/* Images and other text */}
          <div className="my-6 p-6">
            {/* Mapped items */}
            {Orders.map((order, index) => (
              <div key={index} className=" mb-6 bg-white rounded-lg">
                <div className="flex items-center gap-[11px]">
                  <img
                    className="w-36 object-cover"
                    src={order.image}
                    alt={order.name}
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold"> {order.name} </h2>
                    <p>Order #{order.id} </p>

                    <div className="flex gap-3 text-sm mt-1 text-gray-600">
                      <p>Seller: {order.seller}</p>
                      <p>Qty: {order.qty}</p>
                      <p className="font-semibold text-black">{order.price}</p>
                    </div>
                  </div>
                  <span>{order.status}</span>


                </div>
                <div className="pl-39 mb-[10px] flex justify-between">
                    <p> {order.eta1} </p>
                    <p> {order.eta} </p>
                    </div>

                    <div className=" ml-39  max-w-[527px] bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full " style={{width: "272px"}}></div>
                    </div>
              </div>
              
            ))}
          </div>
        </div>

        {/* Right Items */}
        <div className="w-[32%] mt-[15px]">
          <div className="p-6 bg-white rounded-lg ">
            <h2 className="mb-[18px]">Recent Activity</h2>

            <div>
              <div className="flex items-center gap-2 flex-wrap mb-[31px]">
                <div className="w-3 h-3 bg-[#4DABF5] rounded-full"></div>
                <div>
                  <p>Ordered delivered Successfully </p>
                  <p>2 hours ago</p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap mb-[31px]">
                <div className="w-3 h-3 bg-[#4EBE54] rounded-full"></div>
                <div>
                  <p>Seller conformed your order</p>
                  <p>5 hours ago</p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap mb-[31px]">
                <div className="w-3 h-3 bg-[#4DABF5] rounded-full"></div>
                <div>
                  <p>Payment processed</p>
                  <p>Yesterday</p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap ">
                <div className="w-3 h-3 bg-[#4EBE54] rounded-full"></div>
                <div>
                  <p>Ordered placed</p>
                  <p>2 days ago</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <ViewStore text="Browse Market" className="mb-4" />
              <ViewStore text="View Cart" className=" border border-black rounded-lg" />
            </div>

            { /* Cards */ }
            <div className="bg-green-500 py-[17px] px-6 text-white rounded-lg mt-[30px]">
              <div className="flex justify-between items-center mb-4">
                <p>Available Balance</p>
                <EyeClosed />
              </div>
              <p className="mb-4 text-3xl font-medium">₦28,500</p>
              <ViewStore text = "Add Funds" className="border bg-transparent border-white rounded-md" />
            </div>

            <div className="bg-green-500 py-[17px] px-6 text-white rounded-lg mt-4">
              <div className="flex justify-between items-center mb-4">
                <p>Escrow Summary</p>
                <EyeClosed />
              </div>
              <p className="mb-4 text-3xl font-medium">₦12,500</p>
              <p className="max-w-[309px] text-[16px]">₦12,500 currently held in escrow across 3 transactions.</p>
              
            </div>
            
          </div>
        </div>
      </div>

      { /* Bottom Line */ }
      <div className="p-6 ">
      <h2 className="font-bold">Top Rated Sellers</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
        {topRated.map((rate,index) => (
          <div key={index} className="py-5 px-6 mb-30 shadow-lg">
            <div className="flex justify-between">
            {rate.name}
            <div className="flex items-center gap-2 mb-2">
              {rate.rating}
              <StarIcon />
            </div>
            </div>
            <div className="mb-2">
            {rate.text}
            </div>
            <div className="mb-[13px]">
            {rate.review}
            </div>
            <ViewStore className="text-base" />
          </div>
        ))}
      </div>
      
      </div>
      </div>

           
 {/* Support Button - Bottom Right */}
 <div className="flex justify-end p-6">
        <button className="bg-white rounded-full shadow-md px-4 py-2.5 flex items-center gap-2 hover:shadow-lg transition-shadow border border-gray-200">
          <span className="font-medium text-gray-700 text-sm">Support</span>
          <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </button>
      </div>
    
     
     
    </DashboardLayout>
  );
};

export default Dashboard;
