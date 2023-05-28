const { GraphQLSchema } = require('graphql');
const query = require('./query');
const mutations = require('./mutations');

const schema = new GraphQLSchema({
  query,
  mutation: mutations,
});

module.exports = schema;
