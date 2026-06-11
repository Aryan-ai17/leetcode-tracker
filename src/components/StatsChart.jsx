import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function StatsChart({
  userData,
  darkMode,
}) {
  const chartData = [
    {
      difficulty: "Easy",
      solved:
        userData.submitStats
          .acSubmissionNum[1].count,
    },
    {
      difficulty: "Medium",
      solved:
        userData.submitStats
          .acSubmissionNum[2].count,
    },
    {
      difficulty: "Hard",
      solved:
        userData.submitStats
          .acSubmissionNum[3].count,
    },
  ];

  return (
    <div
      className={`mt-8 rounded-2xl shadow-lg p-6 w-[450px] ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">
        Problem Stats
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={chartData}>
          <XAxis dataKey="difficulty" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="solved"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatsChart;