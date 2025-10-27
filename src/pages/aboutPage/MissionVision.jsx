import React from 'react'

const MissionVisionSection = () => {
  return (
    <div className='relative w-full flex justify-center items-center overflow-hidden
    py-20 px-6 md:px-16 lg:px-24'
    style={{
        background:
        "linear-gradient(135deg, rgba(76, 175, 80, 0.5) 0%, #FFFFFF 50%, rgba(255, 235, 59, 0.5) 100%)",
        width: "1920px",
        height: "692px",
        maxWidth: "100%",
    }}







    
    >
        <div className='flex flex-col lg:flex-row justify-between items-center
        w-full max-w-[1200px] gap-16'>


            <div className='flex flex-col justify-center text-left max-w-[600px]'>

                <h3 className='font-[Manrope] text-[30px] leading-[36px]
                text-[#4CAF50] mb-4'
                
                style={{
                    width: "171.83px",
                    height: "36px",
                }}
                >
                            Our Mission
                </h3>

                <p className='font-[Inter] font-normal text-[18px] leading-[29.25px] text-[#364153] mb-12'
                
                style={{
                    width: "547.83px",
                    height: "79.5px",
                }}>
                        To empower Nigerian farmers and buyers through a transparent,
tech-driven marketplace that promotes fairness, trust, and
sustainability.
                </p>

                <h3 className='font-[Manrope] text-[30px] leading-[36px] text-[#4CAF50] mb-4'
                
                style={{
                    width: "148.54px",
                    height: "36px",
                }}
                >
                    Our Vision

                </h3>

                <p className='font-[Inter] font-normal text-[18px] leading-[26.25px] text-[#364153]'
                
                style={{
                    width: "520.98",
                    height: "79.5px",
                }}>
                                To become Africa's leading agri-marketplace — transforming
agriculture into a connected, trusted, and thriving ecosystem
where everyone grows together.
                </p>

            </div>

             {/* image placeholder */}

             <div className='rounded-[16px]  bg-cover flex items-center object-cover justify-center'
             style={{
                width: "552px",
                height: "500px",
                background:
                "rgba(255, 255, 255, 0.002)",
                boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
                backgroundSize: "cover",
            backgroundPosition: "center",
            
             backgroundImage: "url('/vision.jpg')",
             }}>
                

             </div>

        </div>
      
    </div>
  )
}

export default MissionVisionSection
