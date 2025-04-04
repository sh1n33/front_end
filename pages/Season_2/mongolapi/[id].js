import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ItemDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const responses = await Promise.all([
          fetch("https://mongol-api-rest.vercel.app/clothes"),
          fetch("https://mongol-api-rest.vercel.app/Instruments"),
          fetch("https://mongol-api-rest.vercel.app/HistoricalTools"),
          fetch("https://mongol-api-rest.vercel.app/EthnicGroups"),
          fetch("https://mongol-api-rest.vercel.app/Provinces"),
          fetch("https://mongol-api-rest.vercel.app/HistoricalFigures"),
        ]);

        const results = await Promise.all(responses.map((res) => res.json()));

        const fullData = {
          clothes: results[0]?.clothes || [],
          instruments: results[1]?.instruments || [],
          tools: results[2]?.historicalTools || [],
          groups: results[3]?.ethnicGroups || [],
          provinces: results[4]?.provinces || [],
          historicalFigures: results[5]?.historicalFigures || [],
        };

        let foundItem = null;
        Object.values(fullData).forEach((category) => {
          if (!foundItem) {
            foundItem = category.find((item) => item.name === id);
          }
        });

        if (foundItem) {
          setItem(foundItem);
        } else {
          setError("Item not found!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div
        className="min-h-screen bg-black p-5 flex flex-col"
        style={{
          backgroundImage: `url("https://i.pinimg.com/736x/99/68/5f/99685fed9a4d5f3ef5db931e750f0faf.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full border-t-4 border-b-4 border-[#CFAF48] w-16 h-16"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
        <p className="text-2xl font-semibold text-red-600">{error}</p>
        <button
          className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-5 flex flex-col"
      style={{
        backgroundImage: `url("https://i.pinimg.com/736x/99/68/5f/99685fed9a4d5f3ef5db931e750f0faf.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      {loading && (
        <div className="flex justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full border-t-4 border-b-4 border-[#CFAF48] w-16 h-16"></div>
        </div>
      )}
      <button
        className="border p-2 bg-[#CFAF48] text-white rounded-md shadow-md hover:bg-yellow-600 transition duration-300 w-32 transform transition-all duration-300 ease-in-out hover:scale-105"
        onClick={() => router.back()}
      >
        Back
      </button>
      <div className="mt-8 w-full h-full max-w-xl space-y-6 flex items-center justify-center">
        {item && (
          <div
            key={item.id}
            className="bg-[#CFAF48] w-full p-6 rounded-lg shadow-lg flex flex-row justify-center items-center w-full"
          >
            {item?.images?.length > 0 ? (
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-1/2 h-auto object-cover rounded-md"
              />
            ) : (
              <div className="w-1/2 h-auto bg-gray-300 rounded-md flex items-center justify-center">
                <p>No Image Available</p>
              </div>
            )}
            <div className="w-1/2 pl-6">
              <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 mt-2">{item.description?.replace(/'/g, "&#39;")}</p>
              {item.accomplishment && (
                <p className="mt-4 text-gray-500">Accomplishment: {item.accomplishment}</p>
              )}
              {item.materials && (
                <p className="mt-4 text-white-500">Materials: {item.materials}</p>
              )}
              {item.timePeriod && (
                <p className="mt-4 text-white">Time Period: {item.timePeriod}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}