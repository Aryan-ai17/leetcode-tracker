import StatsChart from "./StatsChart.jsx";
import RecentSubmissions from "./RecentSubmission.jsx";

function UserCard({
  userData,
  darkMode,
}) {
  return (
    <div className="flex gap-6 items-start mt-8 flex-wrap justify-center">

      <div
        className={`shadow-lg rounded-2xl p-6 w-[450px] ${
          darkMode
            ? "bg-gray-800 text-white"
            : "bg-white text-black"
        }`}
      >
        <img
          src={userData.profile.userAvatar}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border"
        />

        <h2 className="text-2xl font-bold text-center mb-4">
          {userData.username}
        </h2>

        <p className="mb-2">
          Ranking: {userData.profile.ranking}
        </p>

        <p className="mb-2">
          Contest Rating: {
            userData.contestRating
              ? Math.round(
                  userData.contestRating
                )
              : "Not Available"
          }
        </p>

        <p className="mb-4 font-medium">
          Total Solved: {
            userData.submitStats
              .acSubmissionNum[0].count
          }
        </p>

        <div className="space-y-3">
          <div className="bg-green-100 text-black p-3 rounded-lg">
            Easy: {
              userData.submitStats
                .acSubmissionNum[1].count
            }
          </div>

          <div className="bg-yellow-100 text-black p-3 rounded-lg">
            Medium: {
              userData.submitStats
                .acSubmissionNum[2].count
            }
          </div>

          <div className="bg-red-100 text-black p-3 rounded-lg">
            Hard: {
              userData.submitStats
                .acSubmissionNum[3].count
            }
          </div>
        </div>
      </div>

      <StatsChart 
      userData={userData}
      darkMode={darkMode} 
      />

      <RecentSubmissions
        recentSubmissions={
          userData.recentSubmissions
        }
        darkMode={darkMode}
      />
    </div>
  );
}

export default UserCard;