import React from 'react'
import Layout from '../components/Layout'
import ArrowBack from '../../../../Components/iconComponent/ArrowBack'
import InfoIcon from '../../../../Components/iconComponent/InfoIcon'

const AddProducts = () => {
  return (
    <Layout>
        <div className='flex flex-col justify-center items-center'>
            <div>
            <div className='flex items-center gap-4 mb-6'>
                <ArrowBack />
                <div>
                    <h2 className='font-bold text-2xl manrope'>Add New Product</h2>
                    <p className='inter font-normal text-base text-[#6A7282]'>Fill in the details to list your produce</p>
                </div>
            </div>

            <div className='w-full max-w-[768px] p-[25px] bg-white border border-gray-300 rounded-lg mb-6'>
                    <div className='flex items-center gap-3 mb-4'>
                        <InfoIcon />
                        <p className='font-bold text-[18px] manrope'>Product information</p>
                    </div>

                    <div>
                        <label htmlFor="productName" className='inter font-medium text-base mb-2'>Product Name</label>
                        <input type="text" placeholder='e.g Fresh Red Tomatoes' className='w-full inline-flex justify-center items-center px-4 py-3  border border-gray-200' />
                    </div>
                    <div className='flex justify-between gap-6 my-6'>
                        <div>
                        <label htmlFor="category" className='inter font-medium text-[14px] mb-2'>Category</label>
                        <input type="text" placeholder='e.g Fresh Red Tomatoes' className='w-full h-10 border border-gray-200' />
                        </div>
                        <div>
                        <label htmlFor="harvest" className='inter font-medium text-[14px] mb-2'>Harvest Date</label>
                        <input type="text" placeholder='e.g Fresh Red Tomatoes' className='w-full h-10 border border-gray-200' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className='inter font-medium text-[14px] mb-2'>Description</label>
                        <textarea  name="description" id="description" placeholder='Describe the quality, size and source...' className='resize-none px-4 py-2 w-full'></textarea>
                        </div>
                </div>

                <div className='w-full max-w-[768px] p-[25px] bg-white border border-gray-300 rounded-lg mb-6'>
                <h2>Pricing and Quality</h2>

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
                <div>
                    <label htmlFor="price" className='block'>Price (₦)</label>
                    <input type="text" placeholder='0.00' className='px-4 py-3 w-full max-w-[233.33px] border-2 border-gray-300 rounded-lg'  />
                </div>
                <div>
                    <label htmlFor="unit" className='block'>Unit</label>
                    <input type="text" placeholder='' className='px-4 py-3 w-full max-w-[233.33px] border-2 border-gray-300 rounded-lg'  />
                </div>
                <div>
                    <label htmlFor="total stock" className='block'>Total Stock</label>
                    <input type="text" placeholder='0' className='px-4 py-3 w-full max-w-[233.33px] border-2 border-gray-300 rounded-lg'  />
                </div>
                <div>
                    <label htmlFor="order quality" className='block'>Min order quality</label>
                    <input type="text" placeholder='1' className='px-4 py-3 w-full max-w-[233.33px] border-2 border-gray-300 rounded-lg'  />
                </div>
                </div>

                
                </div>


            </div>
        </div>
    </Layout>
  )
}

export default AddProducts