const {
  GraphQLObjectType, 
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');
const Game = require('./Game.js');

const User = new GraphQLObjectType({
  name: 'User',
  description: 'A User in the App',
  fields: {
    userId: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    winCount: {
      type: GraphQLInt,
    },
    lossCount: {
      type: GraphQLInt,
    },
    gamesWon: {
      type: new GraphQLList(Game)
    },
    gamesLost: {
      type: new GraphQLList(Game)
    }
  },
});

module.exports = User;