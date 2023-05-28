const { GraphQLString } = require('graphql');

const ingredientModel = require('../../mongoose/models/ingredient');
const ingredient = require('../types/ingredient');

const GetDocumentType = {
  type: ingredient,
  args: { _id: { type: GraphQLString } },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    const docTypes = await ingredientModel.findById(args._id);
    if (!docTypes) {
      throw new Error('error while fetching data');
    }
    return docTypes;
  },
};

module.exports = GetDocumentType;
