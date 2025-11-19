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
    <DashboardLayout>
      {/* Text */}
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
        <div className=" w-[65%] bg-white shadow-sm ">
          {/* Text */}
          <div className="flex justify-between">
            <h2 className="text-2xl font-normal leading-[100%] text-black">
              Your Active Orders
            </h2>
            <p className="text-green-400 font-normal text-[16px]">View All</p>
          </div>

          {/* Images and other text */}
          <div className="my-6 p-6 ">
            {/* Mapped items */}
            {Orders.map((order, index) => (
              <div key={index} className=" mb-6 ">
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

                    <div className=" pl-39 relative flex">
                      <div className="bg-green-400  z-50 h-2 w-[272px] rounded-md "></div>
                      <div className="bg-gray-400  h-2 w-[255px] rounded-md "></div>
                    </div>
              </div>
              
            ))}
          </div>
        </div>

        {/* Right Items */}
        <div className="w-[32%] mt-[15px]">
          <h1>Recent Activity</h1>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
