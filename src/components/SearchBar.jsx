import { useState } from "react";
import { getUserData } from "../services/leetcodeApi.js";
import UserCard from "./UserCard.jsx";

function SearchBar() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  async function handleSearch() {
    const data = await getUserData(username);

    setUserData(data);
  }

  return (
    <div>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter LeetCode username"
          value={username}
          onChange={(event) =>
            setUsername(event.target.value)
          }
          className="border border-gray-300 rounded-lg px-4 py-3 w-80 outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          onClick={handleSearch}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Search
        </button>
      </div>

      <p className="mt-4 text-gray-700">
        {username}
      </p>

      {userData && (
        <UserCard userData={userData} />
      )}
    </div>
  );
}

export default SearchBar;