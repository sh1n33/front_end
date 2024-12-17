import { useState } from "react";
import weather from './images/weather.jpg';

export default function Home() {
  const [color, setColor, count, setCount] = useState("");
  
  return (
    <div className="bg-black w-screen h-screen flex justify-around items-center relative">
        <div className="bg-white w-56 h-32 border rounded-xl">
          <a href="http://localhost:3000/weather">
            <img src={weather} alt="weather"/>
          </a>
        </div>
        <div className="bg-white w-56 h-32 border rounded-xl">
          <a href="http://127.0.0.1:5500/pages/justhtml.html">
            <img src={weather} alt="info"/>
          </a>
        </div>
        <div className="bg-white w-56 h-32 border rounded-xl">
          <a href="http://localhost:3000/grid">
            <img src={weather} alt="grid"/>
          </a>
        </div>
        <div className="bg-white w-56 h-32 border rounded-xl">
          <a href="http://localhost:3000/search">
            <img src={weather} alt="search"/>
          </a>
        </div>
    </div>
  );
}