import { keystoneContext } from "@lib/keystoneContext";
import { createYoga } from "graphql-yoga";

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

// Use Keystone API to create GraphQL handler
export default createYoga({
  schema: keystoneContext.graphql.schema,
  context: ({ req, res }) => keystoneContext.withRequest(req, res),
  graphqlEndpoint: "/api/graphql",
  graphiql: {
    defaultQuery: /* GraphQL */ `
      query authenticatedItem {
        authenticatedItem {
          ... on User {
            id
          }
        }
      }
    `,
  },
});

// eslint-disable-next-line import/no-unresolved
// export { default, config } from '.keystone/next/graphql-api';
