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
      <input
        type="text"
        placeholder="Search names..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 w-64 border mb-4"
      />
      <ul>
        {filteredData.map((item, index) => (
          <div
          key={index}
          className="p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {item}
        </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
