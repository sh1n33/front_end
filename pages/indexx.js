import { useState } from "react"; // Only import useState from React
// React import is implicit in newer versions of React, but you can still import it if needed (for JSX transformation).

export default function Home() {
  const [color, setColor, count, setCount] = useState("");
  
  return (
    <div className="bg-black w-screen h-full flex justify-around items-center relative top-96">
        <div className="bg-white w-56 h-32 border rounded-xl"></div>
        <div className="bg-white w-56 h-32 border rounded-xl"></div>
        <div className="bg-white w-56 h-32 border rounded-xl"></div>
        <div className="bg-white w-56 h-32 border rounded-xl"></div>
    </div>
  );
}