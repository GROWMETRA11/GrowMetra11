import { React, useState } from "react";

import DashboardLayout from "../../components/DashboardLayout";
import PersonalIcon from "../../../../../Components/iconComponent/PersonalIcon";
import Location from "../../../../../Components/iconComponent/Location";
import SecurityIcon from "../../../../../Components/iconComponent/SecurityIcon";
import Notification from "../../../../../Components/iconComponent/Notification";
import Secure from "../../../../../Components/iconComponent/Secure";
import profile from "../../../../../assets/images/ProfileImg.png";

const Settings = () => {
  const [active, setActive] = useState("Personal Info");
  


  const tabs = [
    {
      id: 1,
      label: "Personal Info",
      activeIcon: <PersonalIcon color="#4CAF50" />,
      inActiveIcon: <PersonalIcon color="#A4A4A4" />,
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
  ];

  const delivery = [
    {
      id: 1,
      title: "Home",
      location: "123 Lekki Street, Lekki, Lagos",
      contact: "+234 800 000 0001",
      status: "Default",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 2,
      title: "Office",
      location: "456 Victoria Island, VI, Lagos",
      contact: "+234 800 000 0002",
      edit: "Edit",
      delete: "Delete",
    },
  ];

  const notifications = [
    {
      id: 1,
      label: "Notification Preferences",
      title: "Order Updates",
      text: "Get notified when your order status changes",
      
    },
    {
      id: 2,
      title: "Delivery Alerts",
      text: "Receive alerts when deliveries arrive",
      
    },
    {
      id: 3,
      title: "Seller Messages",
      text: "Get notified of new messages from sellers",
      
    },
    {
      id: 4,
      title: "Promotional Offers",
      text: "Receive special deals and promotions",
      
    },
    {
      id: 5,
      title: "Email Notifications",
      text: "Receive updates via email",
      
    },
    {
      id: 6,
      title: "SMS Alerts",
      text: "Receive urgent updates via SMS",
    },
  ];

  return (
    <DashboardLayout>
      <div className="w-full">
        <div>
          <h1 className="text-[32px] font-normal">Profile & Settings</h1>
          <p className="text-base font-normal text-gray-700">
            Manage your account and preferences
          </p>
        </div>

        <div className="bg-white rounded-lg px-6 py-[54px] mt-6 w-full">
          <div className="flex items-center gap-4">
            <Secure />
            <div>
              <p className="text-gray-800 font-normal text-2xl mb-[10px] ">
                Verified Buyer Account
              </p>
              <p className="text-gray-700 font-light text-[18px] ">
                Your account has been verified. You can browse and purchase with
                full access.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[18px] flex gap-10">
          {tabs.map((tab, index) => (
            <div
              onClick={() => setActive(tab.label)}
              key={index}
              className={`flex items-center gap-2 
            ${
              active === tab.label
                ? "text-green-500 border-b-1 border-green-500"
                : " text-gray-500"
            }
            `}
            >
              {active === tab.label ? tab.activeIcon : tab.inActiveIcon}
              {/* <div>{tab.icon}</div> */}
              <button>{tab.label}</button>
            </div>
          ))}
        </div>

        <div className="w-full">
          {active === "Personal Info" && (
            <div>
              <div className="mt-12 flex items-center gap-4">
                <img className="w-20 h-20 rounded-full" src={profile} alt="" />
                <div>
                  <p className="font-normal text-[20px] ">
                    Abdurrahman Onitilo
                  </p>
                  <button className="px-[16.5px] font-normal text-base border border-gray-400 rounded-md py-[10px]">
                    Change Picture
                  </button>
                </div>
              </div>
              <div className="w-full">
                <form action="" className=" w-full px-8 py-[50px] bg-white">
                  <div className="mb-6">
                    <label htmlFor="" className="text-[20px]">
                      Full Name
                    </label>
                    <br />
                    <input
                      className="mt-3 w-full box-sizing px-6 py-[13.5px] border border-gray-400 rounded-md"
                      type="text"
                      placeholder="Abdurrahman Onitilo"
                    />
                  </div>

                  <div className="mb-6 ">
                    <label htmlFor="" className="text-[20px]">
                      Email Address
                    </label>
                    <br />
                    <input
                      className="mt-3 w-full box-sizing px-6 py-[13.5px] border border-gray-400 rounded-md"
                      type="email"
                      placeholder="Onitiloabdurrahman@gmail.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="" className="text-[20px]">
                      Phone Number
                    </label>
                    <br />
                    <input
                      className="mt-3 w-full box-sizing px-6 py-[13.5px] border border-gray-400 rounded-md"
                      type="text"
                      placeholder="+234 90 50 51 0995"
                    />
                  </div>

                  <div className="mb-10">
                    <label htmlFor="" className="text-[20px]">
                      Date of Birth
                    </label>
                    <br />
                    <input
                      className="mt-3 w-full box-sizing px-6 py-[13.5px] border border-gray-400 rounded-md"
                      type="date"
                      placeholder=""
                    />
                  </div>

                  <button className="bg-green-500 w-full rounded-md flex items-center text-white justify-center h-[50px]">
                    Save Changes
                  </button>
                </form>

                <div className="h-[2px] mt-[74px] w-full bg-gray-300"></div>
              </div>
            </div>
          )}

          {/* Delivery Address */}
          <div>
            {active === "Delivery Address" && (
              <div className="mt-[61px]">
                {delivery.map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-8 w-full bg-white rounded-lg mb-[30px] flex justify-between "
                  >
                    <div>
                      <h2 className="text-[20px] font-normal text-black">
                        {item.title}
                      </h2>
                      <p className="text-[18px] font-normal text-gray-600 my-3 ">
                        {item.location}
                      </p>
                      <p className="text-base font-normal text-gray-700">
                        {item.contact}
                      </p>

                      <div className="flex gap-6 mt-6 font-normal text-[18px]">
                        <div className="border border-gray-300 px-[28.5px] py-[8.5px] rounded-md">
                          {item.edit}
                        </div>
                        <div className="border border-red-400 text-red-500 px-[22px] py-[8.5px] rounded-md">
                          {item.delete}
                        </div>
                      </div>
                    </div>

                    <div>
                      {item.status && (
                        <p className="bg-green-100 px-[20.5px] py-[11px] rounded-lg text-green-400">
                          {item.status}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                <button className="bg-green-500 w-full rounded-md mt-10 flex items-center text-white justify-center h-[50px]">
                  Save Changes
                </button>

                <div className="h-[2px] mt-[187px] w-full bg-gray-300"></div>
              </div>
            )}
          </div>

          {/* Security */}
          <div className="w-full">
            {active === "Security" && (
              <div>
                <div className="flex justify-between bg-white rounded-lg px-6 py-8 items-center mt-[30px]">
                  <div className="font-normal">
                    <h2 className="text-[20px] ">Two-Factor Authentication.</h2>
                    <p className="my-[18px] text-gray-700">
                      Enable 2FA for enhanced security.
                    </p>
                    <p className="text-base text-gray-600">
                      We'll send you a code via SMS or email when you log in.
                    </p>
                  </div>
                  <div>
                    <input
                      className="w-7 h-7"
                      type="checkbox"
                      id=""
                      name=""
                      value=""
                    />
                  </div>
                </div>

                <form action="" className="px-6 py-8 bg-white rounded-lg mt-8">
                  <h2 className="mb-6">Change Password</h2>
                  <div>
                    <div className="mb-6">
                      <label className="block mb-3" htmlFor="">
                        Current Password
                      </label>
                      <input
                        className="w-full rounded-lg h-[50px] border border-gray-400"
                        type="text"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block mb-3" htmlFor="">
                        New Password
                      </label>
                      <input
                        className="w-full rounded-lg h-[50px] border border-gray-400"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block mb-3" htmlFor="">
                        New Password
                      </label>
                      <input
                        className="w-full rounded-lg h-[50px] border border-gray-400"
                        type="text"
                      />
                    </div>
                  </div>
                </form>
                <button className="bg-green-500 w-full rounded-md mt-10 flex items-center text-white justify-center h-[50px]">
                  Update Password
                </button>

                <div className="h-[2px] mt-[98px] w-full bg-gray-300"></div>
              </div>
            )}
          </div>

          {/* Notification */}
          <div>
            {active === "Notifications" && (
              <div>
                {notifications.map((items, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg px-6 py-8 mb-[11px]"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[20px] font-light mb-[18px] ">
                          {items.label}
                        </p>
                        <p className="font-normal text-[18px] text-gray-700 mb-2">
                          {items.title}
                        </p>
                        <p className="font-light text-base text-gray-600">
                          {items.text}
                        </p>
                      </div>
                      <div className=" cursor-pointer">
                
                      <input
                        type="checkbox"
                        className="size-7 accent-green-600  rounded-md !text-white "
                      />
                 
              
                </div>
                    </div>
                  </div>
                ))}
               
                <button className="bg-green-500 w-full rounded-md mt-10 flex items-center text-white justify-center h-[50px]">
                  Update Preference
                </button>

                <div className="h-[2px] mt-[35px] w-full bg-gray-300"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
