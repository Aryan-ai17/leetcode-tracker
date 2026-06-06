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
        }
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

    return response.data.data.matchedUser;
  } catch (error) {
    console.log(error);
  }
}