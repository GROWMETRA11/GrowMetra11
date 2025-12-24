import React from "react";
import Layout from "../components/Layout";
import TotalSales from "../../../../Components/iconComponent/TotalSales";
import ActiveOrders from "../../../../Components/iconComponent/ActiveOrders";
import AvailableBalance from "../../../../Components/iconComponent/AvailableBalance";
import InventoryAlerts from "../../../../Components/iconComponent/InventoryAlerts";

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
  ];

  return (
    <Layout>
      <section className=" min-h-screen">
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
          <div className="md:w-[61%] w-full h-[728px]">
            <div className="w-full border-2 border-gray-200 p-[25px] rounded-lg ">
              <div className="flex justify-between">
                <h2>Revenue Trend</h2>
                <p className="px-4 w-full max-w-[133px] py-[6px] bg-gray-100 text-center rounded-lg">
                  Last 7days
                </p>
              </div>
              {/* Use Library to do the chart */}
            </div>

            {/* Latest Orders */}
            <div className="mt-[25px] w-full border-2 border-gray-200 rounded-lg p-6 ">
              <div className="flex items-center justify-between">
                <h2>Latest Orders</h2>
                <p className="text-green-500">View All</p>
              </div>
            </div>
          </div>
          {/* Top-seller */}
          <div className="bg-gray-400 h-[728px] md:w-[39%] p-[25px] w-full ">
            Top-seller
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BuyersDashboard;
