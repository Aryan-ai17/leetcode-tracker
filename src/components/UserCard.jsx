import StatsChart from "./StatsChart.jsx";
import RecentSubmission from "./RecentSubmission.jsx";
import Heatmap from "./Heatmap.jsx";

function UserCard({
  userData,
  darkMode,
}) {
  return (
    <div className="flex gap-6 items-start mt-8 flex-wrap justify-center">

      {/* Profile Card */}
      <div
        className={`shadow-xl rounded-3xl p-8 w-[380px] transition hover:scale-[1.02] ${
          darkMode
            ? "bg-gray-800 text-white border border-gray-700"
            : "bg-white text-black border border-gray-200"
        }`}
      >
        <div className="flex flex-col items-center">
          <img
            src={userData.profile.userAvatar}
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-orange-400 shadow-md"
          />

          <h2 className="text-3xl font-bold mt-4">
            {userData.username}
          </h2>

          <p className="text-gray-400 text-sm mb-6">
            LeetCode Profile
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-orange-100 text-black p-4">
            <p className="text-sm text-gray-600">
              Ranking
            </p>

            <h3 className="text-xl font-bold">
              {userData.profile.ranking}
            </h3>
          </div>

          <div className="rounded-2xl bg-blue-100 text-black p-4">
            <p className="text-sm text-gray-600">
              Contest Rating
            </p>

            <h3 className="text-xl font-bold">
              {userData.contestRating
                ? Math.round(
                    userData.contestRating
                  )
                : "N/A"}
            </h3>
          </div>

          <div className="rounded-2xl bg-green-100 text-black p-4 col-span-2">
            <p className="text-sm text-gray-600">
              Total Solved
            </p>

            <h3 className="text-2xl font-bold">
              {
                userData.submitStats
                  .acSubmissionNum[0]
                  .count
              }
            </h3>
          </div>
        </div>
      </div>

      {/* Stats Chart */}
      <StatsChart
        userData={userData}
        darkMode={darkMode}
      />

      {/* Recent Submissions */}
      <RecentSubmission
        recentSubmission={
          userData.recentSubmission
        }
        darkMode={darkMode}
      />

      {/* Heatmap */}
      <Heatmap
        submissionCalendar={
          userData.submissionCalendar
        }
        darkMode={darkMode}
      />
    </div>
  );
}

export default UserCard;