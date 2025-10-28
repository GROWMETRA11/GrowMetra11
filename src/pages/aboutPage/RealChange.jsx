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
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );



    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
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


    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center py-16 
      md:py-24 lg:py-28"

      style={{
        background:
          "linear-gradient(135deg, rgba(76, 175, 80, 0.5) 0%, #FFFFFF 100%)",
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-col 
      lg:flex-row items-start justify-between px-6 sm:px-10 lg:px-20 gap-20">
       
        {/* Left Text Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-manrope font-bold
           text-[#333333] leading-tight">
            Real Change Starts on <br className="hidden lg:block" /> the Ground
          </h2>


          <p className="mt-6 text-[16px] sm:text-[18px] font-[Inter] text-[#364153] 
          leading-[1.7]"
          >
            GrowMetra's impact is measured not just in transactions — but in
            lives changed. Every verified farmer gains access to new buyers,
            every secure trade builds confidence, and every delivery strengthens
            the agricultural supply chain.
          </p>


          <p className="mt-6 text-[16px] sm:text-[18px] font-[Inter] 
          text-[#364153] leading-[1.7]"
          >
            Together, we're creating opportunities, reducing post-harvest
            losses, and helping Nigeria move closer to a transparent,
            tech-powered agricultural economy.
          </p>

        </div>

        {/* Right Cards Section */}
        <div className="lg:w-1/2 w-full grid grid-cols-1 
        sm:grid-cols-2 gap-8 sm:gap-10 justify-items-center">

          {/* Card 1 */}
          <div className="w-full sm:w-[264px] h-[180px] bg-white rounded-[16px]
           shadow-lg p-6 hover:-translate-y-1 transition-all">

            <div className="w-12 h-12 bg-[rgba(76,175,80,0.125)] 
            rounded-full flex items-center justify-center">

              <Leaf className="w-6 h-6 text-green-600" />
            </div>


            <h3 className="text-[30px] font-[Manrope] font-bold
             text-green-600 mt-6"
             >
              {farmers}+
            </h3>

            <p className="text-[16px] font-[Inter] text-[#364153] mt-1">
              Verified Farmers
            </p>
          </div>



          {/* Card 2 */}
          <div className="w-full sm:w-[264px] h-[180px] bg-white 
          rounded-[16px] shadow-lg p-6 hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 bg-[rgba(76,175,80,0.125)] 
            rounded-full flex items-center justify-center">

              <ShoppingCart className="w-6 h-6 text-green-600" />
            </div>

            <h3 className="text-[30px] font-[Manrope] font-bold text-green-600 mt-6">
              {trades}+
            </h3>


            <p className="text-[16px] font-[Inter] text-[#364153] mt-1">
              Trades Completed
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[264px] h-[180px] bg-white rounded-[16px] 
          shadow-lg p-6 hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 bg-[rgba(255,235,59,0.25)]
             rounded-full flex items-center justify-center">
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
          <div className="w-full sm:w-[264px] h-[180px] bg-white 
          rounded-[16px] shadow-lg p-6 hover:-translate-y-1 transition-all">
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
      
    </section>
  );
};

export default RealChangeSection;
