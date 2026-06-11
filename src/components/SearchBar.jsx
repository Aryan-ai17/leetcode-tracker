import { useState } from "react";
import { getUserData } from "../services/leetcodeApi.js";
import UserCard from "./UserCard.jsx";

function SearchBar({ darkMode }) {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    setLoading(true);
    setUserData(null);
    setError("");
    
    const data = await getUserData(username);

    

    if (!data) {
      setError("User not found");
      setUserData(null);
    } else {
      setUserData(data);
    }

    setLoading(false);
  }

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter LeetCode username"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
            className="border border-gray-300 rounded-lg px-4 py-3 w-80 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition disabled:bg-gray-400"
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>
      </div>

      {error && (
        <p className="text-red-500 mt-4 text-center">
          {error}
        </p>
      )}

      <div className="flex justify-center mt-8">
        {userData && (
          <UserCard 
          userData={userData}
          darkMode={darkMode} 
          />
        )}
      </div>
    </div>
  );
}

export default SearchBar;