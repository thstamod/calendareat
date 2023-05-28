const { GraphQLObjectType } = require('graphql');
const { getIngredient, login } = require('./queries');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getIngredient,
    login,
  },
});

module.exports = query;
