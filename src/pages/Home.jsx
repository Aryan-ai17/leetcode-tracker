import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

function Home() {
  const [darkMode, setDarkMode] =
    useState(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-16">

        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
          >
            {darkMode
              ? "☀ Light Mode"
              : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="text-center">
          <h2
            className={`text-4xl font-bold mb-3 ${
              darkMode
                ? "text-white"
                : "text-gray-800"
            }`}
          >
            Track Your LeetCode Progress
          </h2>

          <p
            className={`mb-8 ${
              darkMode
                ? "text-gray-300"
                : "text-gray-500"
            }`}
          >
            Search any LeetCode username
          </p>
        </div>

        <div className="flex justify-center">
          <SearchBar darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default Home;