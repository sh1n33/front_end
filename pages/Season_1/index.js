import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black w-screen h-screen flex justify-center items-center relative">
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 bg-gray-600 text-white py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
      >
        Back
      </button>
      <div className="flex gap-10">
        <button
          onClick={() => router.push('/Season_1/resume')}
          className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Resume
        </button>
        <button
          onClick={() => router.push('/Season_1/biedaalt')}
          className="bg-yellow-600 text-white py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Classmates
        </button>
      </div>
    </div>
  );
}