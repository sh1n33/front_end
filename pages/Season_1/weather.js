import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
    const router = useRouter();

    return (
        <>
            <div className="bg-gray-950 h-screen flex p-10">
                {/* Sidebar */}
                <button
                    onClick={() => router.back()}
                    className="w-20 h-10 bg-gray-600 text-white py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out mb-4"
                >
                    Back
                </button>
                <p>The back button is working!</p>
                <div className='w-10 h-10'></div>
                <div className="bg-gray-800 rounded-3xl h-full w-[5%] p-5">
                    <div>
                        <img src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="Logo" />
                    </div>

                    {/* Navbar */}
                    <ul className="text-slate-400 text-center py-20 text-sm font-semibold">
                        <div className="hover:text-white hover:stroke-white transition delay-150 duration-700 cursor-pointer">
                            <svg className="mb-2 mx-[28%]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain">
                                <line x1="16" y1="13" x2="16" y2="21"></line>
                                <line x1="8" y1="13" x2="8" y2="21"></line>
                                <line x1="12" y1="15" x2="12" y2="23"></line>
                                <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
                            </svg>
                            <li className="mb-16">Weather</li>
                        </div>

                        <div className="hover:text-white hover:stroke-white transition delay-150 duration-700 cursor-pointer">
                            <svg className="mb-2 mx-[28%]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                            </svg>
                            <li className="mb-16">Cities</li>
                        </div>

                        <div className="hover:text-white hover:stroke-white transition delay-150 duration-700 cursor-pointer">
                            <svg className="mb-2 mx-[28%] feather feather-map" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                                <line x1="8" y1="2" x2="8" y2="18"></line>
                                <line x1="16" y1="6" x2="16" y2="22"></line>
                            </svg>
                            <li className="mb-16">Map</li>
                        </div>

                        <div className="hover:text-white hover:stroke-white transition delay-150 duration-700 cursor-pointer">
                            <svg className="mb-2 mx-[28%]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders">
                                <line x1="4" y1="21" x2="4" y2="14"></line>
                                <line x1="4" y1="10" x2="4" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12" y2="3"></line>
                                <line x1="20" y1="21" x2="20" y2="16"></line>
                                <line x1="20" y1="12" x2="20" y2="3"></line>
                                <line x1="1" y1="14" x2="7" y2="14"></line>
                                <line x1="9" y1="8" x2="15" y2="8"></line>
                                <line x1="17" y1="16" x2="23" y2="16"></line>
                            </svg>
                            <li className="mb-16">Settings</li>
                        </div>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="w-[90%] h-full mx-10 flex flex-col">
                    {/* Your existing content here */}
                </div>
            </div>
        </>
    );
}