const IngredientTypeModel = require('../../../mongoose/models/ingredient');
const ingredientType = require('../../types/ingredient');
const inputIngredient = require('../../inputs/inputIngredient');

const addNewIngredient = {
  type: ingredientType,
  args: { ingredientInput: { type: inputIngredient } },

  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    const model = {
      name: args.ingredientInput.name,
      nutrition_score: args.ingredientInput.nutrition_score,
      labels: args.ingredientInput.labels,
      image: args.ingredientInput.image,
    };

    model.creator = req.userId;
    const uModel = new IngredientTypeModel(model);
    const newIngredient = await uModel.save();
    if (!newIngredient) {
      throw new Error('error');
    }
    return newIngredient;
  },
};

module.exports = addNewIngredient;
