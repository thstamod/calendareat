const {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} = require('graphql');
const { GraphQLJSONObject } = require('graphql-type-json');

const InputIngredientType = new GraphQLInputObjectType({
  name: 'InputIngredientType',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    nutrition_score: {
      type: GraphQLJSONObject,
    },
    labels: {
      type: [GraphQLString],
    },
    image: {
      type: GraphQLString,
    },
  },
});

module.exports = InputIngredientType;
