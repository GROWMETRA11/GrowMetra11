import React from "react";
import crops from "../../assets/icons/crop.svg";
import equipment from "../../assets/icons/equipments.svg";
import livestock from "../../assets/icons/livestock.svg";
import vegetables from "../../assets/icons/vegetables.svg";
import fruits from "../../assets/icons/fruits.svg";
import investment from "../../assets/icons/investments.svg";
import CategoryCards from "../../Components/Cards/CategoryCards";

const CategorySection = () => {
  return (
    <section className="w-full bg-[#FCFCFD] min-h-[796px] flex justify-center items-center">
      <div className="max-w-[1152px] min-h-[604px] mx-auto">
        <h2 className="font-bold text-center text-6xl mb-4 ">
          Explore Categories
        </h2>
        <p className="inter text-[18px] text-center font-light mb-16">
          Discover quality products organized by category
        </p>
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mt-6">
          <CategoryCards
            icon={crops}
            title="Crops"
            listings="1,240 listings"
            bgColor=" bg-[#B9F8CF]"
          />
          <CategoryCards
            icon={livestock}
            title="Crops"
            listings="1,240 listings"
            bgColor="bg-[#FEE685]"
          />
          <CategoryCards
            icon={vegetables}
            title="Crops"
            listings="1,240 listings"
            bgColor="bg-[#FFC9C9]"
          />
          <CategoryCards
            icon={fruits}
            title="Crops"
            listings="1,240 listings"
            bgColor="bg-[#FFD6A7]"
          />
          <CategoryCards
            icon={equipment}
            title="Crops"
            listings="1,240 listings"
            bgColor="bg-[#BEDBFF]"
          />
          <CategoryCards
            icon={investment}
            title="Crops"
            listings="1,240 listings"
            bgColor="bg-[#E9D4FF]"
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
