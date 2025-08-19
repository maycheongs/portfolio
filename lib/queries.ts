import { gql } from 'graphql-request';

export const PROJECTS_QUERY = gql`
  query Projects {
    projectCollection {
      items {
        title
        description
        stack
        image {
          url
        }
        linksCollection {
          items {
            label
            url
          }
        }
      }
    }
  }
`;
