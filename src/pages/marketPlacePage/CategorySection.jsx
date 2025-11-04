import React from "react";
import crops from "../../assets/icons/crop.svg";
import equipment from "../../assets/icons/equipments.svg";
import livestock from "../../assets/icons/livestock.svg";
import vegetables from "../../assets/icons/vegetables.svg";
import fruits from "../../assets/icons/fruits.svg";
import investment from "../../assets/icons/investments.svg";
import CategoryCards from "../../Components/Cards/CategoryCards";
import ArrowForward from "../../Components/iconComponent/ArrowForward";

const CategorySection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#F9FAFB]  px-5  flex justify-center items-center">
      <div className="max-w-[1152px] py-[96px] w-full  mx-auto">
        <h2 className="font-bold text-center text-6xl mb-4 ">
          Explore Categories
        </h2>
        <p className="inter text-[18px] text-center font-light mb-16">
          Discover quality products organized by category
        </p>
        <div className="grid w-full  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mt-6">
          <CategoryCards
            icon={crops}
            title="Crops"
            listings="1,240 listings"
            bgColor=" bg-[#F0FDF4]"
            border= "border-[#B9F8CF]"
          />
          <CategoryCards
            icon={livestock}
            title="Crops"
            listings="1,240 listings"
            bgColor="bg-[#FFFBEB]"
            border="border-[#FEE685]"
          />
          <CategoryCards
            icon={vegetables}
            title="Crops"
            listings="1,240 listings"
            bgColor="bg-[#FFF7ED]"
            border="border-[#FFD6A7]"
          />
          <CategoryCards
            icon={fruits}
            title="Crops"
            listings="1,240 listings"
            bgColor="bg-[#FEF2F2]"
            border="border-[#FFC9C9]"
          />
          <CategoryCards
            icon={equipment}
            title="Crops"
            listings="1,240 listings"
            bgColor="bg-[#EFF6FF]"
            border="border-[#BEDBFF]"
          />
          <CategoryCards
            icon={investment}
            title="Crops"
            listings="1,240 listings"
            bgColor="bg-[#FAF5FF]"
            border="border-[#E9D4FF]"
          />
        </div>
          <div className="flex justify-center items-center mt-[64px]">
            <a
            className="px-5 py-[22px] flex mx-auto items-center gap-2 border-1 rounded-full bg-[#4CAF50] text-white"
            href=""
          >
            Explore all Listings <ArrowForward />          
          </a>
          </div>
        
      </div>
    </section>
  );
};

export default CategorySection;
