import React from 'react'
import Layout from '../components/Layout'
import Btn from '../../../../Components/Buttons/Btn'
import PlusIcon from '../../../../Components/iconComponent/PlusIcon'
import SearchIcon from '../../../../Components/iconComponent/SearchIcon'
import FilterIcon from '../../../../Components/iconComponent/FilterIcon'
import ArrowDown from '../../../../Components/iconComponent/ArrowDown'
import SalesIcon from '../../../../Components/iconComponent/SalesIcon'
import StockIcon from '../../../../Components/iconComponent/StockIcon'
import EyeOpen from '../../../../Components/iconComponent/EyeOpen'
import Maize from '../../../../assets/images/Maize.webp'
import Tomatoes from '../../../../assets/images/Fresh Tomatoes.png'
import Yam from '../../../../assets/images/Cassava Tubers.png'
import SoyaBeans from '../../../../assets/images/Apple.webp'
import EditIcon from '../../../../Components/iconComponent/EditIcon'

const Products = () => {

  const ProductItems = [
    {
      title: "Organic Yellow Maize",
      desc: "Grains",
      image: Maize ,
      price: "₦1,200",
      weight: "/kg",
      status: "Active",
      stock: "500 kg",
      stockIcon: <StockIcon />,
      sales: "120 sold",
      salesIcon: <SalesIcon />
    },
    {
      title: "Fresh Red Tomatoes",
      desc: "Grains",
      image: Tomatoes ,
      price: "₦1,200",
      weight: "/kg",
      status: "Active",
      stock: "500 kg",
      stockIcon: <StockIcon />,
      sales: "120 sold",
      salesIcon: <SalesIcon />
    },
    {
      title: "Tubers of Yam",
      desc: "Grains",
      image: Yam ,
      price: "₦1,200",
      weight: "/kg",
      status: "Active",
      stock: "500 kg",
      stockIcon: <StockIcon />,
      sales: "120 sold",
      salesIcon: <SalesIcon />
    },
    {
      title: "Tubers of Yam",
      desc: "Grains",
      image: SoyaBeans ,
      price: "₦1,200",
      weight: "/kg",
      status: "paused",
      stock: "500 kg",
      stockIcon: <StockIcon />,
      sales: "120 sold",
      salesIcon: <SalesIcon />
    },


  ]


  return (
    <Layout>
      <div className='flex justify-between items-center mb-6'>
      <div>
        <h2 className='font-bold text-2xl'>My Products</h2>
        <p className='inter text-base text-gray-400 font-normal'>Manage your catalogue and pricing.</p>
      </div>

      <div>
        <Btn
        className='text-white inter font-medium text-base bg-green-500 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-lg' 
        >
          <PlusIcon />
          <p className='font-medium inter text-base'>Add <span className='hidden md:inline-flex'>products</span></p>
        </Btn>
      </div>
      </div>

      <div className='shadow-md border-2 border-[#E5E7EB] p-[17px] rounded-lg flex flex-col md:flex-row justify-between gap-4 items-center mb-6'>
        <div className='relative flex gap-[10px] flex-1 w-full items-center'>
          <input type="text" placeholder='Search Products... ' className='bg-[#F8F9FA]  pl-10 py-[10px] text-sm border border-[#E5E7EB] rounded-lg w-full outline-[#E5E7EB] ' />
          <div className='absolute left-3'>
          <SearchIcon  />
          </div>
        </div>

          <div className='flex gap-2 items-center'>
          <div className='px-[17px]  border border-gray-200 rounded-lg py-[11px] flex items-center justify-center gap-2'>
            <div><FilterIcon /></div>
            <p className='inter font-medium text-sm text-[#666666]'>Filter</p>
          </div>
          <div className='px-4  border border-[#E5E7EB] rounded-lg py-[11px] text-[14px] flex items-center justify-center gap-2'>
          <p className='inter font-regular text-sm text-[#666666]'>All categories</p>
            <div><ArrowDown /></div>
          </div>
          </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8'>
        {ProductItems.map((items) => (
          <div key={items.desc} className='w-full mx-auto min-w-[324px] border border-[#E5E7EB] bg-white rounded-lg '>
            <div className='relative'>
            <img src={items.image} alt={items.title} className='w-full h-[200px] object-cover rounded-t-lg' />
            <p className={`px-3 py-1 absolute top-[14px] left-3 text-xs font-semibold rounded-full max-w-[70px] text-center ${items.status === "paused" ? "bg-amber-100" : "bg-green-200 text-green-900"}`}>{items.status}</p>
            </div>
           <div className='p-4'>
            <div className=' flex justify-between'>
             <div>
             <p className='w-full text-lg font-bold'>{items.title}</p>
             <p className='inter font-normal text-sm text-[#666666]  '>{items.desc}</p>
             </div>

             <div>
              <p className='manrope font-bold text-lg text-[#4CAF50]'>{items.price}</p> 
              <p  className='inter font-normal text-xs text-right text-[#666666] '>{items.weight}</p></div>
            </div>

            <div className=' flex items-center py-[13px]  gap-3 my-4 border-t border-[#E5E7EB] border-b '>
              <div className='flex items-center w-full max-w-[139px] gap-2'>
                {items.stockIcon}
                <div>
                  <p className='inter font-normal text-xs text-[#666666]'>Stock</p>
                  <p className='font-semibold text-sm '>{items.stock}</p>
                </div>
              </div>
              <div className='flex items-center w-full max-w-[139px]  gap-2'>
                {items.salesIcon}
                <div>
                  <p className='inter font-normal text-xs text-[#666666]'>Sales</p>
                  <p className='font-semibold text-sm '>{items.sales}</p>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-between gap-2'>
              <div className=' inline-flex items-center w-full gap-2 rounded-lg bg-green-500 py-3 justify-center'>
                <div className=''><EditIcon /></div>
              <Btn
              className=' inter font-medium text-sm inline-flex items-center justify-center  text-white rounded-lg'
              >
                Edit Product
              </Btn>
              </div>
              <div> <EyeOpen /> </div>
            </div>

          </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Products