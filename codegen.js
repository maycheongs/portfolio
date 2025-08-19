/// <reference types="node" />
import 'dotenv/config';
import { generate } from '@graphql-codegen/cli';
async function runCodegen() {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    try {
        await generate({
            schema: `https://graphql.contentful.com/content/v1/spaces/${spaceId}?access_token=${accessToken}`,
            documents: 'lib/**/*.ts',
            generates: {
                'src/generated/graphql.ts': {
                    plugins: ['typescript', 'typescript-operations'],
                },
            },
            config: {
                contentful: {
                    spaceId,
                    accessToken,
                },
            },
        }, true);
        console.log('Code generation completed successfully.');
    }
    catch (error) {
        console.error('Error during code generation:', error);
    }
}
runCodegen();
// This script is used to generate TypeScript types from a GraphQL schema using GraphQL Codegen.
// It fetches the schema from Contentful using the space ID and access token defined in the
// environment variables. The generated types will be saved in 'src/generated/graphql.ts'.
