import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Track Your LeetCode Progress
          </h2>

          <p className="text-gray-500 mb-8">
            Search any LeetCode username
          </p>
        </div>

        <div className="flex justify-center">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Home;