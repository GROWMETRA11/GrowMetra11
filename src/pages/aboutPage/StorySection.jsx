import  { useRef, useEffect, useState } from "react";


const StorySection = () => {


  const sectionRef = useRef(null);

  const [dividerStyle, setDividerStyle] = useState({});


  useEffect(() => {



    const section = sectionRef.current;

    if (section) {

      // Get all the cards (Challenge, Spark, Change)
      const cards = section.querySelectorAll(".story-card");

      if (cards.length > 0) {

        const firstCard = cards[0].getBoundingClientRect();
        const lastCard = cards[cards.length - 1].getBoundingClientRect();



        // set vertical start and end positions
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;


        const startY = firstCard.top + window.scrollY - sectionTop;

        const endY = lastCard.bottom + window.scrollY - sectionTop;

        // Set divider style
        setDividerStyle({

          top: `${startY}px`,

          height: `${endY - startY}px`,
        });

      }
    }

  }, []);




  return (


    <div

      ref={sectionRef}

      className="relative w-full bg-white flex flex-col 
      items-center text-center py-24 px-6 md:px-12 lg:px-24 overflow-visible"
    >

      {/* HEADER OF THE SECTION */}
      <h2
        className="font-[Manrope] font-bold text-[32px] md:text-[40px]
         lg:text-[45px] leading-tight text-[#333333] mb-8 max-w-[940px] mx-auto"
      >

        Born from the Fields. Built for the Future.
      </h2>



      {/* INTRODUCTION PARAGRAPH */}

      <div className="text-center mb-24 max-w-[900px] mx-auto">

        <p className="font-[Inter] text-[18px] md:text-[20px] 
        leading-[32.5px] text-[#364153] mb-6 px-2">

          GrowMetra started as a response to a gap — where farmers struggled to
          gain fair access to markets, technology, and opportunities. We believed
          agriculture could be more sustainable, profitable, and empowering for
          everyone.
        </p>


        <p className="font-[Inter] text-[18px] md:text-[20px] 
        leading-[32.5px] text-[#364153] px-2">

          We saw this challenge not as a barrier but as an opportunity to build a
          bridge — uniting farmers, buyers, and innovators to create a connected,
          thriving agricultural ecosystem.
        </p>

      </div>


      {/* DYNAMIC SIZE OF THE DIVIDER */}
      <div
        className="hidden md:block absolute left-1/2 transform 
        -translate-x-1/2 bg-[rgba(76,175,80,0.2)]"

        style={{
          width: "4px",
          ...dividerStyle,
          transition: "all 0.3s ease-in-out",
          zIndex: 5,
        }}

      />


      {/* ThE CHALLENGE*/}
      <div className="story-card w-full max-w-[1152px] mx-auto flex flex-col 
      md:flex-row-reverse items-center justify-between gap-12 md:gap-24 mb-24 relative z-10">

        {/* CHALLENGE CARD */}
        <article
          className="relative shadow-lg rounded-2xl bg-[#FAFAFA] w-full max-w-[560px] 
          p-6 md:p-8 text-left"

          style={{
            boxShadow:
              "0px 8px 10px -6px rgba(0,0,0,0.1), 0px 20px 25px -5px rgba(0,0,0,0.1)",
          }}
        >


          <div
            className="absolute flex items-center justify-center text-white 
            font-[Manrope] font-bold"

            style={{

              width: "48px",
              height: "48px",
              top: "32px",
              left: "32px",
              borderRadius: "9999px",
              backgroundColor: "rgba(76,175,80,1)",
              fontSize: "20px",
              lineHeight: "28px",
            }}
          >


            1
          </div>


          <div className="pl-[96px] pt-[4px]">
            <h3 className="font-[Manrope] font-bold text-[24px] leading-[32px]
             text-[#333333] mb-3">

              The Challenge
            </h3>


            <p className="font-[Inter] text-[16px] leading-[26px] text-[#364153]">


              Nigerian farmers worked tirelessly in their fields, yet many faced
              limited access to markets, technology, and support systems that could
              help them thrive.
            </p>

          </div>



        </article>

        {/* FIRST IMAGE */}
        <div
          className="rounded-[16px] bg-[#FAFAFA]"

          style={{
            width: "560px",
            height: "320px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            
             backgroundImage: "url('/challenge.jpg')",
            boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >

        </div>

      </div>

      {/*  THE SPARK */}

      <div className="story-card w-full max-w-[1152px] mx-auto 
      flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 mb-24 relative z-10">

        {/* SPARK CARD */}
        <article
          className="relative shadow-lg rounded-2xl bg-[#FAFAFA] 
          w-full max-w-[560px] p-6 md:p-8 text-left"

          style={{
            boxShadow:
              "0px 8px 10px -6px rgba(0,0,0,0.1), 0px 20px 25px -5px rgba(0,0,0,0.1)",
          }}
        >


          <div
            className="absolute flex items-center justify-center text-white 
            font-[Manrope] font-bold"

            style={{
              width: "48px",
              height: "48px",
              top: "32px",
              left: "32px",
              borderRadius: "9999px",
              backgroundColor: "rgba(76,175,80,1)",
              fontSize: "20px",
            }}


          >
            2
          </div>


          <div className="pl-[96px] pt-[4px]">
            <h3 className="font-[Manrope] font-bold text-[24px] leading-[32px]
             text-[#333333] mb-3">

              The Spark
            </h3>


            <p className="font-[Inter] text-[16px] leading-[26px] text-[#364153]">

              We saw this challenge not as a barrier but as an opportunity to
              build something meaningful — connecting farmers, buyers, and
              innovators through one digital platform.
            </p>


          </div>

        </article>

        {/* 2ND IMAGE */}
        <div
          className="rounded-[16px] bg-[#FAFAFA]"

          style={{
            width: "560px",
            height: "320px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            
             backgroundImage: "url('/spark.jpg')",
            boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        ></div>


      </div>

      {/* THE CHANGE */}

      <div className="story-card w-full max-w-[1152px] mx-auto flex flex-col
       md:flex-row-reverse items-center justify-between gap-12 md:gap-24 relative z-10">

        {/* CHANGE CARD */}
        <article
          className="relative shadow-lg rounded-2xl bg-[#FAFAFA] w-full 
          max-w-[560px] p-6 md:p-8 text-left"

          style={{
            boxShadow:
              "0px 8px 10px -6px rgba(0,0,0,0.1), 0px 20px 25px -5px rgba(0,0,0,0.1)",
          }}
        >


          <div
            className="absolute flex items-center justify-center text-white 
            font-[Manrope] font-bold"

            style={{
              width: "48px",
              height: "48px",
              top: "32px",
              left: "32px",
              borderRadius: "9999px",
              backgroundColor: "rgba(76,175,80,1)",
              fontSize: "20px",
            }}

          >
            3
          </div>


          <div className="pl-[96px] pt-[4px]">


            <h3 className="font-[Manrope] font-bold text-[24px] leading-[32px]
             text-[#333333] mb-3">
              The Change
            </h3>


            <p className="font-[Inter] text-[16px] leading-[26px] text-[#364153]">
              Today, GrowMetra is transforming agriculture across Nigeria by
              empowering farmers with access to data, markets, and technology for
              sustainable growth.
            </p>


          </div>


        </article>

        {/* 3RD IMAGE */}
        <div
          className="rounded-[16px] bg-[#FAFAFA]"
          style={{
            width: "560px",
            height: "320px",
            
            marginRight: "40px", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            
             backgroundImage: "url('/change.jpg')",
            boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default StorySection;
