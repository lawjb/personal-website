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
            }
          }
        }
      }
    }
  `);
  return result.allGithubData.nodes[0].data;
};
