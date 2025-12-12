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
      <section className="overflow-x-hidden mb-22">
        {/* Header */}
        <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
          <ArrowBack />
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">Add Funds</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-700">
              {step === 1 && "Select your preferred payment method"}
              {step === 2 && "Choose Amount method"}
              {step === 3 && "Confirm Details"}
              {step === 4 && "Select your preferred payment method"}
            </p>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="w-full flex items-center justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
          {[1, 2, 3, 4].map((num, idx) => (
            <React.Fragment key={num}>
              <div
                className={`flex justify-center items-center rounded-full text-white font-medium
                  w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                  text-base sm:text-lg md:text-xl lg:text-2xl
                  ${step > idx ? "bg-green-500" : "bg-gray-300"}`}
              >
                {num}
              </div>
              {num < 4 && (
                <div className={`${step > idx ? "bg-green-500" : "bg-gray-300"} flex-1 h-1 sm:h-2 rounded-full`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="w-full mt-6 sm:mt-10">
            {fundsType.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setPaymentMethod(item.title);
                  setPaymentError("");
                }}
                className={`${
                  paymentMethod === item.title ? "bg-green-100" : "bg-white"
                } px-4 sm:px-6 py-8 sm:py-12 flex items-center gap-4 sm:gap-6 rounded-lg mb-4 sm:mb-6`}
              >
                <p>{item.icon}</p>
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal">{item.title}</h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-1">{item.text}</p>
                </div>
              </div>
            ))}
            {paymentError && <div className="text-red-500 text-sm sm:text-base md:text-lg lg:text-xl mb-4">{paymentError}</div>}

            <button
              onClick={() => {
                if (!paymentMethod) {
                  setPaymentError("Please Choose Payment Method");
                  return;
                }
                setStep(2);
              }}
              className="bg-green-500 text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-10 sm:h-12 w-full max-w-full sm:max-w-[700px] flex justify-center items-center"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="mt-6 sm:mt-10">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-4 sm:mb-6">Amount to Add</h2>

            <div className={`bg-white border ${error ? "border-red-400" : "border-white"} rounded-lg w-full px-4 sm:px-6 py-6 sm:py-8 flex items-center gap-4 sm:gap-6`}>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-green-500">₦</span>
              <input
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setError("");
                }}
                type="text"
                placeholder="0"
                className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl placeholder-gray-400 outline-none"
              />
            </div>

            {error && <div className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg mt-1">{error}</div>}

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal mt-4 mb-2">Quick Amount</p>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {quickAmount.map((value, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setAmount(value);
                    setError("");
                  }}
                  className="bg-white rounded-lg text-base sm:text-lg md:text-xl lg:text-2xl font-normal h-10 sm:h-12 flex justify-center items-center cursor-pointer"
                >
                  ₦{value}
                </div>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row justify-start gap-4 lg:gap-6 mt-6 sm:mt-8">
              <button
                onClick={() => goNext()}
                className="bg-green-500 text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-10 sm:h-12 w-full lg:w-auto flex-1 flex justify-center items-center"
              >
                Continue
              </button>
              <button
                onClick={() => setStep(1)}
                className="bg-white border border-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-10 sm:h-12 w-full lg:w-auto flex-1 flex justify-center items-center"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="mt-6 sm:mt-10">
            <div className="px-4 sm:px-6 py-4 sm:py-6 bg-white rounded-lg flex justify-between text-sm sm:text-base md:text-lg lg:text-xl">
              <p className="text-gray-600">Payment Method</p>
              <p className="text-gray-900">{paymentMethod}</p>
            </div>

            <div className="px-4 sm:px-6 py-4 sm:py-6 bg-white rounded-lg flex justify-between text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6">
              <p className="text-gray-600">Amount</p>
              <p className="text-gray-900">₦{amount}</p>
            </div>

            <div className="px-4 sm:px-6 py-4 sm:py-6 bg-white rounded-lg flex justify-between text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6">
              <p className="text-gray-600">Fee</p>
              <p className="text-gray-900">₦0</p>
            </div>

            <p className="px-4 sm:px-6 py-4 sm:py-6 bg-green-200 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-600 mt-4 sm:mt-6">
              Your funds will be credited instantly to your GrowMetra wallet after successful payment.
            </p>

            <div className="flex flex-col lg:flex-row justify-start gap-4 lg:gap-6 mt-6 sm:mt-8">
              <button
                onClick={() => setStep(4)}
                className="bg-green-500 text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-10 sm:h-12 w-full lg:w-auto flex-1 flex justify-center items-center"
              >
                Confirm Payment
              </button>
              <button
                onClick={() => setStep(2)}
                className="bg-white border border-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-10 sm:h-12 w-full lg:w-auto flex-1 flex justify-center items-center"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="mt-6 sm:mt-10">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-green-100 p-10 sm:p-12 rounded-full mb-4 sm:mb-6">
                <ConfirmIcon />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-4">Payment Successful</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-10">
                ₦{amount} has been added to your wallet
              </p>
            </div>

            <div className="px-4 sm:px-6 py-4 sm:py-6 bg-white rounded-lg text-sm sm:text-base md:text-lg lg:text-xl">
              <div className="flex justify-between mb-2 sm:mb-4">
                <p>Transaction ID</p>
                <p>TXN-2024-FUL-001</p>
              </div>
              <div className="flex justify-between">
                <p>Date & Time</p>
                <p>{date}, {time}</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-start gap-4 lg:gap-6 mt-6 sm:mt-8">
              <button
                onClick={() => setStep(1)}
                className="bg-green-500 text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-10 sm:h-12 w-full lg:w-auto flex-1 flex justify-center items-center"
              >
                Back to wallet
              </button>
              <button
                onClick={() => setStep(1)}
                className="bg-white border border-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-md h-10 sm:h-12 w-full lg:w-auto flex-1 flex justify-center items-center"
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
