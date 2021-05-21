export default class GitHub {
  constructor() {
    this.auth_token = process.env.APP_TOKEN;
  }

  async getUserDetails() {
    const url = "https://api.github.com/graphql";
    const data = {
      query: `{
        user(login: "Mapelsun") {
          avatarUrl
          name
          bio
          company
          followers {
            totalCount
          }
          following {
            totalCount
          }
          websiteUrl
          url
          twitterUsername
          status {
            emoji
            emojiHTML
            message
          }
          starredRepositories {
            totalCount
          }
          repositories(last: 20) {
            totalCount
            nodes {
              name
              forkCount
              isPrivate
              updatedAt
              primaryLanguage {
                color
                name
              }
              stargazerCount
              url
              description
            }
          }
          location
          login
        }
      }
      `,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + this.auth_token,
      },
      body: JSON.stringify(data),
    });

    const userDetails = await response.json();
    return userDetails;
  }
}
