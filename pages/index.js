import { useState } from "react"; // Only import useState from React
// React import is implicit in newer versions of React, but you can still import it if needed (for JSX transformation).

export default function Home() {
  const [color, setColor, count, setCount] = useState("");
  
  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
      <p>
        Change color:
      </p>
      <button className="border bg-red-800 w-24 h-24"
      onClick={() => {
        setColor("red");
      }}
      ></button>
      <button className="border bg-blue-800 w-24 h-24"
      onClick={() => {
        setColor("blue");
      }}
      ></button>
      <button className="border bg-green-800 w-24 h-24"
      onClick={() => {
        setColor("green");
      }}
      ></button>
      <button className="bg-white w-16 h-8"
      onClick={() => {
        setCount
        }}>Add one</button>
    </div>
  );
}