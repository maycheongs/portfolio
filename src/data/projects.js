import { GraphQLClient } from 'graphql-request';
import { PROJECTS_QUERY } from '../../lib/queries';
const client = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${import.meta.env.CONTENTFUL_SPACE_ID}`, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
});
export async function getProjects() {
    const data = await client.request(PROJECTS_QUERY);
    return data.projectCollection?.items ?? [];
}
