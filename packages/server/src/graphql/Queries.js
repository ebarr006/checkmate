const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLID
} = require('graphql');
const { User, Game } = require('./Types/index.js');
const UserService = require('../services/UserService.js');
const GameService = require('../services/GameService.js');

const Queries = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getUser: {
      name: 'getUser',
      type: User,
      args: {
        userId: { type: GraphQLID },
        username: { type: GraphQLString }
      },
      resolve: async (parent, args) => {
        console.log('args: ', args);
        return await UserService.getUser(args.userId);
      }
    },
    getUsers: {
      name: 'getUsers',
      type: new GraphQLList(User),
      args: {
        userId: { type: GraphQLID },
      },
      resolve: async (parent, args) => {
        return await UserService.getAllUsers();
      }
    },
    getGame: {
      name: 'getGame',
      type: Game,
      args: {
        gameId: { type: GraphQLID }
      },
      resolve: async (parent, args) => {
        return await GameService.getGame(args.gameId)
      }
    },
    getGames: {
      name: 'getGames',
      type: new GraphQLList(Game),
      args: {
        gameId: { type: GraphQLID }
      },
      resolve: async (parent, args) => {
        return await GameService.getAllGames();
      }
    }
  }
});

module.exports = Queries;