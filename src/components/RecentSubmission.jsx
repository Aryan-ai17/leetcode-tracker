function RecentSubmissions({
  recentSubmissions,
  darkMode,
}) {
  if (!recentSubmissions) {
    return null;
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
          Recent Submissions
        </h2>

        <span className="text-sm text-gray-400">
          Last 20 Problems
        </span>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {recentSubmissions.map(
          (submission, index) => (
            <div
              key={index}
              className={`flex items-center justify-between rounded-2xl p-4 border transition ${
                darkMode
                  ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <a
                href={`https://leetcode.com/problems/${submission.titleSlug}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                {submission.title}
              </a>

              <span className="text-green-500 text-sm font-medium">
                Solved
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default RecentSubmissions;