const { GraphQLNonNull, GraphQLString } = require('graphql');
const DocumentTypeModel = require('../../../mongoose/models/recipe');
const ingredientType = require('../../types/ingredient');
const inputIngredient = require('../../inputs/inputIngredient');

const updateIngredient = {
  type: ingredientType,
  args: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    ingredientInput: {
      type: inputIngredient,
    },
  },
  resolve: async (parent, args, req) => {
    console.log(
      '🚀 ~ file: updateIngredient.js ~ line 17 ~ resolve: ~ args',
      args
    );
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    const model = {
      name: args.ingredientInput.name,
      nutrition_score: args.ingredientInput.nutrition_score,
      labels: args.ingredientInput.labels,
      image: args.ingredientInput.image,
    };
    console.log(
      '🚀 ~ file: updateIngredient.js ~ line 30 ~ resolve: ~ model',
      model
    );

    const updated = await DocumentTypeModel.findByIdAndUpdate(
      { _id: args._id },
      model,
      { new: true }
    );

    if (!updated) {
      throw new Error('Error');
    }

    return updated;
  },
};

module.exports = updateIngredient;
