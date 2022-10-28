const {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
} = require('graphql');

const InputRecipeType = new GraphQLInputObjectType({
  name: 'InputRecipeType',
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    ingredients: {
      type: [GraphQLID],
    },
    labels: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
  },
});

module.exports = InputRecipeType;
