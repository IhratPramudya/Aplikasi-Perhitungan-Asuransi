"use client";

import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/sign-in'); // Ganti '/sign-in' dengan path halaman login Anda
  };

  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl shadow-lg p-8 text-center">
      <div className="mb-6">
        <svg
          className="w-16 h-16 mx-auto text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-white mb-4">Selamat Datang di Assurance!</h2>
      <p className="text-white opacity-80 mb-4">
        Untuk mengakses semua fitur dan informasi penting, Anda perlu melakukan login terlebih dahulu.
      </p>
      <button
        className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
        onClick={handleLoginClick}
      >
        <svg
          className="w-5 h-5 inline-block mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v-3a2 2 0 012-2h1m-1-9l4-4m-7 4h10m-3 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Login Sekarang
      </button>
    </div>
  );
};

export default HomePage;