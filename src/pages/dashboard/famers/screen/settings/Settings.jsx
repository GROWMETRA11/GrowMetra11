import  {React, useState } from "react";


import DashboardLayout from "../../components/DashboardLayout";
import PersonalIcon from "../../../../../Components/iconComponent/PersonalIcon";
import Location from "../../../../../Components/iconComponent/Location";
import SecurityIcon from "../../../../../Components/iconComponent/SecurityIcon";
import Notification from "../../../../../Components/iconComponent/Notification";
import Secure from "../../../../../Components/iconComponent/Secure";

const Settings = () => {

  const [active, setActive] = useState("Personal Info")

  const tabs = [
    {
      id: 1,
      label: "Personal Info",
      activeIcon: <PersonalIcon color="#4CAF50" />,
      inActiveIcon: <PersonalIcon color="#A4A4A4"/>,
    },
    {
      id: 2,
      label: "Delivery Address",
      activeIcon: <Location color="#4CAF50" />,
      inActiveIcon: <Location color="#A4A4A4" />,
    },
    {
      id: 3,
      label: "Security",
      activeIcon: <SecurityIcon color="#4CAF50" />,
      inActiveIcon: <SecurityIcon color="#A4A4A4" />,
    },
    {
      id: 4,
      label: "Notifications",
      activeIcon: <Notification color="#4CAF50" />,
      inActiveIcon: <Notification color="#A4A4A4" />,
    },
  ]
 
  return (
    <DashboardLayout>
      <div className="w-full">

      <div>
        <h1 className="text-[32px] font-normal">Profile & Settings</h1>
        <p className="text-base font-normal text-gray-700">Manage your account and preferences</p>
      </div>

      <div className="bg-white rounded-lg px-6 py-[54px] mt-6 w-full">
        <div className="flex items-center gap-4">
          <Secure />
          <div>
            <p className="text-gray-800 font-normal text-2xl mb-[10px] ">Verified Buyer Account</p>
            <p className="text-gray-700 font-light text-[18px] ">Your account has been verified. You can browse and purchase with full access.</p>
          </div>
        </div>
      </div>

      <div className="mt-[18px] flex gap-10">
        {tabs.map((tab,index) => (
          
            <div onClick={() => setActive(tab.label)} key={index} className={`flex items-center gap-2 
            ${active === tab.label 
              ? "text-green-500 border-b-1 border-green-500"
              : " text-gray-500"
            }
            `}>
              {active === tab.label ? tab.activeIcon : tab.inActiveIcon}
              {/* <div>{tab.icon}</div> */}
              <button>{tab.label}</button>
            </div>
          
        ))}
      </div>

      <div className="mt-6 bg-gray-500 shadow-2xl">
        {active === "Personal Info" && (
          <div>Personal Info</div>
        )}
        {active === "Delivery Address" && (
          <div>Delivery Address</div>
        )}
        {active === "Security" && (
          <div>Security</div>
        )}
        {active === "Notifications" && (
          <div>Notification</div>
        )}
      </div>


      </div>
    </DashboardLayout>
  );
};

export default Settings;
