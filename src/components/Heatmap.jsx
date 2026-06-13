function Heatmap({
  submissionCalendar,
  darkMode,
}) {
  const parsedData = JSON.parse(
    submissionCalendar
  );

  const days = Object.entries(
    parsedData
  );

  function getColor(count) {
    if (count === 0) {
      return darkMode
        ? "bg-gray-700"
        : "bg-gray-200";
    }

    if (count <= 3) {
      return "bg-green-300";
    }

    if (count <= 10) {
      return "bg-green-500";
    }

    return "bg-green-700";
  }

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
          Submission Heatmap
        </h2>

        <span className="text-sm text-gray-400">
          Activity Overview
        </span>
      </div>

      <div className="grid grid-cols-7 gap-2 justify-center">
        {days.map(([date, count]) => {
          const formattedDate =
            new Date(
              Number(date) * 1000
            ).toLocaleDateString();

          return (
            <div
              key={date}
              className={`w-10 h-10 rounded-xl transition hover:scale-110 cursor-pointer ${getColor(
                count
              )}`}
              title={`${formattedDate} • ${count} submissions`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Heatmap;