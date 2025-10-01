import { gql } from 'graphql-request';

export const PROJECTS_QUERY = gql`
  query Projects(order: order_DESC) {
    projectCollection {
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
