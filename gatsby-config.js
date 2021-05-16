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
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
                          repositories(privacy: PUBLIC, orderBy: {field: PUSHED_AT, direction: DESC}, first: 100, ownerAffiliations: OWNER, isFork: false) {
                            nodes {
                              description
                              homepageUrl
                              pushedAt
                              stargazerCount
                              url
                              name
                              languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
                                nodes {
                                  color
                                  name
                                }
                              }
                            }
                          }
                        }
                      }`,
      },
    },
  ],
};
