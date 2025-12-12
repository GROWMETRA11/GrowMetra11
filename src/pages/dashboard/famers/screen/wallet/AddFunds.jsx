import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import ArrowBack from "../../../../../Components/iconComponent/ArrowBack";
import DebitCardIcon from "../../../../../Components/iconComponent/DebitCardIcon";
import PhoneIcon from "../../../../../Components/iconComponent/PhoneIcon";
import BankIcon from "../../../../../Components/iconComponent/BankIcon";
import ConfirmIcon from "../../../../../Components/iconComponent/ConfirmIcon";

const AddFunds = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const quickAmount = ["5,000", "10,000", "25000", "50,000"];
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [paymentError, setPaymentError] = useState("");

  const goNext = () => {
    if (!amount) {
      setError("Please Enter Valid Amount");
      return;
    }
    setStep(3);
  };

  function getTimeAndDate() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    return { time, date };
  }
  const { time, date } = getTimeAndDate();

  const fundsType = [
    { title: "Debit Card", text: "Visa, Mastercard", icon: <DebitCardIcon /> },
    { title: "USSD", text: "Direct bank transfer", icon: <PhoneIcon /> },
    { title: "Bank Transfer", text: "Instant Bank Deposit", icon: <BankIcon /> },
  ];

  return (
    <DashboardLayout>
      <section className="overflow-x-hidden">
        <div className="flex items-center gap-[33px] mb-[41px]">
          <ArrowBack />
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">Add Funds</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-700">
              {step === 1 && "Select your preferred payment method"}
              {step === 2 && "Choose Amount method"}
              {step === 3 && "Confirm Details"}
              {step === 4 && "Select your preferred payment method"}
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-[31px]">
          <div className="bg-green-500 size-[60px] h-[60px] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium rounded-full px-6 py-[7px] flex justify-center items-center">1</div>

          <div className={`${step > 1 ? "bg-green-500" : "bg-gray-300"} w-full h-[10px] rounded-full`}></div>
          <div className={`${step > 1 ? "bg-green-500" : "bg-gray-300"} size-[60px] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium rounded-full px-6 py-[7px] flex justify-center items-center`}>2</div>

          <div className={`${step > 2 ? "bg-green-500" : "bg-gray-300"} w-full h-[10px] rounded-full`}></div>
          <div className={`${step > 2 ? "bg-green-500" : "bg-gray-300"} size-[60px] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium rounded-full px-6 py-[7px] flex justify-center items-center`}>3</div>

          <div className={`${step > 3 ? "bg-green-500" : "bg-gray-300"} w-full h-[10px] rounded-full`}></div>
          <div className={`${step > 3 ? "bg-green-500" : "bg-gray-300"} size-[60px] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium rounded-full flex px-6 py-[7px] justify-center items-center`}>4</div>
        </div>

        {/* Add Funds First Step */}
        {step === 1 && (
          <div>
            <div className="w-full mt-[70px]">
              {fundsType.map((item, index) => (
                <div
                  onClick={() => { setPaymentMethod(item.title); setPaymentError(); }}
                  key={index}
                  className={`${paymentMethod === item.title ? "bg-green-100" : "bg-white"} px-8 py-[56px] gap-10 flex items-center rounded-lg ${index === 2 && paymentError ? "mb-2" : "mb-10"}`}
                >
                  <p>{item.icon}</p>
                  <div>
                    <h2 className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl">{item.title}</h2>
                    <p className="font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mt-2">{item.text}</p>
                  </div>
                </div>
              ))}
              {paymentError && <div className="text-red-500 text-sm sm:text-base md:text-lg lg:text-xl">{paymentError}</div>}
            </div>

            <div>
              <button
                onClick={() => { if (!paymentMethod) { setPaymentError("Please Choose Payment Method"); return; } setStep(2); }}
                className="bg-green-500 text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-[50px] w-full max-w-[700px] flex justify-center items-center"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Add Funds Second Step */}
        {step === 2 && (
          <div>
            <div className="mt-[57px]">
              <h2 className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[100%] mb-6">Amount to Add</h2>
            </div>

            <div className={`${error ? "border-red-400" : "border-white"} bg-white border rounded-lg w-full px-8 py-[56px] flex items-center gap-[45px] mt-6`}>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-green-500">₦</span>
              <input
                value={amount}
                onChange={(e) => { setAmount(e.target.value); setError(""); }}
                type="text"
                placeholder="0"
                className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl placeholder: py-2 outline-none"
              />
            </div>

            {error && <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg">{error}</div>}

            <div className="my-8">
              <p className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl">Quick Amount</p>
            </div>

            <div className="grid grid-cols-2 gap-[31px]">
              {quickAmount.map((value, index) => (
                <div
                  key={index}
                  onClick={() => { setAmount(value); setError(""); }}
                  className="bg-white rounded-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal h-[60px] flex justify-center items-center"
                >
                  <p>₦{value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row justify-start gap-10 items-center mt-[70px]">
              <button
                onClick={() => goNext()}
                className="bg-green-500 text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-[50px] w-full max-w-[700px] flex justify-center items-center"
              >
                Continue
              </button>
              <button
                onClick={() => setStep(1)}
                className="bg-white border border-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-[50px] w-full max-w-[700px] flex justify-center items-center"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* Add Funds Third Step */}
        {step === 3 && (
          <div>
            <div className="px-8 py-[27px] bg-white rounded-lg flex justify-between mt-[70px] text-sm sm:text-base md:text-lg lg:text-xl">
              <p className="text-gray-600 font-normal">Payment Method</p>
              <p className="text-gray-900 font-normal">{paymentMethod}</p>
            </div>

            <div className="px-8 py-[27px] bg-white rounded-lg flex justify-between mt-[70px] text-sm sm:text-base md:text-lg lg:text-xl">
              <p className="text-gray-600 font-normal">Amount</p>
              <p className="text-gray-900 font-normal">₦{amount}</p>
            </div>

            <div className="px-8 py-[27px] bg-white rounded-lg flex justify-between mt-[70px] text-sm sm:text-base md:text-lg lg:text-xl">
              <p className="text-gray-600 font-normal">Fee</p>
              <p className="text-gray-900 font-normal">₦0</p>
            </div>

            <div>
              <p className="px-8 py-[27px] bg-green-200 rounded-lg font-normal text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mt-6">
                Your funds will be credited instantly to your GrowMetra wallet after successful payment.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-start gap-10 items-center mt-[70px]">
              <button
                onClick={() => setStep(4)}
                className="bg-green-500 text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-[50px] w-full max-w-[700px] flex justify-center items-center"
              >
                Confirm Payment
              </button>
              <button
                onClick={() => setStep(2)}
                className="bg-white border border-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-[50px] w-full max-w-[700px] flex justify-center items-center"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-green-100 p-[42px] rounded-full mt-[55px] mb-5">
                <ConfirmIcon />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">Payment Successful</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-[50px]">
                ₦{amount} has been added to your wallet
              </p>
            </div>

            <div className="px-8 py-10 bg-white rounded-lg text-sm sm:text-base md:text-lg lg:text-xl">
              <div className="flex justify-between mb-4">
                <p>Transaction ID</p>
                <p>TXN-2024-FUL-001</p>
              </div>
              <div className="flex justify-between">
                <p>Date & Time</p>
                <p>{date},{time}</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-start gap-10 items-center mt-[70px]">
              <button
                onClick={() => setStep()}
                className="bg-green-500 text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-[50px] w-full max-w-[700px] flex justify-center items-center"
              >
                Back to wallet
              </button>
              <button
                onClick={() => setStep()}
                className="bg-white border border-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-[50px] w-full max-w-[700px] flex justify-center items-center"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </section>
    </DashboardLayout>
  );
};

export default AddFunds;
