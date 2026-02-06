import React from 'react'
import Layout from '../components/Layout'
import DeliveryIcon2 from '../../../../Components/iconComponent/DeliveryIcon2'

const Deliveries = () => {
  return (
    <Layout> 
        <div className='mb-6'>
            <h2 className='text-2xl font-bold text-[#333333] mb-1'>Deliveries</h2>
            <p className='inter font-normal text-base text-[#6A7282]'>Track active shipments and delivery partners.</p>
        </div>

        <div className='flex gap-6'>
        <div className='border border-[#E0E0E0] bg-[#F3F4F6]  rounded-xl p-4 w-full max-w-[688px] '>
            <div className='flex justify-between items-center  border-b border-[#F3F4F6]'>
                <div className='flex items-center gap-3'>
                    <DeliveryIcon2 />
                    <div>
                        <h2 className='font-bold inter text-sm mb-[6px]'>#del_1</h2>
                        <h3 className='font-normal inter text-xs text-[#6A7282]'>Order #001</h3>
                    </div>
                </div>
                <p className='text-xs font-medium inter px-[10px] rounded-[33554400px]   py-1 bg-[#FEF9C2] text-[#894B00]'>In Transit</p>
            </div>
            <div className=''>

            </div>
        </div>

        <div className='p-[21px] flex-1 border border-[#E0E0E0]'>

        </div>
        </div>
    </Layout>
  )
}

export default Deliveries