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
      className={`shadow-xl rounded-3xl p-8 w-[420px] transition hover:scale-[1.02] ${
        darkMode
          ? "bg-gray-800 text-white border border-gray-700"
          : "bg-white text-black border border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          Problem Stats
        </h2>

        <span className="text-sm text-gray-400">
          Easy / Medium / Hard
        </span>
      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <BarChart data={chartData}>
          <XAxis
            dataKey="difficulty"
            tick={{
              fill: darkMode
                ? "#fff"
                : "#000",
            }}
          />

          <YAxis
            tick={{
              fill: darkMode
                ? "#fff"
                : "#000",
            }}
          />

          <Tooltip />

          <Bar
            dataKey="solved"
            radius={[12, 12, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatsChart;