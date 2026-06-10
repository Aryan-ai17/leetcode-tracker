import axios from "axios";

const GRAPHQL_URL = "/graphql";

export async function getUserData(username) {
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username

        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }

        profile {
          ranking
          userAvatar
        }

        submissionCalendar
      }

      userContestRanking(username: $username) {
        rating
      }

      recentAcSubmissionList(username: $username) {
        title
        titleSlug
        timestamp
      }
    }
  `;

  try {
    const response = await axios.post(
      GRAPHQL_URL,
      {
        query,
        variables: {
          username,
        },
      }
    );

    return {
      ...response.data.data.matchedUser,

      contestRating:
        response.data.data
          .userContestRanking?.rating,

      recentSubmissions:
        response.data.data
          .recentAcSubmissionList,
    };
  } catch (error) {
    console.log(error);
  }
}