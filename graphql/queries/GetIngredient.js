const { GraphQLString } = require('graphql');

const IngredientModel = require('../../mongoose/models/ingredient');
const ingredient = require('../types/ingredient');

const GetDataType = {
  type: ingredient,
  args: { _id: { type: GraphQLString } },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    const datTypes = await IngredientModel.findById(args._id);
    if (!datTypes) {
      throw new Error('error while fetching data');
    }
    return datTypes;
  },
};
module.exports = GetDataType;
