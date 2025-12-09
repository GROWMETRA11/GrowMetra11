import React, { useState } from 'react'
import DashboardLayout from "../../components/DashboardLayout";
import ArrowBack from "../../../../../Components/iconComponent/ArrowBack";
import DebitCardIcon from "../../../../../Components/iconComponent/DebitCardIcon";
import PhoneIcon from "../../../../../Components/iconComponent/PhoneIcon";
import BankIcon from "../../../../../Components/iconComponent/BankIcon";

const AddFunds = () => {
  const [step, setStep] = useState(1)

  const fundsType = [
    {
      title: "Debit Card",
      text: "Visa, Mastercard",
      icon: <DebitCardIcon />,
    },
    {
      title: "USSD",
      text: "Direct bank transfer",
      icon: <PhoneIcon />,
    },
    {
      title: "Bank Transfer",
      text: "Instant Bank Deposit",
      icon: <BankIcon />,
    },
  ];

  return (
    <DashboardLayout>
      <section className="overflow-x-hidden">
      <div className="flex items-center gap-[33px] mb-[41px]">
          <ArrowBack />
          <div>
            <p className="text-[32px] font-normal">Add Funds</p>
            <p className="text-base font-normal text-gray-700">
              Select your preferred payment method
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-[31px]">
          <div className="bg-green-500 size-[60px] h-[60px] text-4xl text-white font-medium rounded-full px-6 py-[7px] flex justify-center items-center ">
            1
          </div>

          <div className={`${step > 1 ? "bg-green-500" : "bg-gray-300"}  w-full  h-[10px] rounded-full `}></div>
          <div className={`${step > 1 ? "bg-green-500" : "bg-gray-300"}  size-[60px] text-4xl text-white font-medium rounded-full px-6 py-[7px] flex justify-center items-center `}>
            2
          </div>


          <div className={`${step > 2 ? "bg-green-500" : "bg-gray-300"} w-full  h-[10px] rounded-full`}></div>
          <div className={`${step > 2 ? "bg-green-500" : "bg-gray-300"} size-[60px] text-4xl text-white font-medium rounded-full px-6 py-[7px] flex justify-center items-center`}>
            3
          </div>

          <div className={`${step > 3 ? "bg-green-500" : "bg-gray-300"} w-full h-[10px] rounded-full`}></div>
          <div className={`${step > 3 ? "bg-green-500" : "bg-gray-300"} size-[60px] text-4xl text-white font-medium rounded-full flex px-6 py-[7px] justify-center items-center`}>
            4
          </div>
        </div>


        {/* Add Funds First Step */}
      { step === 1 && ( <div>
        <div className="w-full mt-[70px]">
          {fundsType.map((item, index) => (
            <div
              key={index}
              className=" bg-white px-8 py-[56px] gap-10 flex items-center rounded-lg mb-10"
            >
              <p>{item.icon}</p>
              <div>
                <h2 className="font-normal text-2xl leading-[100%]">
                  {item.title}
                </h2>
                <p className="font-normal text-[20px] text-gray-600 mt-2">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="">
          <button onClick={() => setStep(2)} className="bg-green-500  text-white font-medium text-[20px] rounded-md h-[50px] w-full max-w-[700px] flex justify-center items-center">
            Continue
          </button>
        </div>
      </div>)}



        {/* Add Funds Second Step */}
        { step === 2 && ( <div>
          <div className="mt-[57px]">
            <h2 className="font-normal text-2xl leading-[100%] mb-6">
              Amount to Add
            </h2>
          </div>

          <div className="bg-white rounded-lg w-full px-8 py-[56px] flex items-center gap-[45px] mt-6">
            <span className="text-5xl font-normal text-green-500">₦</span>
            <input
              type="text"
              placeholder="0"
              className="w-full text-5xl placeholder: py-2 outline-none "
            />
            {/* <p className='text-5xl text-gray-600 font-normal'>0</p> */}
          </div>

          <div className="grid grid-cols-2 gap-[31px]">
            <div className="bg-white rounded-lg text-2xl font-normal h-[60px] flex justify-center items-center ">
              ₦5,000
            </div>
            <div className="bg-white rounded-lg text-2xl font-normal h-[60px] flex justify-center items-center ">
              ₦10,000
            </div>
            <div className="bg-white rounded-lg text-2xl font-normal h-[60px] flex justify-center items-center ">
              ₦25,000
            </div>
            <div className="bg-white rounded-lg text-2xl font-normal h-[60px] flex justify-center items-center ">
              ₦50,000
            </div>
          </div>

          <div>
          <div className='flex flex-col lg:flex-row justify-start gap-10 items-center mt-[70px]'>
              <button onClick={() => setStep(3)} className='bg-green-500  text-white font-medium text-[20px] rounded-md h-[50px] w-full max-w-[700px] flex justify-center items-center'>Continue</button>
              <button onClick={() => setStep(1)} className='bg-white border border-gray-300 font-medium text-[20px] rounded-md h-[50px] w-full max-w-[700px] flex justify-center items-center'>Back</button>
            </div>
          </div>
        </div>)}

        {/* Add Funds Third Step */}
        { step === 3 && ( <div>
          <div className="px-8 py-[27px] bg-white rounded-lg flex justify-between mt-[70px] ">
            <p className="text-[20px] font-normal text-gray-600">Payment Method</p>
            <p className="text-[20px] font-normal text-gray-900">Debit Card</p>
          </div>

          <div className="px-8 py-[27px] bg-white rounded-lg flex justify-between mt-[70px] ">
            <p className="text-[20px] font-normal text-gray-600">Amount</p>
            <p className="text-[20px] font-normal text-gray-900">₦25,000</p>
          </div>

          <div className="px-8 py-[27px] bg-white rounded-lg flex justify-between mt-[70px] ">
            <p className="text-[20px] font-normal text-gray-600">Fee</p>
            <p className="text-[20px] font-normal text-gray-900">₦0</p>
          </div>

          <div>
            <p className="px-8 py-[27px] bg-green-200 rounded-lg font-normal text-gray-600 text-[20px] mt-6">Your funds will be credited instantly to your GrowMetra wallet after successful payment.</p>
          </div>



          <div className='flex flex-col lg:flex-row justify-start gap-10 items-center mt-[70px]'>
              <button onClick={() => setStep(4)} className='bg-green-500  text-white font-medium text-[20px] rounded-md h-[50px] w-full max-w-[700px] flex justify-center items-center'>Confirm Payment</button>
              <button onClick={() => setStep(2)} className='bg-white border border-gray-300 font-medium text-[20px] rounded-md h-[50px] w-full max-w-[700px] flex justify-center items-center'>Back</button>
            </div>

        </div>)}
      </section>
    </DashboardLayout>
  );
};

export default AddFunds;
