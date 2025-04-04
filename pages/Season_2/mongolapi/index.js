import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Lab2() {
  const [data, setData] = useState();
  const [data1, setData1] = useState()
  const [data2, setData2] = useState()
  const [data3, setData3] = useState()
  const [data4, setData4] = useState()
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isGridView, setIsGridView] = useState(3);
  const router = useRouter();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response1 = await fetch("https://mongol-api-rest.vercel.app/clothes");
        const response2 = await fetch("https://mongol-api-rest.vercel.app/instruments");
        const response3 = await fetch("https://mongol-api-rest.vercel.app/historicaltools");
        const response4 = await fetch("https://mongol-api-rest.vercel.app/provinces");
        const response5 = await fetch("https://mongol-api-rest.vercel.app/historicalFigures");

        const result1 = await response1.json();
        const result2 = await response2.json();
        const result3 = await response3.json();
        const result4 = await response4.json();
        const result5 = await response5.json();

        if (result1 && result1.clothes) setData(result1.clothes);
        if (result2 && result2.instruments) setData1(result2.instruments);
        if (result3 && result3.historicalTools) setData2(result3.historicalTools);
        if (result4 && result4.provinces) setData3(result4.provinces);
        if (result5 && result5.historicalFigures) setData4(result5.historicalFigures);

        setLoading(false);
      } catch (error) {
        console.error(error); 
        setLoading(false);
      }
      
    };

    fetchData();
  }, []);

  return (
    <div
      className="min-h-screen bg-black p-5 flex flex-col items-center"
      style={{
        backgroundImage: `url("https://i.pinimg.com/736x/99/68/5f/99685fed9a4d5f3ef5db931e750f0faf.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    {loading && (
      <div className="flex justify-center items-center w-full h-full">
        <div className="animate-spin rounded-full border-t-4 border-b-4 border-[#CFAF48] w-16 h-16"></div>
      </div>
    )}
    <h1 className="text-2xl font-bold text-white mb-5">Mongolian Collection</h1>
    <div className="w-full h-[2px] bg-[#CFAF48]"></div>
    <div className="h-6"></div>
    <div className="flex justify-between w-full">
      <div className="flex items-center max-w-sm w-[350px] mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full border border-gray-300 rounded-l transform transition-all duration-300 ease-in-out hover:scale-105"
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm("")} 
            className="w-24 h-10 text-white hover:text-blue-400"
          >
            X
          </button>
        )}
      </div>
        <button 
          onClick={() => setIsGridView(isGridView === 3 ? 1 : 3)} 
          className="mb-4 p-2 bg-[#CFAF48] text-white rounded transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          Toggle Grid View
        </button> 
    </div>
      <h2 className="text-4xl font-bold text-white mt-6 mb-4 text-center">Traditional Clothes</h2>
      <div className={`w-full grid gap-6 ${isGridView === 3 ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
        {data?.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 ? (
          <p className="text-white text-lg font-medium absolute top-40">
            No matching items found!
          </p>
        ) : (
          data?.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
            <div key={item.id} className="bg-[#CFAF48] shadow-lg rounded-lg p-4 flex flex-row items-center w-full transform transition-all duration-300 ease-in-out hover:scale-105" onClick={() => router.push(`/Season_2/mongolapi/${item.name}`)}>
              <img 
                src={item?.images || "path/to/fallback-image.jpg"} 
                alt="Description" 
                className="w-1/3 object-cover rounded-lg h-60" 
              />
              <div className="w-2/3 pl-4">
                <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-blackp mt-2">{item.materials}</p>
                <p className="text-gray-100 mt-2">{item.timePeriod}</p>
              </div>
            </div>
          ))
        )}      
      </div>
      <h2 className="text-4xl font-bold text-white mt-6 mb-4 text-center">Musical Instruments</h2>
      <div className={`w-full grid gap-6 ${isGridView === 3 ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
      {data1?.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
        <div key={item.id} className="bg-[#CFAF48] shadow-lg rounded-lg p-4 flex flex-row items-center w-full transform transition-all duration-300 ease-in-out hover:scale-105" onClick={() => router.push(`/Season_2/mongolapi/${item.name}`)}>
          <img 
            src={item?.images || "path/to/fallback-image.jpg"} 
            alt="Description" 
            className="w-1/3 object-cover rounded-lg h-60"
          />
          <div className="w-2/3 pl-4">
            <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <p className="text-blackp mt-2">{item.materials}</p>
            <p className="text-gray-100 mt-2">{item.timePeriod}</p>
          </div>
        </div>
      ))}
      </div>
      <h2 className="text-4xl font-bold text-white mt-6 mb-4 text-center">Historical Tools</h2>
      <div className={`w-full grid gap-6 ${isGridView === 3 ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
      {data2?.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
        <div key={item.id} className="bg-[#CFAF48] shadow-lg rounded-lg p-4 flex flex-row items-center w-full transform transition-all duration-300 ease-in-out hover:scale-105" onClick={() => router.push(`/Season_2/mongolapi/${item.name}`)}>
          <img 
            src={item?.images || "path/to/fallback-image.jpg"} 
            alt="Description" 
            className="w-1/3 object-cover rounded-lg h-60" 
          />
          <div className="w-2/3 pl-4">
            <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <p className="text-blackp mt-2">{item.materials}</p>
            <p className="text-gray-100 mt-2">{item.timePeriod}</p>
          </div>
        </div>
      ))}     
      </div>
      <h2 className="text-4xl font-bold text-white mt-6 mb-4 text-center">Provinces of Mongolia</h2>
      <div className={`w-full grid gap-6 ${isGridView === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
      {data3?.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
        <div key={item.id} className="bg-[#CFAF48] shadow-lg rounded-lg p-4 flex flex-row items-center left-0 w-full transform transition-all duration-300 ease-in-out hover:scale-105" onClick={() => router.push(`/Season_2/mongolapi/${item.name}`)}>
          <div className="w-2/3 pl-4">
            <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
            <p className="text-gray-600 mt-2">{item.area}</p>
            <p className="text-blackp mt-2">{item.population}</p>
            <p className="text-gray-100 mt-2">{item.capital}</p>
          </div>
        </div>
      ))}            
      </div>
      <h2 className="text-4xl font-bold text-white mt-6 mb-4 text-center">Historical Figures</h2>
      <div className={`w-full grid gap-6 ${isGridView === 3 ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
      {data4?.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
        <div key={item.id} className="bg-[#CFAF48] shadow-lg rounded-lg p-4 flex flex-row items-center w-full transform transition-all duration-300 ease-in-out hover:scale-105" onClick={() => router.push(`/Season_2/mongolapi/${item.name}`)}>
          <img 
            src={item?.images || "path/to/fallback-image.jpg"} 
            alt="Description" 
            className="w-1/3 object-cover rounded-lg h-60" 
          />
          <div className="w-2/3 pl-4">
            <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
            <p className="text-gray-600 mt-2">{item.dateOfBirth}</p>
            <p className="text-gray-100 mt-2">{item.dateOfDeath}</p>
          </div>
        </div>
      ))}                   
      </div>
      <div className="h-4"></div>
    </div>
  );
}