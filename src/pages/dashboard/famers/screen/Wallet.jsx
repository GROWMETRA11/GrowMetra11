import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import WalletIcons from '../../../../Components/iconComponent/WalletIcons'
import EyeoffIcon from '../../../../Components/iconComponent/EyeoffIcon'
import SpentIcon from '../../../../Components/iconComponent/SpentIcon'
import EscrowLock from '../../../../Components/iconComponent/EscrowLock'


const Wallet = () => {

    const walletCards = [
      {
        title: "Available Balance",
        amount: "₦28,500",
        icon: <WalletIcons />,
        lock: <EyeoffIcon />,
        bg: "bg-green-500 text-white",
        className: "",
      },
      {
        title: "Escrowed Funds",
        amount: "₦12,311",
        icon: <EscrowLock />,
        lock: <EyeoffIcon />,
        text: "Held safely in escrow",
        bg: "bg-gray-100 text-gray-600",
        className: "",
      },
      {
        title: "Total Spent This Month",
        amount: "₦10,500",
        icon: <SpentIcon />,
        lock: <EyeoffIcon />,
        text: "Last 30 days",
        bg: "bg-white text-gray-600",
        className: "",
      },
    ];
    


  return (
       <DashboardLayout>
      <h2 className='font-normal text-[32px] '>My Wallet</h2>
      <p className='font-normal text-base '>Manage your funds and purchases securely</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
        {walletCards.map((card,index) => (
          <div key={index} className={`rounded-xl px-6 py-12 shadow-sm ${card.bg}`}>
            
            <div className='flex items-center justify-between font-medium mb-[15px]'>
              <span>{card.icon}</span>
              <span>{card.lock}</span>
            </div>
            <p className='mb-2'>{card.title}</p>
            <p className='mb-2  text-[40px]'>{card.amount}</p>
            <p>{card.text}</p>

          </div>
        ))}
      </div>


    </DashboardLayout>
  )
}

export default Wallet