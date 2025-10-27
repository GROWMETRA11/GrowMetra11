import { ChevronDown } from 'lucide-react';



const HeroSection = () => {

  return (


    <div className='relative w-full h-screen flex felx-col justify-center
    items-center text-center text-white overflow-hidden'

    style={{
      background:
      
       "linear-gradient(180deg, rgba(76, 175, 80, 0.6) 0%, rgba(76, 175, 80, 0.5) 50%, rgba(250, 250, 250, 1) 100%)",
       backgroundImage:  "url('/hero.jpg')",

      
       
    }}>


      {/* CONTAINER OF TEXT */}
      <div className=' relative flex flex-col justify-center items-center'

      style={{
        width: "896px",
        height: "509px",
      }}
      >


        <h1 className='font-[Manrope] font-bold text-[72px] leading-[90px] 
        text-white text-center'

        style={{
          width: "747.38px",
          height: "450px",
        }}
        >

          Empowering Nigeria&apos;s 
          <br />
          Agriculture Through 
          <br />
          people, Purpose
          <br />
          and Technology

        </h1>


        <p className='font-[Inter] text-[24px] leading-[39px] text-white
        text-center opacity-95 mt-8'

        style={{
          width: "764.54px",
          height: "107px",
        }}
        >
          At GrowMetra, we believe that every farmer deserves fair access to
markets, every buyer deserves quality they can trust, and every
community deserves to thrive through agriculture.

        </p>


      </div>

      {/* ICON */}
      <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2'>

      <ChevronDown 
      className='w-10 h-10 text-white opacity-90 animate-bounce' />

      </div>

    </div>
  );
};

export default HeroSection;




