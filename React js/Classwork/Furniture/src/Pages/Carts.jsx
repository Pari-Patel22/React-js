import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Carts() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    let allData = JSON.parse(localStorage.getItem("Carts")) || [];
    setRecord(allData);
  }, []);

  return (
    <div className="flex justify-around m-10 flex-wrap pl-10 pr-10">
      {record.length > 0 ? (
        record.map((e, i) => (
          <div key={i} className="mt-10 text-center">
            <img
              src={e.img}
              alt={e.title}
              className="w-[310px] h-[310px] bg-black object-cover rounded-xl"
            />
            <h2 className="text-2xl text-white mt-4">{e.title}</h2>
            <p className="text-lg text-gray-400">⭐ {e.rate}</p>
            <h2 className="text-2xl text-[#d4a373] font-bold mt-2">{e.price}</h2>
          </div>

          
        ))
      ) : (
        <div className="flex justify-center w-full mt-20">
          <Link to={"/"}>
            <button className="text-2xl border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
