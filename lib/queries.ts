import { gql } from 'graphql-request';

export const PROJECTS_QUERY = gql`
  query Projects {
    projectCollection(order: order_DESC) {
      items {
        title
        description
        stack
        order
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
