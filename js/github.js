class GitHub {
  constructor() {
    this.auth_token = "f05b7c8a2fe25fe54190556f78fd9f26b681f3aa";
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
          repositories(first: 20) {
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
