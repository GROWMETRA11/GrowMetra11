import React from "react";
import Layout from "../components/Layout";
import Btn from "../../../../Components/Buttons/Btn";
import RedAlertIcon from "../../../../Components/iconComponent/RedAlertIcon";
import CircleIcon from "../../../../Components/iconComponent/CircleIcon";
import ArrowDown from "../../../../Components/iconComponent/ArrowDown";
import SearchIcon from "../../../../Components/iconComponent/SearchIcon";
import Maize from "../../../../assets/images/Organic Maize.png";
import Tomatoes from "../../../../assets/images/Tomatoes.webp";
import Yam from "../../../../assets/images/Sweet Potatoes.png";
import soyBeans from "../../../../assets/images/bananas.png";

const Inventory = () => {
  const schedules = [
    {
      icon: <RedAlertIcon />,
      title: "Low Stock Alert",
      desc: "2 items are below minimum quantity.",
      bg: "bg-[#FEF2F2]",
      border: "border border-[#FFE2E2]",
    },

    {
      icon: <CircleIcon />,
      title: "Harvest Due",
      desc: '"Organic Yellow Maize" harvest expected in 2 days.',
      bg: "bg-[#FFF7ED]",
      border: "border border-[#FFEDD4]",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Organic Yellow Maize",
      category: "Grains",
      image: Maize,
      qty: "500",
      unit: "kgs",
      maxStock: "500",
      status: "Healthy",
      nextHarvest: "11/15/2023",
      lastUpdated: "Today",
      actions: "Update Stock"
    },
    {
      id: 2,
      name: "Fresh Red Tomatoes",
      category: "Vegetables",
      image: Tomatoes,
      qty: "50",
      unit: "baskets",
      maxStock: "200",
      status: "Healthy",
      nextHarvest: "12/1/2023",
      lastUpdated: "Today",
      actions: "Update Stock"
    },
    {
      id: 3,
      name: "Tubers of Yam",
      category: "Tubers",
      image: Yam,
      qty: "200",
      unit: "tubers",
      maxStock: "400",
      status: "Healthy",
      nextHarvest: "10/20/2023",
      lastUpdated: "Today",
      actions: "Update Stock"
    },
    {
      id: 4,
      name: "Soybeans",
      category: "Legumes",
      image: soyBeans,
      qty: "0",
      unit: "kgs",
      maxStock: "300",
      status: "Out of Stock",
      nextHarvest: "11/10/2023",
      lastUpdated: "Today",
      actions: "Update Stock"
    },
  ];

  return (
    <Layout>
      <div className=" flex justify-between items-center ">
        <div>
          <h2 className="manrope text-2xl font-bold text-[#1A1A1A]">
            Inventory
          </h2>
          <p className="inter text-base font-normal text-[#666666]">
            Track stock levels and harvest schedules.
          </p>
        </div>

        <Btn className="bg-white gap-2 text-black text-base font-medium inline-flex justify-center w-full max-w-32 py-2 rounded-xl items-center cursor-pointer shadow-md">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 9H14.25"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 3.75V14.25"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Add
        </Btn>
      </div>

      <div className="flex flex-wrap gap-4 my-6  ">
        {schedules.map((schedule) => (
          <div
            key={schedule.title}
            className={`border w-full md:w-auto flex gap-5 p-4 h-[90px] ${schedule.bg} ${schedule.border}`}
          >
            <p>{schedule.icon}</p>
            <div>
              <p className="font-bold text-[#82181A] text-sm">
                {schedule.title}
              </p>
              <p className="inter font-normal text-xs text-[#C10007] mt-1 max-w-64">
                {schedule.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-[17px] bg-white rounded-xl border flex gap-4 border-[#E5E7EB] mb-6">
        <div className="w-full flex items-center relative">
          <input
            type="text"
            placeholder="Search Inventory..."
            className="w-full outline-gray-300 inter font-normal text-sm px-3 pl-10 py-[10px] rounded-lg border border-[#E5E7EB] text-[#666666] bg-[#F8F9FA] "
          />
          <div className="absolute left-3 ">
            <SearchIcon />
          </div>
        </div>
        <div className="w-full max-w-32 flex justify-center py-2 border border-[#E5E7EB] rounded-lg ">
          <div className="flex gap-2 items-center">
            <p className="text-[#666666] inter font-normal text-sm ">
              All Status
            </p>
            <ArrowDown />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#E5E7EB] shadow-md bg-white ">
        <table className="w-full text-left">
          <thead className="font-bold text-xs uppercase inter text-[#666666]  bg-[#F0F2F5] px-6 py-4">
            <tr className="">
              <th className="px-6 py-4">Product</th>
              <th>Stock Level</th>
              <th>Status</th>
              <th>Next Harvest</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => {
              // Progress Bar
              const getStockPercentage = (qty, maxStock) => {
                return Math.min((qty / maxStock) * 100, 100);
              };

              const percentage = getStockPercentage(
                item.qty,
                item.maxStock
              )
              
              return (
                <tr key={item.id} className="border-b border-[#E5E7EB] last:border-0">
                    {/* PRODUCTS */}
                    <td className="px-6 py-4 flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="size-10 rounded object-cover" />
                        <div>
                            <p className=" inter font-medium text-base  ">{item.name}</p>
                            <p className=" inter font-normal text-xs text-[#666666] ">{item.category}</p>
                        </div>
                    </td>

                    {/* STOCKS */}
                    <td className="">
                        <p className=" inter font-bold text-base ">{item.qty} <span className="inter font-normal text-xs text-[#666666]">{item.unit}</span></p>
                        <div className="w-32 h-2 bg-gray-200 rounded mt-1">
                            <div className="h-full bg-green-500 rounded"
                             style={{width:`${percentage}% `}}></div>
                        </div>
                    </td>

                   {/*  STATUS */}
                   <td>
                   <p className={`${item.status === "Healthy" ? "bg-[#DCFCE7] text-[#016630] w-16 " : "bg-[#FFE2E2] text-[#9F0712] w-[91px]"}  text-center rounded-full font-medium text-xs inter `}>{item.status}</p>
                   </td>
                   

                  {/*  Next Harvest */}
                   <td>
                    <p className="inter font-normal text-sm ">{item.nextHarvest}</p>
                   </td>

                   {/* Last Update */}
                   <td>
                    <p className=" inter font-normal text-sm text-[#666666] ">{item.lastUpdated}</p>
                   </td>

                  {/*  Actions */}
                  <td>
                    <p className="inter text-[#4CAF50] text-sm  font-medium">{item.actions}</p>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Inventory;
