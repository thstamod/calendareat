const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');
const { GraphQLJSONObject } = require('graphql-type-json');
const userModel = require('../../mongoose/models/user');
const userType = require('./user');

const { timestampToISO } = require('../../utils');

const calenderType = new GraphQLObjectType({
  name: 'CalendarType',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    calendar: {
      type: GraphQLJSONObject,
    },
    number_of_meals: {
      type: GraphQLInt,
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

module.exports = calenderType;
