import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import FilterIcon from '../../../../../Components/iconComponent/FilterIcon'
import Tomato from "../../../../../assets/images/Tomatoes.webp";
import Maize from "../../../../../assets/images/Maize.webp";
import Banana from "../../../../../assets/images/Banana.webp";
import Apple from "../../../../../assets/images/Apple.webp";
import LocationIcon from '../../../../../Components/iconComponent/LocationIcon';

const OrderItems = [
  {
    id: "ORD-2024-001",
    name: "Fresh Red Tomatoes",
    seller: "Farm Fresh Co",
    qty: "10kg",
    price: "₦15,500",
    status: "In Transit",
    statusColor: "bg-yellow-100 text-yellow-700",
    progress: 30,
    eta1: "Estimated Delivery",
    eta: "2 days",
    image: Tomato,
    view: "Track",
  },
  {
    id: "ORD-2024-002",
    name: "Organic Yellow Maize",
    seller: "Farm Fresh Co",
    qty: "10kg",
    price: "₦15,500",
    status: "In Transit",
    statusColor: "bg-yellow-100 text-yellow-700",
    progress: 40,
    eta1: "Estimated Delivery",
    eta: "2 days",
    image: Maize,
    view: "Track",
  },
  {
    id: "ORD-2024-002",
    name: "Fresh Banana",
    seller: "Farm Fresh Co",
    qty: "10kg",
    price: "₦15,500",
    status: "In Transit",
    statusColor: "bg-yellow-100 text-yellow-700",
    progress: 50,
    eta1: "Estimated Delivery",
    eta: "2 days",
    image: Banana,
    view: "Track",
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
    view: "Track",
  },
];

const Orders = () => {
  return (
    <DashboardLayout title="Orders">
      <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-1'>My Orders</h2>
      <p className='text-xs sm:text-sm md:text-base lg:text-lg font-normal mb-6'>Track and manage all your purchases</p>
      
      {/* Tabs + Filter */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center font-normal text-sm sm:text-base md:text-lg lg:text-xl gap-4 sm:gap-0'>
        <div className='flex flex-wrap items-center gap-4 sm:gap-6'>
          <p className='text-green-500 text-sm sm:text-base md:text-lg lg:text-xl'>Active Orders(2)</p>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl'>Delivered Orders(3)</p>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl'>Cancelled Orders(1)</p>
        </div>

        <div className='flex gap-2 items-center'>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl'>Filter</p>
          <FilterIcon />
        </div>
      </div>

      {/* Items */}
      <div>
        <div className="my-6 p-4 sm:p-6">

          {OrderItems.map((order, index) => (
            <div key={index} className="mb-6 bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              
              {/* Main Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[11px]">

                <img
                  className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-md"
                  src={order.image}
                  alt={order.name}
                />

                {/* Text Info */}
                <div className="flex-1 w-full">
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">{order.name}</h2>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">Order #{order.id}</p>

                  <div className="flex flex-wrap gap-3 text-xs sm:text-sm md:text-base lg:text-lg mt-1 text-gray-600">
                    <p>Seller: {order.seller}</p>
                    <p>Qty: {order.qty}</p>
                    <p className="font-semibold text-black">{order.price}</p>
                  </div>
                </div>

                {/* Status + Track Button */}
                <div className='flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 sm:gap-10 mt-3 sm:mt-0'>
                  <span className='text-xs sm:text-sm md:text-base lg:text-lg'>{order.status}</span>

                  <div className='flex items-center gap-2 p-2 bg-green-500 rounded-md text-white cursor-pointer'>
                    <LocationIcon />
                    <span className='text-xs sm:text-sm md:text-base lg:text-lg'>{order.view}</span>
                  </div>
                </div>
              </div>

              {/* ETA Row */}
              <div className="flex justify-between mt-3 text-xs sm:text-sm md:text-base lg:text-lg">
                <p>{order.eta1}</p>
                <p>{order.eta}</p>
              </div>

              {/* Progress Bar */}
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
    </DashboardLayout>
  )
}

export default Orders
