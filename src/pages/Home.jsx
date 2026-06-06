import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center pt-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Track Your LeetCode Progress
        </h2>

        <p className="text-gray-500 mb-8">
          Search any LeetCode username
        </p>

        <SearchBar />
      </div>
    </div>
  );
}

export default Home;