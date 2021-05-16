import { graphql, useStaticQuery } from "gatsby";

export const useGitHubUser = () => {
  const result = useStaticQuery(graphql`
    query {
      allGithubData {
        nodes {
          data {
            viewer {
              bio
              company
              email
              location
              login
              name
              twitterUsername
              url
              websiteUrl
              avatarUrl
              repositories {
                nodes {
                  description
                  homepageUrl
                  pushedAt
                  stargazerCount
                  url
                  name
                  languages {
                    nodes {
                      color
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return result.allGithubData.nodes[0].data;
};
