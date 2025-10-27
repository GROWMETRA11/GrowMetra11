import { useState, useEffect, useRef } from "react";
import { Leaf, ShoppingCart, Truck, Handshake } from "lucide-react";



const RealChangeSection = () => {

  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);



  const [farmers, setFarmers] = useState(0);
  const [trades, setTrades] = useState(0);
  const [logistics, setLogistics] = useState(0);
  const [buyers, setBuyers] = useState(0);




  useEffect(() => {

    const observer = new IntersectionObserver(


      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // stop observing after animation starts
        }
      },

      { threshold: 0.4 } // triggers when 40% of section is visible
    );


    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }


    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };

  }, []);



  useEffect(() => {

    if (!visible) return;



    const animateValue = (setter, end, duration) => {

      let start = 0;

      const stepTime = Math.max(Math.floor(duration / end), 10);




      const timer = setInterval(() => {
        start += 1;

        setter(start);

        if (start === end) clearInterval(timer);

      }, stepTime);

    };




    animateValue(setFarmers, 250, 1500);
    animateValue(setTrades, 125, 1500);
    animateValue(setLogistics, 12, 1500);
    animateValue(setBuyers, 75, 1500);
  }, [visible]);





  return (


    <div
      ref={sectionRef}

      className="w-full py-24 lg:py-28"
      style={{
        background:
          "linear-gradient(135deg, rgba(76, 175, 80, 0.5) 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start 
      justify-between px-6 gap-20">


        {/* Left Text Section  */}


        <div className="lg:w-1/2">

          <h2 className="text-[40px] lg:text-[48px] font-manrope font-bold
           text-[#333333] leading-[1.2]"
           >

            Real Change Starts on <br /> the Ground
          </h2>



          <p className="mt-6 text-[18px] font-[Inter] text-[#364153] leading-[29px]"
          >
            GrowMetra's impact is measured not just in transactions — but in
            lives changed. Every verified farmer gains access to new buyers,
            every secure trade builds confidence, and every delivery strengthens
            the agricultural supply chain.
          </p>



          <p className="mt-6 text-[18px] font-[Inter]
           text-[#364153] leading-[29px]"
           >
            Together, we're creating opportunities, reducing post-harvest
            losses, and helping Nigeria move closer to a transparent,
            tech-powered agricultural economy.
          </p>


        </div>

        {/* Right Cards Section */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-10 justify-items-center">

          {/* Card 1 */}

          <div className="w-[264px] h-[180px] bg-white rounded-[16px] 
          shadow-lg p-6 hover:-translate-y-1 transition-all"
          
          >
            <div className="w-12 h-12 bg-[rgba(76,175,80,0.125)] rounded-full flex 
            items-center justify-center"
            >
              <Leaf className="w-6 h-6 text-green-600" />
            </div>



            <h3 className="text-[30px] font-[Manrope] font-bold text-green-600 mt-6"
            >
              {farmers}+
            </h3>



            <p className="text-[16px] font-[Inter] text-[#364153] mt-1">
              Verified Farmers
            </p>


          </div>

          {/* Card 2 */}
          <div className="w-[264px] h-[180px] bg-white rounded-[16px] shadow-lg p-6 
          hover:-translate-y-1 transition-all">


            <div className="w-12 h-12 bg-[rgba(76,175,80,0.125)] rounded-full flex 
            items-center justify-center">


              <ShoppingCart className="w-6 h-6 text-green-600" />
            </div>



            <h3 className="text-[30px] font-[Manrope] font-bold text-green-600 mt-6">
              {trades}+
            </h3>


            <p className="text-[16px] font-[Inter] text-[#364153] mt-1">
              Trades Completed
            </p>


          </div>



          {/* Card 3  */}
          <div className="w-[264px] h-[180px] bg-white rounded-[16px] shadow-lg p-6 
          hover:-translate-y-1 transition-all">

            <div className="w-12 h-12 bg-[rgba(255,235,59,0.25)] rounded-full 
            
            flex items-center justify-center">

              <Truck className="w-6 h-6 text-yellow-500" />
            </div>




            <h3 className="text-[30px] font-[Manrope] font-bold text-yellow-500 mt-6">
              {logistics}+
            </h3>


            <p className="text-[16px] font-[Inter] text-[#364153] mt-1">
              Logistics Partners
            </p>
          </div>



          {/* Card 4 */}
          <div className="w-[264px] h-[180px] bg-white rounded-[16px] shadow-lg p-6 
          hover:-translate-y-1 transition-all">


            <div className="w-12 h-12 bg-[rgba(76,175,80,0.125)] rounded-full flex 
            items-center justify-center">


              <Handshake className="w-6 h-6 text-green-600" />
            </div>


            <h3 className="text-[30px] font-[Manrope] font-bold text-green-600 mt-6">
              {buyers}+
            </h3>
            <p className="text-[16px] font-inter text-[#364153] mt-1">
              Active Buyers
            </p>


          </div>
        </div>

      </div>
    </div>
  );
};

export default RealChangeSection;
