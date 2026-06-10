function RecentSubmissions({
  recentSubmissions,
}) {
  if (!recentSubmissions) {
    return null;
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-[450px]">
      <h2 className="text-xl font-bold mb-4">
        Recent Submissions
      </h2>

      <div className="space-y-3">
        {recentSubmissions.map(
          (submission, index) => (
            <div
              key={index}
              className="border rounded-lg p-3 hover:bg-gray-100 transition"
            >
              <a
               href={`https://leetcode.com/problems/${submission.titleSlug}/`}
               target="_blank"
                rel="noopener noreferrer"
               className="font-medium text-blue-600 hover:underline"
            >
           {submission.title}
</a>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default RecentSubmissions;