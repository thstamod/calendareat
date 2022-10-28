const { GraphQLObjectType } = require('graphql');
const queries = require('./queries/login');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queries,
  },
});

module.exports = query;
