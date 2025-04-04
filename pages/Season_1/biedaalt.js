import React, { useState } from "react";
import { useRouter } from 'next/router';

const SearchComponent = () => {
  const data = [
    { name: "Amartuvshin", age: 16, id: 20261008, phone: "99505646" },
    { name: "Anar", age: 16, id: 20261008, phone: "99505646" },
    { name: "Anar-Erdene", age: 16, id: 20261008, phone: "99505646" },
    { name: "Batmend", age: 16, id: 20261008, phone: "99505646" },
    { name: "Dalaisuren", age: 16, id: 20261008, phone: "99505646" },
    { name: "Tergel", age: 16, id: 20261008, phone: "99505646" },
    { name: "Shine-Erdene", age: 16, id: 20261008, phone: "99505646" },
    { name: "Ochir-Erdene", age: 16, id: 20261008, phone: "99505646" },
    { name: "Choi-Odser", age: 16, id: 20261008, phone: "99505646" },
    { name: "B.Temuujin", age: 16, id: 20261008, phone: "99505646" },
    { name: "Sh.Temuujin", age: 16, id: 20261008, phone: "99505646" },
    { name: "E.Temuujin", age: 16, id: 20261008, phone: "99505646" },
    { name: "Temuulen", age: 16, id: 20261008, phone: "99505646" },
    { name: "Tselmeg", age: 16, id: 20261008, phone: "99505646" },
    { name: "Tugs-Asralt", age: 16, id: 20261008, phone: "99505646" },
    { name: "Enkh-Uchral", age: 16, id: 20261008, phone: "99505646" },
    { name: "Enkhtugs", age: 16, id: 20261008, phone: "99505646" },
    { name: "Emily", age: 16, id: 20261008, phone: "99505646" },
    { name: "Enkhjav", age: 16, id: 20261008, phone: "99505646" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("list");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const router = useRouter(); // Add router hook

  return (
    <div className="p-4 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Search Names</h1>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="bg-gray-600 text-white py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out mb-4"
      >
        Back
      </button>
    <div className="w-20"></div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
        onClick={() => setView(view === "list" ? "grid" : "list")}
      >
        {view === "list" ? "Switch to Grid View" : "Switch to List View"}
      </button>
      <input
        id="search"
        type="text"
        placeholder="Search names..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 w-64 border mb-6 rounded-lg absolute left-48"  // Added margin-bottom to add gap
      />
      <div
        className={`${
          view === "grid" ? "grid grid-cols-2 gap-4" : "flex flex-col space-y-4"
        }`}
      >
        {filteredData.length === 0 ? (
          <p className="text-gray-500">No matches found.</p>
        ) : (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow-sm bg-gray-700 hover:shadow-xl transition-shadow duration-300 relative"
            >
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 text-white p-0 transition-opacity duration-300">
                <p>Age: {item.age}</p>
                <p>ID: {item.id}</p>
                <p>Phone: {item.phone}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchComponent;