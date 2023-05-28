const { GraphQLString } = require('graphql');

const IngredientModel = require('../../../mongoose/models/ingredient');
const ingredientType = require('../../types/ingredient');

const deleteDocumentType = {
  type: ingredientType,
  args: {
    _id: {
      type: GraphQLString,
    },
  },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    const deleted = await IngredientModel.findByIdAndDelete({
      _id: args._id,
    });
    if (!deleted) {
      throw new Error('Error');
    }
    return deleted;
  },
};

module.exports = deleteDocumentType;
