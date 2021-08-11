const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');
const User = require('../Types/User.js');
const UserService = require('../../services/userService.js');


const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getUsers: {
      type: new GraphQLList(User),
      args: {
        userId: { type: GraphQLString },
        username: { type: GraphQLString }
      },
      resolve: async (args) => {
        const users = await UserService.getAllUsers();
        return users;
      }
    },
    getUser: {
      type: User,
      args: {
        userId: { type: GraphQLString },
        username: { type: GraphQLString }
      },
      resolve: async (parent, args) => {
        console.log('args: ', args);
        const user = await UserService.getUser(args.userId);
        return user;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query
});