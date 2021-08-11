const {
  GraphQLObjectType, 
  GraphQLString,
  GraphQLInt
} = require('graphql');

const Game = new GraphQLObjectType({
  name: 'Game',
  fields: {
    gameId: { type: GraphQLString },
    winnerId: { type: GraphQLString },
    loserId: { type: GraphQLString },
    numMoves: { type: GraphQLInt },
    chatLogId: { type: GraphQLString }
  }
});

module.exports = Game;