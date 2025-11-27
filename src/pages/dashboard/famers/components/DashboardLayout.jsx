
import NotificationIcon from "../../../../Components/iconComponent/NotificationIcon"
import ProfileIcon from '../../../../assets/images/ProfileImg.png'
import Logo from '../../../../assets/logos/Growmetra_limited_Logo-removebg-preview 1.svg'
import Home from '../../../../Components/iconComponent/Home'
import Cart from '../../../../Components/iconComponent/Cart'
import { Link, useLocation } from 'react-router-dom'
import SearchIcon from '../../../../Components/iconComponent/SearchIcon'
import WalletIcon from '../../../../Components/iconComponent/WalletIcon'
import OrdersIcon from '../../../../Components/iconComponent/OrdersIcon'
import MarketIcon from '../../../../Components/iconComponent/MarketIcon'
import SettingsIcon from "../../../../Components/iconComponent/SettingsIcon"
import LogoutIcon from "../../../../Components/iconComponent/LogoutIcon"



const DashboardLayout = ({children}) => {
    const location = useLocation()
    const active = location.pathname
    console.log(active)
const dashBoardLink = [{
    title: "Dashboard",

    activeIcon: <Home color="#FFFFFF" />,
    inActiveIcon: <Home color="#545454" />,
    links: "/dashboard",
},
{
    title: "Marketplace",
    activeIcon:<MarketIcon  color="#FFFFFF" /> ,
    inActiveIcon: <MarketIcon  color="#545454" />,
    links: "/marketplace",
},
{
    title: "Orders",
    activeIcon: <OrdersIcon  color="#FFFFFF" />,
    inActiveIcon: <OrdersIcon  color="#545454" />,
    links: "/orders",
},
{
    title: "Wallet",
    activeIcon: <WalletIcon  color="#FFFFFF" />,
    inActiveIcon: <WalletIcon  color="#545454" />,
    links: "/wallet",
},
{
    title: "Cart",
    activeIcon: <Cart  color="#FFFFFF" />,
    inActiveIcon: <Cart  color="#545454" />,
    links: "/cart",
},
]



  return (
    <section className="h-screen flex">
    {/* SideBar */}
    <div className='border-r-[0.2px] flex flex-col h-screen border-r-gray-400 shadow-md shadow-[#1B1C1D0] max-w-[261px] w-[261px] bg-white fixed left-0 top-0'>
       {/* Logo */}
        <div className='px-[41px] py-6 border-b-[0.2px] border-b-gray-400'>
            <img className='w-[90px]' src={Logo} alt="Logo" />
        </div>
        
        {/* Links - ADD flex-1 HERE */}
        <div className='flex-1 overflow-y-auto'>
         {dashBoardLink.map((item,index) => (
            <div key={index} className='px-5 py-1 mb-2'>
                <Link 
                    className={`flex gap-3 p-3 items-center font-medium text-[18px] rounded-md ${
                        active.split("/")[1].toLowerCase() === item.title.toLowerCase() 
                            ? "bg-green-500 text-white"
                            : "text-gray-500 hover:bg-green-100 hover:text-green-500"
                    }`}  
                    to={item.links}
                >
                    {active.split("/")[1].toLowerCase() === item.title.toLowerCase() ? item.activeIcon : item.inActiveIcon} 
                    {item.title}
                </Link>
            </div>
        ))}
       </div>
       
       {/* Bottom - This will now stick to bottom */}
        <div className="border-t-[0.2px] border-t-gray-400 py-4 mt-[7px]">
            <div className="flex items-center gap-3 px-6 py-3 text-gray-500 hover:bg-green-100 hover:text-green-500 cursor-pointer rounded-md mx-5">
                <SettingsIcon />
                <p>Settings</p>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 text-gray-500 hover:bg-green-100 hover:text-green-500 cursor-pointer rounded-md mx-5">
                <LogoutIcon />
                <p>Log out</p>
            </div>
       </div>
    </div>
    

    {/* Header */}
    <div className='w-[calc(100%-261px)] border-b-[0.2px] border-gray-400 h-24 fixed p-6 top-0 left-[261px] bg-white z-10'>
        <div className='flex justify-between items-center gap-5 h-full'>
            <div className='flex items-center gap-3 w-full max-w-[516px] relative'>
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                    className='w-full max-w-[516px] pl-[47px] pr-4 py-[15px] border border-gray-400 rounded-lg outline-none' 
                    type="text" 
                    placeholder='Search Products, sellers...' 
                />
            </div>
            <div className='flex items-center gap-5'>
                <NotificationIcon className="px-3" />
                <img className='w-10 h-10 rounded-full object-cover' src={ProfileIcon} alt="ProfileIcon" />
            </div>
        </div>
    </div>

    {/* Contents */}
    <div className='h-screen p-6 overflow-y-auto w-[calc(100%-261px)] fixed top-24 left-[261px] bg-gray-50'>
        {children}
    </div>
</section>
  )
}

export default DashboardLayout