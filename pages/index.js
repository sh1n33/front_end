import { useState } from "react";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [color, setColor, count, setCount] = useState("");
  
  return (
    <div className="bg-gradient-to-r from-gray-800 to-black w-screen h-screen flex justify-center items-center relative flex-col">
      
      <h1 className="text-4xl font-bold text-white mb-8">Shine's Work</h1>
      
      <div className="flex gap-10">
        <button
          onClick={() => router.push('/Season_1')}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Season 1
        </button>
        <button
          onClick={() => router.push('/Season_2/mongolapi')}
          className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Season 2
        </button>
      </div>
    </div>
  );
}