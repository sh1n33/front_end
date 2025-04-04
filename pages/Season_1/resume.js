import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter inside the function component

export default function Resume() {
  const router = useRouter(); // Initialize useRouter hook inside the component

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <button
        onClick={() => router.back()}
        className="bg-gray-100 text-black py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out mb-4"
      >
        Back
      </button>
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Shine Erdene</h1>
        <p className="text-gray-600">Aspiring Web Developer & Designer</p>
      </header>
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">About Me</h2>
        <p className="text-gray-600 mt-2">
          Hello! I am a 16-year-old aspiring developer passionate about creating beautiful and functional web experiences. Currently learning HTML, CSS, and JavaScript, and excited to dive deeper into web development.
        </p>
      </section>
      <section className="mt-6 relative">
        <h2 className="text-xl font-semibold text-gray-700">Skills</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>Responsive Design</li>
          <li>Basic Knowledge of Tailwind CSS</li>
        </ul>
        <img src="https://c.stocksy.com/a/5i1000/z9/6577.jpg?1564604440" className="w-32 h-40 absolute right-1 top-0" alt="" />
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Experience</h2>
        <p className="text-gray-600 mt-2">Currently learning and building personal projects. Looking forward to gaining hands-on experience.</p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Contact</h2>
        <p className="text-gray-600 mt-2">Feel free to reach out if you'd like to collaborate or just chat!</p>
        <p className="mt-2 text-gray-800 font-semibold">Email: <a href="mailto:shineerdeneshinelunda@gmail.com" className="text-blue-500 hover:underline">shineerdeneshinelunda@gmail.com</a></p>
        <p className="text-gray-800 font-semibold">Phone: <a href="tel:+97699505646" className="text-blue-500 hover:underline">+976 99505646</a></p>
      </section>
    </div>
  );
}