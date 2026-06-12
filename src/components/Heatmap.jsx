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
    if (count === 0)
      return "bg-gray-200";

    if (count <= 3)
      return "bg-green-200";

    if (count <= 10)
      return "bg-green-400";

    return "bg-green-600";
  }

  return (
    <div
      className={`shadow-lg rounded-2xl p-6 w-[450px] ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">
        Submission Heatmap
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {days.map(([date, count]) => (
          <div
            key={date}
            className={`w-10 h-10 rounded ${getColor(
              count
            )}`}
            title={`${count} submissions`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Heatmap;