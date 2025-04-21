import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { productId } = useParams();
  const [parentData, setParentData] = useState({});
  const [mainImage, setMainImage] = useState(""); 
  const [defaultImage, setDefaultImage] = useState(""); 

  // Fetch product data
  const getProductDetail = () => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((success) => {
        setParentData(success.data);
        setMainImage(success.data.thumbnail); 
        setDefaultImage(success.data.thumbnail); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Product Image Gallery */}
        <div className="flex flex-col items-center">
          <img
            src={mainImage}
            alt="Product"
            className="w-96 h-96 object-cover rounded-xl shadow-md"
          />

          {/* Thumbnail Images */}
          <div className="flex gap-4 mt-4">
            {parentData?.images?.map((imgData, imgIndex) => (
              <img
                key={imgIndex}
                src={imgData}
                alt="Thumbnail"
                className="w-20 h-20 object-cover rounded-md cursor-pointer border-2"
                onMouseEnter={() => setMainImage(imgData)} 
                onMouseLeave={() => setMainImage(defaultImage)}
              />
            ))}
          </div>
        </div>

        {/* Right - Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{parentData.title}</h1>
          <p className="text-gray-500 text-sm mb-2 capitalize">
            Category: {parentData.category}
          </p>
          <p className="text-yellow-500 text-lg font-semibold">
            ⭐ {parentData.rating}/5
          </p>
          <p className="text-gray-700 mt-4">{parentData.description}</p>

          <div className="mt-6 flex items-center">
            <span className="text-2xl font-bold text-blue-600">
              ${parentData.price}
            </span>
            <span className="text-gray-500 text-sm ml-2 line-through">
              $249999.99
            </span>
          </div>

          {/* Buttons */}
          <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700">
            🛒 Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

        {parentData?.reviews?.map((reviewsData, reviewsIndex) => (
          <div
            key={reviewsIndex}
            className="border border-gray-200 p-4 rounded-lg mb-4"
          >
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-3">
                <h3 className="font-semibold">{reviewsData.reviewerName}</h3>
                <p className="text-yellow-500 text-sm">
                  ⭐ {reviewsData.rating}/5
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-2">{reviewsData.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
