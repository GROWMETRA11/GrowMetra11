import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SearchIcon from "../../../../../Components/iconComponent/SearchIcon";
import tomatoes from "../../../../../assets/images/Rectangle 2168.png";
import corn from "../../../../../assets/images/cornImg.png";
import potatoes from "../../../../../assets/images/potato.png";
import rice from "../../../../../assets/images/rice.png";
import apple from "../../../../../assets/images/apples.png";
import banana from "../../../../../assets/images/bananas.png";

const MarketPlace = () => {
  const products = [
    {
      id: 1,
      title: "Fresh Red Tomatoes",
      rating: 4,
      reviews: 194,
      seller: "Garden Prime",
      price: 3500,
      unit: "KG",
      image: tomatoes,
      verified: true,
    },
    {
      id: 2,
      title: "Organic Yellow Maize",
      rating: 3,
      reviews: 194,
      seller: "Fresh Farm Co",
      price: 2500,
      unit: "KG",
      image: corn,
      verified: true,
    },
    {
      id: 3,
      title: "Premium Sweet Potatoes",
      rating: 3,
      reviews: 104,
      seller: "Green Valley Farms",
      price: 2000,
      unit: "KG",
      image: potatoes,
      verified: true,
    },
    {
      id: 4,
      title: "Premium White Rice",
      rating: 3,
      reviews: 104,
      seller: "Rice Masters",
      price: 2900,
      unit: "KG",
      image: rice,
      verified: true,
    },
    {
      id: 5,
      title: "Fresh Apple",
      rating: 3,
      reviews: 104,
      seller: "Garden Prime",
      price: 1200,
      unit: "KG",
      image: apple,
      verified: true,
    },
    {
      id: 6,
      title: "Fresh Banana",
      rating: 4,
      reviews: 194,
      seller: "Garden Prime",
      price: 1200,
      unit: "KG",
      image: banana,
      verified: true,
    },
  ];

  return (
    <DashboardLayout title="Marketplace">
      <section>
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 font-normal">
            Marketplace
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-[37px] font-normal">
            Discover fresh, verified produce from trusted Nigerian farmers.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6">
          
          {/* Search input */}
          <div className="flex items-center gap-3 w-full lg:max-w-[516px] relative">
            <SearchIcon className="absolute h-[55px] left-4 top-1/2 -translate-y-1/2" />
            <input
              className="w-full pl-[47px] pr-4 py-[14px] border border-gray-400 rounded-lg outline-none text-sm sm:text-base md:text-lg lg:text-xl"
              type="text"
              placeholder="Search products..."
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full lg:w-auto">
            <div className="border h-[55px] px-6 flex items-center justify-center rounded-lg border-gray-500 w-full sm:w-auto">
              <select className="text-sm sm:text-base md:text-lg lg:text-xl font-normal w-full bg-transparent outline-none">
                <option value="">All Categories</option>
              </select>
            </div>

            <div className="border h-[55px] px-6 flex items-center justify-center rounded-lg border-gray-500 w-full sm:w-auto">
              <select className="text-sm sm:text-base md:text-lg lg:text-xl font-normal w-full bg-transparent outline-none">
                <option value="">All Regions</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-[35px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-sm"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[220px] sm:h-[236px] rounded-t-lg object-cover"
              />

              <div className="px-4 sm:px-6 py-4">
                <h2 className="mt-3 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                  {product.title}
                </h2>

                <div className="flex items-center gap-2 my-3">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl">{"⭐".repeat(product.rating)}</p>
                  <span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg">
                    ({product.reviews})
                  </span>
                </div>

                <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg">{product.seller}</p>

                <div className="flex justify-between items-center mt-3 mb-5">
                  <p className="text-green-600 font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                    ₦{product.price}/{product.unit}
                  </p>
                  <button className="border px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm md:text-base lg:text-lg">
                    View Details
                  </button>
                </div>

                <button className="bg-green-500 text-white px-4 h-10 w-full rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default MarketPlace;
