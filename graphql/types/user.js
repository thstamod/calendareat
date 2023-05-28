const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

const { timestampToISO } = require('../../utils');

const user = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    // password: {
    //   type: GraphQLString,
    // },
    authorization: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    surname: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (parent) => timestampToISO(parent.createdAt),
    },
    locked: {
      type: GraphQLBoolean,
    },
  },
});

module.exports = user;
