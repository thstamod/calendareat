const {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');
const { GraphQLJSONObject } = require('graphql-type-json');

const InputIngredient = new GraphQLInputObjectType({
  name: 'InputIngredient',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    nutrition_score: {
      type: GraphQLJSONObject,
    },
    labels: {
      type: new GraphQLList(GraphQLString),
    },
    image: {
      type: GraphQLString,
    },
  },
});

module.exports = InputIngredient;
