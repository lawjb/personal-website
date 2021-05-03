require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "personal-website",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-source-github-api",
      options: {
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
        graphQLQuery: `query {
                        viewer {
                          avatarUrl
                          bio
                          company
                          email
                          location
                          login
                          name
                          twitterUsername
                          updatedAt
                          url
                          websiteUrl
                          repositories(privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}, first: 100, ownerAffiliations: OWNER) {
                            nodes {
                              description
                              homepageUrl
                              nameWithOwner
                              pushedAt
                              stargazerCount
                              url
                              updatedAt
                            }
                          }
                        }
                      }`,
      },
    },
  ],
};
