const { GraphQLString } = require('graphql');
const IngredientModel = require('../../mongoose/models/ingredient');
const ingredient = require('../types/ingredient');

const GetIngredient = {
  type: ingredient,

  args: { _id: { type: GraphQLString } },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    const ingredientData = await IngredientModel.findById(args._id);
    if (!ingredientData) {
      throw new Error('error while fetching data');
    }
    return ingredientData;
  },
};
module.exports = GetIngredient;
