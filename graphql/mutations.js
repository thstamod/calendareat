const { GraphQLObjectType } = require('graphql');
const {
  addNewIngredient,
  deleteIngredient,
  updateIngredient,
} = require('./mutations/ingredient');
const addNewUser = require('./mutations/user/addNewUser');

const mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addNewUser,
    addNewIngredient,
    deleteIngredient,
    updateIngredient,
  },
});

module.exports = mutations;
