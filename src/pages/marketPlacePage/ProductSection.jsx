import React from "react";
import { CheckCircle, Star, MapPin } from "lucide-react";
import riceImg from "../../assets/images/Premium Rice.png";
import tomatoImg from "../../assets/images/Fresh Tomatoes.png";
import maizeImg from "../../assets/images/Organic Maize.png";
import pepperImg from "../../assets/images/Fresh Peppers.png";
import potatoesImg from "../../assets/images/Sweet Potatoes.png";
import casavaImg from "../../assets/images/Cassava Tubers.png";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      seller: "Amira Bello",
      location: "Kano",
      reviews: 127,
      price: "₦800",
      rating: 4.9,
      verified: true,
      image: tomatoImg,
    },
    {
      id: 2,
      name: "Organic Maize",
      seller: "Chukwudi Okafor",
      location: "Enugu",
      reviews: 94,
      price: "₦450",
      rating: 4.8,
      verified: true,
      image: maizeImg,
    },
    {
      id: 3,
      name: "Sweet Potatoes",
      seller: "Fatima Ibrahim",
      location: "Plateau",
      reviews: 156,
      price: "₦600",
      rating: 5.0,
      verified: true,
      image: potatoesImg
    },
    {
      id: 4,
      name: "Rice",
      seller: "Oluwaseun Adeyemi",
      location: "Ogun",
      reviews: 203,
      price: "₦350",
      rating: 4.7,
      verified: true,
      image: riceImg,
    },
    {
      id: 5,
      name: "Cassava Tubers",
      seller: "Blessing Nwosu",
      location: "Benue",
      reviews: 88,
      price: "₦200",
      rating: 4.9,
      verified: true,
      image: casavaImg
    },
    {
      id: 6,
      name: "Fresh Peppers",
      seller: "Musa Abdullahi",
      location: "Kaduna",
      reviews: 142,
      price: "₦1,200",
      rating: 4.8,
      verified: true,
      image: pepperImg,
    },
  ];

  return (
   <section className="w-full py-[96px]">
     <h2 className="font-bold text-center text-6xl mb-4 ">
          Featured Products
        </h2>
        <p className="inter text-[18px] text-center font-light mb-16">
          Quality produce from verified farmers across Nigeria
        </p>
     <div className="grid max-w-[1280px]  mx-auto w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-5 lg:p-0"> 
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl max-w-[405.33px] shadow-sm hover:shadow-md transition duration-200 overflow-hidden relative"
        >
          {/* Image Section */}
          <div className="relative w-full h-[288px] bg-gray-100">
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                No Image
              </div>
            )}

            {/* Verified Badge */}
            {item.verified && (
              <span className="absolute top-3 right-3 bg-green-700 text-white  text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                <CheckCircle size={14} />
                Verified
              </span>
            )}
          </div>

          {/* Content Section */}
          <div className="p-4 flex flex-col justify-between min-h-[150px]">
            {/* Product Info */}
            <div>
              <h3 className="font-semibold flex justify-between text-gray-800 text-sm">
                {item.name}
                <div className="flex items-center text-sm font-medium text-gray-700 bg-gray-50 px-2 py-1 rounded-full shadow-sm">
                  <Star size={14} className="text-yellow-400 mr-1" />
                  {item.rating}
                </div>
              </h3>
              
              <p className="text-xs text-gray-500 mb-2">by {item.seller}</p>

              <div className="flex items-center text-xs text-gray-400 gap-2">
                <MapPin size={12} />
                <span>{item.location}</span> •{" "}
                <span>{item.reviews} reviews</span>
                
              </div>
              
            </div>
            

            {/* Footer */}
            <div className="flex items-center justify-between mt-3">
              <p className="font-bold text-green-600 text-base">
                {item.price}/kg
              </p>

              <div className="flex items-center gap-2">
                {/* Rating */}
                

                {/* Button */}
                <button className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-full hover:bg-green-700 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
   </section>
  );
};

export default ProductSection;
