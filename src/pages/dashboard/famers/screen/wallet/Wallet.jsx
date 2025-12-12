import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import WalletIcons from '../../../../../Components/iconComponent/WalletIcons';
import EyeoffIcon from '../../../../../Components/iconComponent/EyeoffIcon';
import SpentIcon from '../../../../../Components/iconComponent/SpentIcon';
import EscrowLock from '../../../../../Components/iconComponent/EscrowLock';
import PlusIcon from '../../../../../Components/iconComponent/PlusIcon';
import WidthdrawFundsIcon from '../../../../../Components/iconComponent/WidthdrawFundsIcon';
import ExportIcon from '../../../../../Components/iconComponent/ExportIcon';
import FilterIcon from '../../../../../Components/iconComponent/FilterIcon';
import Secure from '../../../../../Components/iconComponent/Secure';
import { useNavigate } from 'react-router-dom';

const Wallet = () => {
  const navigate = useNavigate();

  const walletCards = [
    { title: "Available Balance", amount: "₦28,500", icon: <WalletIcons />, lock: <EyeoffIcon />, bg: "bg-green-500 text-white" },
    { title: "Escrowed Funds", amount: "₦12,311", icon: <EscrowLock />, lock: <EyeoffIcon />, text: "Held safely in escrow", bg: "bg-gray-100 text-gray-600" },
    { title: "Total Spent This Month", amount: "₦10,500", icon: <SpentIcon />, lock: <EyeoffIcon />, text: "Last 30 days", bg: "bg-white text-gray-600" },
  ];

  const buttons = [
    { icon: <PlusIcon />, text: "Add Funds", bg: "bg-green-500 text-white" },
    { icon: <WidthdrawFundsIcon />, text: "Withdraw Funds", bg: "bg-white text-gray-900" },
    { icon: <ExportIcon />, text: "Export as PDF/CSV", bg: "bg-white text-gray-900" },
  ];

  const history = [
    { title: "Fresh Red Tomatoes from Farm Fresh Co", order: "ORD-2024-001", progress: "completed", duration: "2 hours ago", price: "₦25,000", bg: "rounded-lg bg-green-50 text-green-500" },
    { title: "Refund: Premium White Rice - Out of Stock", order: "ORD-2024-004", progress: "completed", duration: "1 day ago", price: "+₦42,500", bg: "rounded-lg bg-green-50 text-green-500" },
    { title: "Organic Yellow Maize from Green Valley Farms", order: "ORD-2024-002", progress: "Escrowed", duration: "2 days ago", price: "₦125,000", bg: "rounded-lg bg-blue-50 text-blue-500" },
    { title: "Premium Sweet Potatoes from Garden Prime", order: "ORD-2024-003", progress: "Released", duration: "5 days ago", price: "₦48,000", bg: "rounded-lg bg-orange-50 text-orange-500" },
  ];

  return (
    <DashboardLayout>
      <h2 className='font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>My Wallet</h2>
      <p className='font-normal text-sm sm:text-base md:text-lg lg:text-xl'>Manage your funds and purchases securely</p>

      {/* WALLET CARDS */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
        {walletCards.map((card, index) => (
          <div key={index} className={`rounded-xl px-6 py-12 shadow-sm ${card.bg}`}>
            <div className='flex items-center justify-between font-medium mb-4'>
              {card.icon} {card.lock}
            </div>
            <p className='mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl'>{card.title}</p>
            <p className='mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>{card.amount}</p>
            {card.text && <p className='text-sm sm:text-base md:text-lg lg:text-xl'>{card.text}</p>}
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6'>
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => btn.text === "Add Funds" && navigate("/wallet/addFunds")}
            className={`${btn.bg} flex items-center justify-center gap-4 sm:gap-6 cursor-pointer rounded-lg py-2 sm:py-3`}
          >
            {btn.icon}
            <p className='text-sm sm:text-base md:text-lg lg:text-xl'>{btn.text}</p>
          </button>
        ))}
      </div>

      {/* ESCROW INFO */}
      <div className='bg-white shadow-md rounded-lg px-6 py-10 sm:py-12 flex items-center gap-4 sm:gap-6 my-6'>
        <Secure />
        <div>
          <p className='font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2'>Protected by GrowMetra Escrow</p>
          <p className='max-w-[1010px] font-light text-sm sm:text-base md:text-lg lg:text-xl text-gray-700'>
            Your funds are securely held in escrow until you confirm delivery of your orders. This ensures safe transactions between you and sellers.
          </p>
        </div>
      </div>

      {/* TRANSACTION HISTORY */}
      <div className='bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8'>
        <h2 className='font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl'>Transaction History</h2>

        <div>
          {history.map((item, index) => {
            const isTarget = item.price === "+₦42,500";
            return (
              <div key={index} className='flex justify-between items-end mt-3 mb-10'>
                <div className='w-full max-w-[338px]'>
                  <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-700'>{item.title}</p>
                  <div className='flex items-center gap-3 sm:gap-4 my-1'>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-500'>{item.order}</p>
                    <p className={`${item.bg} px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg`}>{item.progress}</p>
                  </div>
                  <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-500'>{item.duration}</p>
                </div>
                <p className={`${isTarget ? "text-green-600 font-bold" : "text-gray-800"} text-sm sm:text-base md:text-lg lg:text-xl`}>
                  {item.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Wallet;
