import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SearchIcon from "../../../../../Components/iconComponent/SearchIcon";
import tomatoes from "../../../../../assets/images/Rectangle 2168.png";
import corn from "../../../../../assets/images/cornImg.png"
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
    <DashboardLayout>
      <section>
        <div>
          <h2 className="text-[32px] mb-1 font-normal">Marketplace</h2>
          <p className="text-[16px] mb-[37px] font-normal">
            Discover fresh, verified produce from trusted Nigerian farmers.
          </p>
        </div>

        <div className="flex justify-between gap-6 ">
          <div className="flex items-center gap-3 w-full max-w-[516px] relative">
            <SearchIcon className="absolute h-[55px] left-4 top-1/2 -translate-y-1/2" />
            <input
              className="w-full max-w-[516px] pl-[47px] pr-4 py-[15px] border border-gray-400 rounded-lg outline-none"
              type="text"
              placeholder="Search Products, name..."
            />
          </div>

          <div className="flex gap-6">
            <div className=" border min-h-[60px] px-10 flex items-center justify-center rounded-lg border-gray-500 max-w-[240px]">
              <select name="" id="" className="text-[20px] font-normal">
                <option value="">All Categories</option>
              </select>
            </div>
            <div className=" border min-h-[60px] px-10 flex items-center justify-center rounded-lg border-gray-500 max-w-[250px]">
              <select name="" id="" className="text-[20px] font-normal">
                <option value="">All Regions</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mapped Items */}

        <div className="mt-[35px] rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full ">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-xs"
            >
              <div className="">
              
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[236px] rounded-t-lg object-cover "
              />
              </div>

              <div className=" px-6 py-4">
                <h2 className="mt-3 font-semibold text-[20px]">
                  {product.title}
                </h2>

                <div className="flex items-center gap-2 my-3">
                  <p>{"⭐".repeat(product.rating)}</p>
                  <span className="text-gray-500 text-sm">
                    ({product.reviews})
                  </span>
                </div>

                <p className="text-gray-500">{product.seller}</p>
              

                <div className="flex justify-between items-center mt-[11px] mb-[25px]">
                  <p className="text-green-600 font-bold text-[18px]">
                    ₦{product.price}/{product.unit}
                  </p>
                  <button className="border px-4 py-2 rounded-md">
                    View Details
                  </button>
                </div>

                <button className="bg-green-500 text-white px-4 h-10 flex w-full justify-center items-center rounded-md">
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
