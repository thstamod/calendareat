const { GraphQLObjectType } = require('graphql');
const ingredientMutations = require('./mutations/ingredient');
const addNewUser = require('./mutations/user/addNewUser');

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addNewUser,
    // ...ingredientMutations,
  },
});

module.exports = Mutations;
