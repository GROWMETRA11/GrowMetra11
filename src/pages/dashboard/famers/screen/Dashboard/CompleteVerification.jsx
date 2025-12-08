import React, { useState } from "react";
import PhoneIcon from "../../../../../Components/iconComponent/PhoneIcon";
import Location2 from "../../../../../Components/iconComponent/Location2";
import IdIcon from "../../../../../Components/iconComponent/IdIcon";
import UploadIcon from "../../../../../Components/iconComponent/UploadIcon";

const CompleteVerification = ({ open, onClose }) => {
  // files selection
  const [files, setFiles] = useState([]);
  const [img, setImg] = useState('');
  const handleFiles = (selected) => {
    const arr = Array.from(selected);
    setFiles(arr);
    console.log(arr)
    setImg(URL.createObjectURL(arr[0]))
    // blob
    console.log()
  };


  const handleSubmit = () => {
    setFiles([]);

    document.getElementById("file").value = "";
  };

  const [step, setStep] = useState(1);
  if (!open) return null;

  return (
    <section
      onClick={onClose}
      className="w-full fixed z-10 inset-0 flex items-center justify-center bg-black/50 h-screen"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" bg-white w-full !z-40 max-w-[790px] rounded-lg px-8 py-[40px] mx-auto"
      >
        {/* Phone Verification */}
        {step === 1 && (
          <div>
            <div>
              <h2 className="inter font-medium text-[28px] ">
                Complete Your Verification
              </h2>
              <p className="text-[15px] font-light text-gray-800">
                Verification ensures safer transactions and trusted farmer
                connections.
              </p>
            </div>

            <div className=" flex items-center gap-[18px] mt-6 mb-10">
              <span className="bg-green-500 w-[230px] h-4 rounded-lg"></span>
              <span className="bg-gray-400 w-[230px] h-4 rounded-lg"></span>
              <span className="bg-gray-400 w-[230px] h-4 rounded-lg"></span>
            </div>

            <div className="bg-[#F8F8F8] px-[17px] py-[54px] flex items-center gap-5">
              <PhoneIcon />
              <span>
                <h2 className="inter font-normal text-[24px] text-gray-900 mb-[10px]">
                  Phone Verification
                </h2>
                <p className="inter font-normal text-[20px] text-gray-600">
                  Verify your phone number
                </p>
              </span>
            </div>

            <div className="my-[30px]">
              <input
                className="px-6 py-4 w-full border border-gray-400 rounded-lg"
                type="text"
                placeholder="+234 (0) 800 000 0000"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-green-500 flex items-center justify-center h-[60px] text-white font-medium text-2xl rounded-lg cursor-pointer hover:bg-green-400 transition-colors duration-300"
            >
              Next
            </button>
          </div>
        )}

        {/*  Address Verification */}
        {step === 2 && (
          <div>
            <div>
              <h2 className="inter font-medium text-[28px] ">
                Complete Your Verification
              </h2>
              <p className="text-[15px] font-light text-gray-800">
                Verification ensures safer transactions and trusted farmer
                connections.
              </p>
            </div>

            <div className=" flex items-center gap-[18px] mt-6 mb-10">
              <span className="bg-green-500 w-[230px] h-4 rounded-lg"></span>
              <span className="bg-green-500 w-[230px] h-4 rounded-lg"></span>
              <span className="bg-gray-400 w-[230px] h-4 rounded-lg"></span>
            </div>

            <div className="bg-[#F8F8F8] px-[17px] py-[54px] flex items-center gap-5">
              <Location2 />
              <span>
                <h2 className="inter font-normal text-[24px] text-gray-900 mb-[10px]">
                  Delivery Address
                </h2>
                <p className="inter font-normal text-[20px] text-gray-600">
                  Add your delivery address
                </p>
              </span>
            </div>

            <div className="my-[30px]">
              <textarea
                className="px-6 py-[14px] resize-none w-full min-h-[158px] font-normal text-2xl outline-none border border-gray-300 focus:ring-2 focus:ring-green-400 rounded-lg"
                name=""
                id=""
                placeholder="Enter Your Full Address"
              ></textarea>
            </div>

            <div className="flex items-center gap-[50px]">
              <button
                onClick={() => setStep(1)}
                className="w-full max-w-[338px]  bg-white flex items-center justify-center h-[60px] border border-gray-400 font-medium text-2xl rounded-lg cursor-pointer hover:bg-green-400 transition-colors duration-300"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="w-full max-w-[338px]  bg-green-500 flex items-center justify-center h-[60px] text-white font-medium text-2xl rounded-lg cursor-pointer hover:bg-green-400 transition-colors duration-300"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* ID Verification */}
        {step === 3 && (
          <div>
            <div>
              <h2 className="inter font-medium text-[28px] ">
                Complete Your Verification
              </h2>
              <p className="text-[15px] font-light text-gray-800">
                Verification ensures safer transactions and trusted farmer
                connections.
              </p>
            </div>

            <div className=" flex items-center gap-[18px] mt-6 mb-10">
              <span className="bg-green-500 w-[230px] h-4 rounded-lg"></span>
              <span className="bg-green-500 w-[230px] h-4 rounded-lg"></span>
              <span className="bg-green-500 w-[230px] h-4 rounded-lg"></span>
            </div>

            <div className="bg-[#F8F8F8] px-[17px] py-[54px] flex items-center gap-5">
              <IdIcon />
              <span>
                <h2 className="inter font-normal text-[24px] text-gray-900 mb-[10px]">
                  ID Verification
                </h2>
                <p className="inter max-w-[500px] font-normal text-[20px] text-gray-600">
                  Upload your Verified Driver’s License, NIN, or Passport for
                  Verification
                </p>
              </span>
            </div>

            <div
              className="my-[30px] w-full h-[158px] flex items-center justify-center cursor-pointer rounded-lg border border-gray-400"
              onClick={() => document.getElementById("file").click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleFiles(e.dataTransfer.files[0]);
              }}
            >
              
                <div>
                  <input
                    type="file"
                    id="file"
                    placeholder="Choose File"
                    onChange={(e) => handleFiles(e.target.files)}
                    className="hidden"
                  />

                  {files.length < 1  && ( <div className="flex flex-col items-center justify-center">
                    <p className="font-normal text-2xl text-gray-500 mb-[30px]">
                      Choose File
                    </p>
                    <UploadIcon />
                  </div>)}
                </div>
            

              {files.map((f, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <p>{f.name}</p>
 
                   <img
                      src={img}
                      alt=""
                      className="w-32 h-32  object-cover rounded-lg mt-1"
                    />
                  
                </div>
              ))}
            </div>

            <div className="flex items-center gap-[50px]">
              <button
                onClick={() => setStep(2)}
                className="w-full max-w-[338px]  bg-white flex items-center justify-center h-[60px] border border-gray-400 font-medium text-2xl rounded-lg cursor-pointer hover:bg-green-400 transition-colors duration-300"
              >
                Back
              </button>
              <button
                onClick={() => {
                  setStep(1);
                  onClose();
                  handleSubmit();
                }}
                className="w-full max-w-[338px]  bg-green-500 flex items-center justify-center h-[60px] text-white font-medium text-2xl rounded-lg cursor-pointer hover:bg-green-400 transition-colors duration-300"
              >
                Complete Verification
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompleteVerification;
