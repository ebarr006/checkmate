const { ApolloServer } = require('apollo-server');

const schema = require('./graphql/Queries/index.js');

const apolloServer = new ApolloServer({ schema });

apolloServer.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
