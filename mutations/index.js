import { graphQLSchemaExtension } from "@keystone-6/core";
import redirectToInit from "./redirectToInit";

const graphql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Query {
      redirectToInit: Boolean
    }
  `,
  resolvers: {
    Query: { redirectToInit },
  },
});
