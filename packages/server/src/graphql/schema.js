const { GraphQLSchema } = require('graphql');
const Queries = require('./Queries.js');
const Mutations = require('./Mutations.js');

module.exports = new GraphQLSchema({
  query: Queries,
  // mutation: Mutations
});