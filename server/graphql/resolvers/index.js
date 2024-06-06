const { mergeResolvers } = require('@graphql-tools/merge');
const jobResolver = require('./jobResolver');
const userResolver = require('./userResolver');
const reviewResolver = require('./reviewResolver')

const resolvers = mergeResolvers([
  jobResolver,
  userResolver,
  reviewResolver
]);

module.exports = resolvers;
