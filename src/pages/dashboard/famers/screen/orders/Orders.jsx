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
     <DashboardLayout>
      <h2 className='text-[32px] font-normal mb-1 '>My Orders</h2>
      <p className='text-base font-normal mb-6'>Track and manage all your purchases</p>
      
      <div className='flex justify-between items-center font-normal text-[20px] '>
        <div className='flex items-center gap-6'>
          <p className='text-green-500'>Active Orders(2)</p>
          <p>Delivered Orders(3)</p>
          <p>Cancelled Orders(1)</p>

        </div>
        <div className='flex gap-2 items-center'>
          <p>Filter</p>
          <FilterIcon />
        </div>
      </div>

       {/*Left Items */}
       <div >

          {/* Images and other text */}
          <div className="my-6 p-6">
            {/* Mapped items */}
            {OrderItems.map((order, index) => (
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
                  <div className='flex items-center gap-10  '>
                  <span>{order.status}</span>

                  <div className='flex items-center gap-2 p-2 bg-green-500 rounded-md text-white'>
                  <LocationIcon />
                  <span className='text-[20px]'>{order.view}</span>
                  </div>
                  </div>


                </div>
                <div className="pl-39 mb-[10px] flex justify-between">
                    <p> {order.eta1} </p>
                    <p> {order.eta} </p>
                    </div>

                    <div className=" ml-39  max-w-[527px] bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full " style={{width: order.progress+ "%"}}></div>
                    </div>
              </div>
              
            ))}
          </div>
        </div>
    </DashboardLayout>
  )
}

export default Orders