import StatsChart from "./StatsChart";

function UserCard({ userData }) {
  return (
    <div>
      <div className="mt-8 bg-white shadow-lg rounded-2xl p-6 w-[450px]">
        <h2 className="text-2xl font-bold mb-4">
          {userData.username}
        </h2>

        <p className="mb-2">
          Ranking: {userData.profile.ranking}
        </p>

        <p className="mb-4 font-medium">
          Total Solved: {
            userData.submitStats.acSubmissionNum[0]
              .count
          }
        </p>

        <div className="space-y-3">
          <div className="bg-green-100 p-3 rounded-lg">
            Easy: {
              userData.submitStats.acSubmissionNum[1]
                .count
            }
          </div>

          <div className="bg-yellow-100 p-3 rounded-lg">
            Medium: {
              userData.submitStats.acSubmissionNum[2]
                .count
            }
          </div>

          <div className="bg-red-100 p-3 rounded-lg">
            Hard: {
              userData.submitStats.acSubmissionNum[3]
                .count
            }
          </div>
        </div>
      </div>

     <div className="mt-6">
      <StatsChart userData={userData} />
    </div>
    </div>
  );
}

export default UserCard;