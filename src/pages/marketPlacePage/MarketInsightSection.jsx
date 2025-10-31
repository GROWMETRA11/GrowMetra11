
import React from 'react'
import insight1 from "../../assets/icons/insight1.svg"
import insight2 from "../../assets/icons/insight2.svg"
import insight3 from "../../assets/icons/insight3.svg"

const MarketInsightSection = () => {
  return (
    <section className='w-full mx-auto px-5  py-20 bg-[#FAFAFA] '>
        <div className='max-w-[1152px] w-full mx-auto  '>
            <h2 className='font-bold text-center text-5xl leading-12 '>Marketplace Insights</h2>
            <p className='inter font-normal text-center text-[14px] mb-12 leading-7 mt-4'>Join a thriving community transforming Nigerian agriculture</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 items-stretch gap-8'>
                <div className=' flex flex-col py-8 justify-center items-center text-center shadow-md rounded-xl '>
                    <img className='mb-6' src={insight1} alt="" />
                    <h3 className='font-bold text-4xl mb-2 text-green-500 leading-10'>1,200+</h3>
                    <h2 className='font-semibold text-[20px] mb-2 leading-7'>Verified Farmers</h2>
                    <p className='inter font-normal text-[16px] leading-6'>Trusted suppliers across Nigeria</p>
                </div>
                <div className=' flex flex-col py-8 justify-center items-center text-center shadow-md rounded-xl '>
                    <img className='mb-6' src={insight3} alt="" />
                    <h3 className='font-bold text-4xl mb-2 text-green-500 leading-10'>#50M+</h3>
                    <h2 className='font-semibold text-[20px] mb-2 leading-7'>Trades Facilitated</h2>
                    <p className='inter font-normal text-[16px] leading-6'>Empowering agricultural commerce</p>
                </div>
                <div className=' flex flex-col py-8 justify-center items-center text-center shadow-md rounded-xl '>
                    <img className='mb-6' src={insight2} alt="" />
                    <h3 className='font-bold text-4xl mb-2 text-green-500 leading-10'>800+</h3>
                    <h2 className='font-semibold text-[20px] mb-2 leading-7'>Active Buyers</h2>
                    <p className='inter font-normal text-[16px] leading-6'>Growing network of partners</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MarketInsightSection