import React from 'react';

export default function Cards({ id, img, title, rate, price }) {
  const addToCart = (id) => {
    // Get all products from localStorage
    let allProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Find the clicked product by id
    let singleData = allProducts.find((item) => item.id === id);

    // Get current cart or empty array
    let allCarts = JSON.parse(localStorage.getItem("Carts")) || [];

    // Add selected product
    allCarts.push(singleData);

    // Save back to localStorage
    localStorage.setItem("Carts", JSON.stringify(allCarts));

    // Optional alert
    alert(`${singleData.title} added to cart!`);
  };

  return (
    <div className="w-80 bg-[#111] text-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl mt-20">
      {/* Product Image */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* Product Content */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-gray-400 text-sm mb-1">⭐ {rate} Rating</p>
        <p className="text-lg font-bold text-[#d4a373] mb-4">₹{price}</p>

        <button
          onClick={() => addToCart(id)}
          className="w-full bg-[#d4a373] hover:bg-[#b88657] text-black font-medium py-3 rounded-full transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
