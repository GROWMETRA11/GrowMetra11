import { React, useState } from "react";

import DashboardLayout from "../../components/DashboardLayout";
import PersonalIcon from "../../../../../Components/iconComponent/PersonalIcon";
import Location from "../../../../../Components/iconComponent/Location";
import SecurityIcon from "../../../../../Components/iconComponent/SecurityIcon";
import Notification from "../../../../../Components/iconComponent/Notification";
import Secure from "../../../../../Components/iconComponent/Secure";
import profile from "../../../../../assets/images/ProfileImg.png";
import DeliveryMan from "../../../../../assets/images/Delivery service with a man delivering packages.png";

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
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div>
          <h1 className="text-[28px] sm:text-[32px] font-normal">Profile & Settings</h1>
          <p className="text-sm sm:text-base font-normal text-gray-700">
            Manage your account and preferences
          </p>
        </div>

        <div className="bg-white rounded-lg px-4 sm:px-6 py-6 sm:py-[54px] mt-6 w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Secure />
            <div>
              <p className="text-gray-800 font-normal text-xl sm:text-2xl mb-2 sm:mb-[10px] ">
                Verified Buyer Account
              </p>
              <p className="text-gray-700 font-light text-sm sm:text-[18px] ">
                Your account has been verified. You can browse and purchase with
                full access.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-[18px] flex flex-wrap gap-4 sm:gap-10">
          {tabs.map((tab, index) => (
            <div
              onClick={() => setActive(tab.label)}
              key={index}
              className={`flex items-center gap-2 
                ${
                  active === tab.label
                    ? "text-green-500 border-b-2 border-green-500"
                    : " text-gray-500"
                }`}
            >
              {active === tab.label ? tab.activeIcon : tab.inActiveIcon}
              <button className="text-sm sm:text-base">{tab.label}</button>
            </div>
          ))}
        </div>

        <div className="w-full mt-6">
          {active === "Personal Info" && (
            <div>
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-4">
                <img className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" src={profile} alt="" />
                <div className="flex flex-col gap-2 sm:gap-4 w-full">
                  <p className="font-normal text-[18px] sm:text-[20px] ">
                    Abdurrahman Onitilo
                  </p>
                  <button className="px-4 sm:px-[16.5px] font-normal text-sm sm:text-base border border-gray-400 rounded-md py-2 sm:py-[10px] w-full sm:w-auto">
                    Change Picture
                  </button>
                </div>
              </div>
              <div className="w-full">
                <form action="" className=" w-full px-2 sm:px-8 py-6 sm:py-[50px] bg-white">
                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="" className="text-base sm:text-[20px]">
                      Full Name
                    </label>
                    <br />
                    <input
                      className="mt-2 sm:mt-3 w-full box-sizing px-3 sm:px-6 py-2 sm:py-[13.5px] border border-gray-400 rounded-md"
                      type="text"
                      placeholder="Abdurrahman Onitilo"
                    />
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="" className="text-base sm:text-[20px]">
                      Email Address
                    </label>
                    <br />
                    <input
                      className="mt-2 sm:mt-3 w-full box-sizing px-3 sm:px-6 py-2 sm:py-[13.5px] border border-gray-400 rounded-md"
                      type="email"
                      placeholder="Onitiloabdurrahman@gmail.com"
                    />
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="" className="text-base sm:text-[20px]">
                      Phone Number
                    </label>
                    <br />
                    <input
                      className="mt-2 sm:mt-3 w-full box-sizing px-3 sm:px-6 py-2 sm:py-[13.5px] border border-gray-400 rounded-md"
                      type="text"
                      placeholder="+234 90 50 51 0995"
                    />
                  </div>

                  <div className="mb-8 sm:mb-10">
                    <label htmlFor="" className="text-base sm:text-[20px]">
                      Date of Birth
                    </label>
                    <br />
                    <input
                      className="mt-2 sm:mt-3 w-full box-sizing px-3 sm:px-6 py-2 sm:py-[13.5px] border border-gray-400 rounded-md"
                      type="date"
                      placeholder=""
                    />
                  </div>

                  <button className="bg-green-500 w-full rounded-md flex items-center text-white justify-center h-[45px] sm:h-[50px]">
                    Save Changes
                  </button>
                </form>

                <div className="h-[2px] mt-16 sm:mt-[74px] w-full bg-gray-300"></div>
              </div>
            </div>
          )}

          {/* Delivery Address */}
          <div>
            {active === "Delivery Address" && (
              <div className="mt-6 sm:mt-[61px] flex flex-col gap-4">
                {delivery.length > 1 ? (
                  delivery.map((item, index) => (
                    <div
                      key={index}
                      className="px-4 sm:px-6 py-6 sm:py-8 w-full bg-white rounded-lg mb-4 sm:mb-[30px] flex flex-col sm:flex-row justify-between gap-4"
                    >
                      <div className="flex flex-col gap-2 sm:gap-3 w-full sm:max-w-[70%]">
                        <h2 className="text-[18px] sm:text-[20px] font-normal text-black">
                          {item.title}
                        </h2>
                        <p className="text-[16px] sm:text-[18px] font-normal text-gray-600">
                          {item.location}
                        </p>
                        <p className="text-sm sm:text-base font-normal text-gray-700">
                          {item.contact}
                        </p>

                        <div className="flex flex-wrap gap-2 sm:gap-6 mt-4 sm:mt-6 font-normal text-[16px] sm:text-[18px]">
                          <div className="border border-gray-300 px-4 sm:px-[28.5px] py-2 sm:py-[8.5px] rounded-md">
                            {item.edit}
                          </div>
                          <div className="border border-red-400 text-red-500 px-4 sm:px-[22px] py-2 sm:py-[8.5px] rounded-md">
                            {item.delete}
                          </div>
                        </div>
                      </div>

                      {item.status && (
                        <p className="bg-green-100 px-4 sm:px-[20.5px] py-2 sm:py-[11px] rounded-lg text-green-400 mt-2 sm:mt-0">
                          {item.status}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <img
                      src={DeliveryMan}
                      alt="Delivery Man"
                      className="w-[200px] sm:w-[309px]"
                    />
                    <p>You haven’t added any delivery addresses yet</p>

                    <button className="bg-green-500 text-white w-full sm:w-auto h-[45px] sm:h-[50px] flex justify-center items-center rounded-lg text-[16px] sm:text-[20px] font-medium">
                      Add New Address
                    </button>
                  </div>
                )}

                <button className="bg-green-500 w-full rounded-md mt-4 sm:mt-10 flex items-center text-white justify-center h-[45px] sm:h-[50px]">
                  Save Changes
                </button>

                <div className="h-[2px] mt-16 sm:mt-[187px] w-full bg-gray-300"></div>
              </div>
            )}
          </div>

          {/* Security */}
          <div className="w-full">
            {active === "Security" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row justify-between bg-white rounded-lg px-4 sm:px-6 py-4 sm:py-8 items-start sm:items-center mt-4 sm:mt-[30px]">
                  <div className="font-normal flex-1">
                    <h2 className="text-[18px] sm:text-[20px]">Two-Factor Authentication.</h2>
                    <p className="my-2 sm:my-[18px] text-gray-700 text-sm sm:text-base">
                      Enable 2FA for enhanced security.
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      We'll send you a code via SMS or email when you log in.
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <input
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      type="checkbox"
                      id=""
                      name=""
                      value=""
                    />
                  </div>
                </div>

                <form action="" className="px-4 sm:px-6 py-4 sm:py-8 bg-white rounded-lg">
                  <h2 className="mb-4 sm:mb-6">Change Password</h2>
                  <div className="flex flex-col gap-4">
                    <div className="mb-4 sm:mb-6">
                      <label className="block mb-2 sm:mb-3" htmlFor="">
                        Current Password
                      </label>
                      <input
                        className="w-full rounded-lg h-[45px] sm:h-[50px] border border-gray-400"
                        type="text"
                      />
                    </div>
                    <div className="mb-4 sm:mb-6">
                      <label className="block mb-2 sm:mb-3" htmlFor="">
                        New Password
                      </label>
                      <input
                        className="w-full rounded-lg h-[45px] sm:h-[50px] border border-gray-400"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 sm:mb-3" htmlFor="">
                        New Password
                      </label>
                      <input
                        className="w-full rounded-lg h-[45px] sm:h-[50px] border border-gray-400"
                        type="text"
                      />
                    </div>
                  </div>
                </form>
                <button className="bg-green-500 w-full rounded-md mt-4 sm:mt-10 flex items-center text-white justify-center h-[45px] sm:h-[50px]">
                  Update Password
                </button>

                <div className="h-[2px] mt-8 sm:mt-[98px] w-full bg-gray-300"></div>
              </div>
            )}
          </div>

          {/* Notification */}
          <div>
            {active === "Notifications" && (
              <div className="flex flex-col gap-4">
                {notifications.length < 0 ? (
                  notifications.map((items, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg px-4 sm:px-6 py-4 sm:py-8"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                        <div>
                          <p className="text-[16px] sm:text-[20px] font-light mb-2 sm:mb-[18px] ">
                            {items.label}
                          </p>
                          <p className="font-normal text-[16px] sm:text-[18px] text-gray-700 mb-1">
                            {items.title}
                          </p>
                          <p className="font-light text-sm sm:text-base text-gray-600">
                            {items.text}
                          </p>
                        </div>
                        <div className=" cursor-pointer mt-2 sm:mt-0">
                          <input
                            type="checkbox"
                            className="size-7 accent-green-600  rounded-md !text-white "
                          />
                        </div>
                      </div>

                      <button className="bg-green-500 w-full rounded-md mt-4 sm:mt-10 flex items-center text-white justify-center h-[45px] sm:h-[50px]">
                        Update Preference
                      </button>

                      <div className="h-[2px] mt-4 sm:mt-[35px] w-full bg-gray-300"></div>
                    </div>
                  ))
                ) : (
                  <div className="w-full">
                    <p>Theres no Notification</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
