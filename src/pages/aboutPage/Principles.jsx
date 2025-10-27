import { ShieldCheck, Handshake, Lightbulb, Leaf, Users } from "lucide-react";






const PrinciplesSection = () => {



  return (


    <section className="w-full bg-white py-20">
      <div className="max-w-[1152px] mx-auto px-4 text-center">
        
        
        {/* HEADING TITLE*/}

        <h2 className="text-[48px] font-[Manrope] font-bold leading-[48px] text-[#333333]">
          The Principles That Drive Everything We Do
        </h2>


        


        <p className="text-[18px] font-[Inter] font-normal text-[#4A5565] leading-[28px] mt-6 max-w-[645px] mx-auto">
          Our values guide every decision, every feature, and every interaction
          on the GrowMetra platform.
        </p>




        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 
        justify-items-center ">
          
          
          {/* CARD 1 - TRUST */}

          <div className="w-[362px] h-[274px] bg-[#FAFAFA] rounded-[16px] 
          shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] 
          text-left p-8 hover:-translate-y-1">
            
            
            {/* Icon */}


            <div className="w-16 h-16 bg-[rgba(76,175,80,0.125)] rounded-full flex items-center
             justify-center">
              
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>


            {/* Title */}
            <h3 className="text-[24px] font-manrope font-bold text-[#333333] mt-6">
              Trust</h3>

            {/* Paragraph */}
            <p className="text-[16px] font-inter text-[#364153] leading-[26px] mt-3">
              Verified farmers and transparent processes form the foundation of
              every trade.
            </p>



          </div>

          {/* CARD 2 - FAIRNESS */}

          <div className="w-[362px] h-[274px] bg-[#FAFAFA] rounded-[16px]
           shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]
            text-left p-8 hover:-translate-y-1">


            <div className="w-16 h-16 bg-[rgba(76,175,80,0.125)] 
            rounded-full flex items-center justify-center">


              <Handshake className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-[24px] font-manrope font-bold text-[#333333] mt-6">
              Fairness
            </h3>


            <p className="text-[16px] font-inter text-[#364153] leading-[26px] mt-3">
              Direct connections ensure farmers earn what they deserve.
            </p>


          </div>

          {/* CARD 3 - INNOVATION */}

          <div className="w-[362px] h-[274px] bg-[#FAFAFA] rounded-[16px] 
          shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] 
          text-left p-8 hover:-translate-y-1">


            <div className="w-16 h-16 bg-[rgba(255,235,59,0.125)] 
            rounded-full flex items-center justify-center">


              <Lightbulb className="w-8 h-8 text-yellow-500" />
            </div>

            <h3 className="text-[24px] font-manrope font-bold text-[#333333] mt-6">
              Innovation
            </h3>

            <p className="text-[16px] font-inter text-[#364153] leading-[26px] mt-3">

              Using modern technology to simplify trade and strengthen
              relationships.
            </p>

          </div>


          {/* CARD 4 - SUSTAINABILITY */}


          <div className="w-[362px] h-[274px] bg-[#FAFAFA] rounded-[16px] 
          shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] 
          text-left p-8 hover:-translate-y-1">


            <div className="w-16 h-16 bg-[rgba(76,175,80,0.125)] 
            rounded-full flex items-center justify-center">

              <Leaf className="w-8 h-8 text-green-600" />
            </div>


            <h3 className="text-[24px] font-manrope font-bold text-[#333333] mt-6">
              Sustainability
            </h3>


            <p className="text-[16px] font-inter text-[#364153] leading-[26px] mt-3">
              Building systems that support long-term growth and responsible
              practices.
            </p>


          </div>

          {/* CARD 5 - COMMUNITY */}


          <div className="w-[362px] h-[274px] bg-[#FAFAFA] rounded-[16px] 
          
          shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] 
          text-left p-8 hover:-translate-y-1">

            <div className="w-16 h-16 bg-[rgba(76,175,80,0.125)] 
            rounded-full flex items-center justify-center">

              <Users className="w-8 h-8 text-green-600" />
            </div>

            <h3 className="text-[24px] font-manrope font-bold text-[#333333] mt-6">
              Community
            </h3>

            <p className="text-[16px] font-inter text-[#364153] leading-[26px] mt-3">
              Collaboration and shared growth across Nigeria’s agriculture
              network.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PrinciplesSection;
