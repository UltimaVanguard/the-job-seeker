const { mergeResolvers } = require('@graphql-tools/merge');
const jobResolver = require('./jobResolver');
const userResolver = require('./userResolver');

const resolvers = mergeResolvers([
  jobResolver,
  userResolver,
  // Add more resolvers here if needed
]);

module.exports = resolvers;
