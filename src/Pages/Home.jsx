import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const categories = [
    { name: "Electronics", img: `public/images/d3.jpeg`},
    { name: "Fashion", img: "https://images.unsplash.com/photo-1521334884684-d80222895322" },
    { name: "Home Decor", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
    { name: "Accessories", img: "https://images.unsplash.com/photo-1587560699334-bea93391dcef" },
  ];

  const products = [
    {
      name: "Watch",
      price: "$89.99",
      image: `public/images/wimg.jpeg`
    },
    {
      name: "Laptop",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
    },
    {
      name: "Stylish Lamp",
      price: "$59.99",
      image: `public/images/d1.jpeg`
    },
    {
      name: "Leather Wallet",
      price: "$39.99",
      image: `public/images/d2.jpg`
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="w-full h-96 bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl md:text-6xl font-bold">Biggest Sale of the Year</h1>
          <p className="mt-4 text-lg">Get up to 50% off on selected products</p>
          <Link to="/shop">
            <button className="mt-6 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <Link to="/shop" key={index}>
              <div className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition cursor-pointer">
                <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                <p className="text-center py-2 font-semibold">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link to="/shop" key={index}>
              <div className="p-4 border rounded shadow hover:shadow-lg transition bg-white cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
                <p className="mt-2 text-lg font-semibold">{product.name}</p>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
