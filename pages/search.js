import React, { useState } from "react";

const SearchComponent = () => {
  const data = [
    "Mzinho",
    "Senzu",
    "Techno4k",
    "910",
    "Blitz",
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
        Search names:
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search names..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 w-64 border mb-4 rounded-lg"
      />
      {filteredData.length === 0 ? (
        <p className="text-gray-500">No matches found.</p>
      ) : (
        <ul>
          {filteredData.map((item, index) => (
            <li
              key={index}
              className="p-4 mb-2 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
