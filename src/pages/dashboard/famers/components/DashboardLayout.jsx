
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
    <section>
        {/* SideBar */ }
        <div className='h-screen border-r-[0.2px] border-r-gray-400 shadow-md shadow-[#1B1C1D0]  max-w-[261px] bg-white '>
            { /* Logo */ }
            <div className='px-[41px] py-6 border-b-[0.2px] border-b-gray-400 '>
                <img className='w-[90px]' src={Logo} alt="Logo" />
            </div>
            { /* Links */ }
           <div >
             {dashBoardLink.map((item,index) => (
                <div key={index}  className=' px-5 py-3 mb-2 '>
                    <Link className={`flex gap-3 p-2 items-center font-medium text-[18px] rounded-md ${active.split("/")[1].toLowerCase() === item.title.toLowerCase() ? "bg-green-500 text-white"
                        : "text-gray-500 hover:bg-green-100 hover:text-green-500"
                    }`}  to={item.links}>{active.split("/")[1].toLowerCase() === item.title.toLowerCase() ? item.activeIcon : item.inActiveIcon} {item.title}</Link>
                </div>
            ))}
           </div>
        </div>

        { /* Header */}
        <div className=' w-[calc(100%-261px)] border-b-[0.2px]  border-gray-400 h-24 fixed p-6  top-0 left-[261px]'>
            <div className='flex justify-between  items-center gap-5 h-full'>
                <div className='flex items-center gap-3 w-full max-w[516px] relative'>
                    <SearchIcon className="mx-[15px]"  />
                    <input className='absolute w-full max-w-[516px] px-[47px] py-[15px] border-box border border-gray-400 rounded-lg  outline-none ' type="text" placeholder='Search Products, sellers...' />
                </div>
                <div className='flex items-center gap-5'>
                    <NotificationIcon className="px-3" />
                    <img className='w-10' src={ProfileIcon} alt="ProfileIcon" />
                </div>
            </div>
        </div>

        { /* Contents */ }
        <div className='h-screen p-6 overflow-y-auto w-[calc(100%-261px)] fixed top-24 left-[261px]'>
            {children}
        </div>
    </section>
  )
}

export default DashboardLayout