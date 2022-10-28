const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');
const { GraphQLJSONObject } = require('graphql-type-json');
const userModel = require('../../mongoose/models/user');
const userType = require('./user');
const { timestampToISO } = require('../../utils');

const ingredientType = new GraphQLObjectType({
  name: 'IngredientType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
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
    creator: {
      type: userType,
      resolve: async (parent) => {
        const res = await userModel.findById(parent.creator);
        return res;
      },
    },
    createdAt: {
      type: GraphQLString,
      resolve: (parent) => timestampToISO(parent.createdAt),
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (parent) => timestampToISO(parent.updatedAt),
    },
  }),
});

module.exports = ingredientType;
