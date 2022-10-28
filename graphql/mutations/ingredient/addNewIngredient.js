const IngredientTypeModel = require('../../../mongoose/models/ingredient');
const ingredientType = require('../../types/ingredient');
const inputIngredient = require('../../inputs/inputIngredient');

const addNewIngredient = {
  type: ingredientType,
  args: {
    ...inputIngredient,
  },
  resolve: async (parent, args, req) => {
    // if (!req.isAuth) {
    //   throw new Error('unAuthorized');
    // }
    const model = args;
    model.creator = req.userId;
    const uModel = new IngredientTypeModel(model);
    const newDocType = await uModel.save();
    if (!newDocType) {
      throw new Error('error');
    }
    return newDocType;
  },
};

module.exports = addNewIngredient;
