const {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');
const { GraphQLJSONObject } = require('graphql-type-json');

const InputCalendarType = new GraphQLInputObjectType({
  name: 'InputCalendarType',
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    calendar: {
      type: GraphQLJSONObject,
    },
    number_of_meals: {
      type: GraphQLInt,
    },
  },
});

module.exports = InputCalendarType;
