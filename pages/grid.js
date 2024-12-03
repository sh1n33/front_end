import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("list");

  return (
    <div className="p-4 bg-white text-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Нийтлэлүүд</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
        onClick={() => setView(view === "list" ? "grid" : "list")}
      >
        {view === "list" ? "Grid View рүү шилжих" : "Жагсаалт харах руу шилжих"}
      </button>
      <div
        className={`${
          view === "grid" ? "grid grid-cols-2 gap-4" : "flex flex-col space-y-4"
        }`}
      >
        <div className="border p-4 rounded shadow-sm bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Test 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim
            justo, convallis eget lacus vel, egestas rutrum augue. Donec sed
            elit lorem.
          </p>
        </div>
        <div className="border p-4 rounded shadow-sm bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Test 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim
            justo, convallis eget lacus vel, egestas rutrum augue. Donec sed
            elit lorem.
          </p>
        </div>
        <div className="border p-4 rounded shadow-sm bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Test 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim
            justo, convallis eget lacus vel, egestas rutrum augue. Donec sed
            elit lorem.
          </p>
        </div>
        <div className="border p-4 rounded shadow-sm bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Test 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim
            justo, convallis eget lacus vel, egestas rutrum augue. Donec sed
            elit lorem.
          </p>
        </div>
      </div>
    </div>
  );
}
