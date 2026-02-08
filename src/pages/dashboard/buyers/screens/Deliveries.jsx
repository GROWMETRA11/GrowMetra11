import React from 'react'
import Layout from '../components/Layout'
import DeliveryIcon2 from '../../../../Components/iconComponent/DeliveryIcon2'



const Deliveries = () => {


    const deliveries = [
        {
          id: "#del_1",
          order: "Order #001",
          restaurant: "Mama Nkechi Kitchen",
          address: "12 Market Road, Lagos",
          eta: "2 hours",
          driver: "Chinedu Okeke",
          vehicle: "Van • KJA-123-XY",
          route: "Lagos - Ibadan Exp",
          status: "In Transit"
        },
        {
          id: "#del_2",
          order: "Order #002",
          restaurant: "Tasty Bites",
          address: "45 Allen Avenue, Ikeja",
          eta: "1 hour",
          driver: "Ibrahim Musa",
          vehicle: "Bike • LAG-445-ZX",
          route: "Ikeja - Yaba",
          status: "In Transit"
        }
      ];
    
   /*  const deliveryData = {
        orderId: '#del_1',
        orderNumber: 'Order #001',
        merchant: {
          name: 'Maa Nkechi Kitchen',
          address: '12 Market Road, Lagos',
          eta: '2 hours'
        },
        route: 'Lagos - Ibadan Exp',
        status: 'In Transit'
      };
    
      const driverData = {
        initials: 'CO',
        name: 'Chinedu Okeke',
        vehicleType: 'Van',
        plateNumber: 'KJA-123-XY'
      };
    
      const performanceData = {
        onTimeRate: 98,
        totalDeliveries: 1245,
        avgDeliveryTime: '45 mins'
      }; */



  return (
    <Layout> 

<div className="min-h-screen bg-gray-100 p-6">

{/* Header */}
<div className="mb-6">
  <h1 className="text-2xl font-semibold">Deliveries</h1>
  <p className="text-gray-500 text-sm">
    Track active shipments and delivery partners.
  </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

  {/* Left Section */}
  <div className="lg:col-span-2 space-y-6">

    {deliveries.map((delivery, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow p-6 space-y-6"
      >

        {/* Top Row */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold">{delivery.id}</h2>
            <p className="text-sm text-gray-500">{delivery.order}</p>
          </div>

          <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
            {delivery.status}
          </span>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-500">
              DELIVERY DETAILS
            </h3>

            <div>
              <p className="font-medium">{delivery.restaurant}</p>
              <p className="text-sm text-gray-500">
                {delivery.address}
              </p>
            </div>

            <p className="text-sm text-gray-600">
              ETA: {delivery.eta}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-500">
              DRIVER INFO
            </h3>

            <div>
              <p className="font-medium">{delivery.driver}</p>
              <p className="text-sm text-gray-500">
                {delivery.vehicle}
              </p>
            </div>

            <button className="border rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
              Contact Driver
            </button>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex justify-between text-sm text-gray-600">
          <p>Route: {delivery.route}</p>
          <button className="text-green-600 font-medium">
            Track on Map
          </button>
        </div>

      </div>
    ))}

  </div>

  {/* Right Section */}
  <div className="space-y-6">

    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h3 className="font-semibold">Delivery Performance</h3>

      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>On-time Rate</span>
          <span className="font-medium">98%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-[98%]" />
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <span>Total Deliveries</span>
        <span className="font-medium">1,245</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Avg. Delivery Time</span>
        <span className="font-medium">45 mins</span>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl p-6 space-y-3">
      <h3 className="font-semibold">Logistics Partner</h3>

      <p className="text-sm text-gray-600">
        GrowMetra Logistics handles all your interstate deliveries.
      </p>

      <button className="bg-white border px-4 py-2 rounded-lg text-sm">
        View Agreement
      </button>
    </div>

  </div>

</div>
</div>


       {/* <div className='mb-6'>
            <h2 className='text-2xl font-bold text-[#333333] mb-1'>Deliveries</h2>
            <p className='inter font-normal text-base text-[#6A7282]'>Track active shipments and delivery partners.</p>
        </div> 
 */}
        


        {/* <div className='flex gap-6 '>
        <div className=' bg-[#F3F4F6] border-2 border-[#E0E0E0]  rounded-xl p-4 w-full max-w-[688px]'>
            <div className='flex justify-between items-center  border-b border-[#F3F4F6]'>
                <div className='flex items-center gap-3'>
                    <DeliveryIcon2 />
                    <div>
                        <h2 className='font-bold inter text-sm mb-[6px]'>#del_1</h2>
                        <h3 className='font-normal inter text-xs text-[#6A7282]'>Order #001</h3>
                    </div>
                </div>
                <p className='text-xs font-medium inter px-[10px] rounded-[33554400px]   py-1 bg-[#FEF9C2] text-[#894B00]'>In Transit</p>
            </div>
            <div className=''>

            </div>
        </div>

        <div className='flex-1'>
        <div className='p-[21px] border-2 border-[#E0E0E0] rounded-xl'>
            <h2>Delivery Performance</h2>
            <div>
                <div>
                    <p>On-time Rate</p>
                    <p>98%</p>
                </div>
                <div className='w-full h-2 bg-[#00C950] rounded-[33554400px]'></div>

                <div>
                    <p>Total Deliveries</p>
                    <p>1,245</p>
                </div>
                <div>
                    <p>Avg. Delivery Time</p>
                    <p>45 mins</p>
                </div>
            </div>
        </div>
        <div className='p-[21px] flex-1 mt-4 border-2 border-[#E0E0E0] rounded-xl'>
            <h2>Delivery Performance</h2>
            <div>
                <div>
                    <p>On-time Rate</p>
                    <p>98%</p>
                </div>
                <div className='w-full h-2 bg-[#00C950] rounded-[33554400px]'></div>

                <div>
                    <p>Total Deliveries</p>
                    <p>1,245</p>
                </div>
                <div>
                    <p>Avg. Delivery Time</p>
                    <p>45 mins</p>
                </div>
            </div>
        </div>
        </div>
        </div> */}
    </Layout>
  )
}

export default Deliveries