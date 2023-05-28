const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require('graphql');

const userModel = require('../../mongoose/models/user');
const userType = require('./user');
const { timestampToISO } = require('../../utils');

const recipeType = new GraphQLObjectType({
  name: 'Recipe',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
    labels: {
      type: GraphQLList(GraphQLString),
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
  },
});

module.exports = recipeType;
