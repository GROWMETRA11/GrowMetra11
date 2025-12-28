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
      status: "Active",
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
          Add products
        </Btn>
      </div>
      </div>

      <div className='shadow-md border-2 border-gray-300 p-[17px] rounded-lg flex justify-between gap-4 items-center mb-6'>
        <div className='relative flex gap-[10px] flex-1 items-center'>
          <input type="text" placeholder='Search Products... ' className='  pl-10 py-[10px] border border-gray-400 rounded w-full ' />
          <div className='absolute left-3'>
          <SearchIcon  />
          </div>
        </div>

          <div className='flex gap-2 items-center'>
          <div className='px-[17px]  border border-gray-200 rounded-lg py-[11px] flex items-center justify-center gap-2'>
            <div><FilterIcon /></div>
            <p>Filter</p>
          </div>
          <div className='px-4  border border-gray-200 rounded-lg py-[11px] text-[14px] flex items-center justify-center gap-2'>
          <p>All categories</p>
            <div><ArrowDown /></div>
          </div>

          </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {ProductItems.map((items) => (
          <div key={items.desc} className='w-full max-w-[324px] '>
            <img src={items.image} alt={items.title} className='w-full h-[200px] object-cover' />
            <div className='p-4 flex justify-between'>
             <div>
             <p>{items.title}</p>
             <p>{items.desc}</p>
             </div>
             <div>{items.price} {items.weight}</div>
            </div>

            <div className='flex  gap-3'>
              <div className='flex items-center w-full max-w-[139px] gap-2'>
                {items.stockIcon}
                <div>
                  <p>Stock</p>
                  <p>{items.stock}</p>
                </div>
              </div>
              <div className='flex items-center w-full max-w-[139px]  gap-2'>
                {items.salesIcon}
                <div>
                  <p>Sales</p>
                  <p>{items.sales}</p>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-between gap-2'>
              <div className=' inline-flex items-center justify-center relative'>
                <div className='absolute left-9'><EditIcon /></div>
              <Btn
              className='bg-green-500 px-[66.17px] inline-flex items-center justify-center py-3 text-white rounded-lg'
              >
                Edit Product
              </Btn>
              </div>
              <div> <EyeOpen /> </div>
            </div>

          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Products