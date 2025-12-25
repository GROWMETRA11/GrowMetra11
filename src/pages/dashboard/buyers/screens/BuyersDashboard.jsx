import React from "react";
import Layout from "../components/Layout";
import TotalSales from "../../../../Components/iconComponent/TotalSales";
import ActiveOrders from "../../../../Components/iconComponent/ActiveOrders";
import AvailableBalance from "../../../../Components/iconComponent/AvailableBalance";
import InventoryAlerts from "../../../../Components/iconComponent/InventoryAlerts";
import Btn from "../../../../Components/Buttons/Btn";
import Box from "../../../../Components/iconComponent/Box";

const BuyersDashboard = () => {
  const cards = [
    {
      icon: <TotalSales />,
      title: "Total Sales (Month)",
      description: "₦ 452,000",
      percentile: "+12%",
    },
    {
      icon: <ActiveOrders />,
      title: "Active Orders",
      description: "3",
    },
    {
      icon: <AvailableBalance />,
      title: "Available Balance",
      description: "₦ 28,500",
    },
    {
      icon: <InventoryAlerts />,
      title: "Inventory Alerts",
      description: "1 Low Stock",
    },
  ]

  const orders = [
    {
      
      id: "#001",
      date: "12/8/2025",
      product: "Fresh Red Tomatoes",
      qty: 10,
      status: "enroute",
      amount: "₦8,500",
      image: "/src/assets/images/Fresh Tomatoes.png"
    },
    {
      
      id: "#002",
      date: "12/9/2025",
      product: "Organic Yellow Maize",
      qty: 100,
      status: "new",
      amount: "₦125,000",
      image: "/src/assets/images/Organic Maize.png"
    },
    {
      
      id: "#003",
      date: "12/5/2025",
      product: "Fresh Red Tomatoes",
      qty: 20,
      status: "Delivered",
      amount: "₦52,000",
      image: "/src/assets/images/potato.png",
    }
  ]

  /* Top Selling */

  const topSelling = [
    {
      product: "Organic Yellow Maize",
      qty: "45 sold",
      amount: " • ₦36,000",
      rank: "Top",
      image: "/src/assets/images/potato.png",
    },
    {
      product: "Fresh Red Tomatoes",
      qty: "45 sold ",
      amount: " • ₦36,000",
      rank: "Top",
      image: "/src/assets/images/Fresh Tomatoes.png"
    },
    {
      product: "Tubers of Yam",
      qty: "45 sold",
      amount: " • ₦36,000",
      rank: "Top",
      image: "/src/assets/images/Organic Maize.png"
    }
  ]

  return (
    <Layout>
      <section className=" min-h-screen manrope">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="manrope font-bold text-2xl mb-1">
              Welcome back, Abdurrahman
            </h1>
            <p className="inter font-normal text-base text-gray-500 ">
              Here's how your farm is performing today.
            </p>
          </div>

          <div className="flex items-center gap-3 px-4 py-[13px] bg-white rounded-lg border border-gray-300 shadow-lg">
            <span className=" size-[10px] rounded-full bg-green-500 "></span>
            <p className="text-[14px] font-medium inter">Verified Seller</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-4 ">
          {cards.map((item) => (
            <div
              key={item.title}
              className="w-[100%] p-[25px] border-2 border-[#E5E7EB] rounded-lg "
            >
              <div className="flex justify-between">
                {item.icon}
                <p className="text-green-500">{item.percentile}</p>
              </div>

              <div className="mt-4">
                <p className="text-[#666666] inter font-medium text-[14px]  mb-1">
                  {item.title}
                </p>
                <p className="manrope font-bold text-2xl  ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Graph and Top-seller section */}
        <div className="flex flex-col lg:flex-row gap-6 my-8 mb-[150px]">
          {/* Graph */}
          <div className="md:w-[61%] w-full">
            <div className="w-full border-2 border-gray-200 p-[25px] rounded-lg ">
              <div className="flex items-center justify-between">
                <h2>Revenue Trend</h2>
                <p className="px-4 w-full max-w-[133px] py-[6px] bg-gray-100 text-center rounded-lg">
                  Last 7days
                </p>
              </div>
              {/* Use Library to do the chart */}
            </div>

            {/* Latest Orders */}
            <div className="mt-[25px] w-full border-2 border-gray-200 rounded-lg ">
              <div className="flex items-center justify-between p-6">
                <h2>Latest Orders</h2>
                <p className="text-green-500">View All</p>
              </div>

              {/* Table Headers */}
              <div className="grid grid-cols-4 bg-gray-200 px-6 py-4 text-xs font-semibold text-gray-500 ">
                <h2>ORDER</h2>
                <h2>PRODUCT</h2>
                <h2 className="ml-17">STATUS</h2>
                <h2 className="text-right">AMOUNT</h2>
              </div>

              {/* Order List */}
              <div className="">
                {orders.map((order) => (
                  <div key={order.id} className="grid grid-cols-4 items-center  px-6 py-4">
                    <div>
                      <p>{order.id}</p>
                      <p>{order.date}</p>
                    </div>

                    {/* image and Qty*/}
                    <div className="flex w-[200px] gap-3">
                      {/* Image */}
                    <img src={order.image} alt={order.id} className="size-10 rounded-lg object-cover" />
                    <div>
                      <p className="text-[14px]">{order.product}</p>
                      <p className="text-[12px]">{order.qty}</p>
                    </div>
                    </div>

                    {/* Status */}
                    <div className=" text-center ml-18  text-[12px]">
                      {/* <p className="">{order.status}</p> */}
                      {order.status === "enroute" ? (
                        <div className="px-[10px] py-[2px] max-w-[70px] w-full bg-amber-300 rounded-full text-amber-600">{order.status}</div>
                      ) : (
                        <div>
                          {order.status === "new" ? (<p className="max-w-[45px] w-full rounded-full bg-gray-300">{order.status}</p>) : (
                            <div>
                              {order.status === "Delivered" ? <p className="text-green-700 px-[10px] py-[2px] bg-green-300 rounded-full w-20  ">{order.status}</p> : ""}
                            </div>
                          ) }
                        </div>
                      ) }
                    </div>

                    {/* Amount */}
                    <p className="text-right">{order.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Top-seller */}
          <div className=" md:w-[39%] w-full ">
            <div className="p-[25px] border-2 border-gray-300 rounded-lg">
              <h1 className="font-bold manrope text-[18px] inline-flex items-center">Top Selling</h1>
              <div className="p-3">
                {topSelling.map((top) => (
                  <div key={top.product} className="flex justify-between items-center mb-4 ">
                    <div className=" flex items-center gap-4">
                      <img src={top.image} alt={top.qty} className="size-12 rounded-lg object-cover" />
                      <div>
                      <p className="font-medium manrope text-[14px]">{top.product}</p>
                      <div className="flex">
                      <p className=" ">{top.qty}</p>
                      <p>{top.amount}</p>
                      </div>
                      </div>
                      
                    </div>
                    <p className="text-green-700 py-1 px-2 inter font-semibold text-[12px] bg-green-300 rounded-lg mx-auto text-right">{top.rank}</p>
                  </div>
                ))}
                <Btn className="border border-green-500 rounded-lg cursor-pointer hover:bg-green-100 duration-300 transition-colors  min-h-[38px] inline-flex items-center justify-center text-green-500 inter text-[14px] px-[80.44px] py-[9px] font-medium ">
                Manage Products
              </Btn>
              </div>
            </div>


            {/* Inventory */}
            <div className="p-[25px] border-2 border-gray-300 rounded-lg mt-6">
              <div className="flex justify-between items-center">
                <h2 className="manrope font-bold text-[18px]">Inventory</h2>
                <Box />
              </div>

              <div className=" flex justify-between items-center border p-3 border-[#FFE2E2] rounded-lg bg-[#FEF2F2] mt-4">
                <div className="flex gap-3 items-center ">
                  <div className="size-2 bg-red-500 rounded-full"></div>
                  <p className="text-red-500">Fresh Red Tomatoes</p>
                </div>
                <p className="text-red-500">50 left</p>
              </div>

              <div className=" flex justify-between items-center border p-3 border-[#FFE2E2] rounded-lg bg-[#FEF2F2] my-3">
                <div className="flex gap-3 items-center ">
                  <div className="size-2 bg-red-500 rounded-full"></div>
                  <p className="text-red-500">Soybeans</p>
                </div>
                <p className="text-red-500">0 left</p>
              </div>

              <div className=" flex justify-between items-center border p-3 border-[#DCFCE7] rounded-lg bg-[#F0FDF4] mb-4 ">
                <div className="flex gap-3 items-center ">
                  <div className="size-2 bg-green-500 rounded-full"></div>
                  <p className="text-green-500">Healthy Stock</p>
                </div>
                <p className="text-green-500">3 items</p>
              </div>

              <Btn className="px-[76.33px] py-2 inline-flex justify-center items-center rounded-lg cursor-pointer w-full">
                Go to Inventory
              </Btn>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BuyersDashboard;
