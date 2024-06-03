const { mergeResolvers } = require('@graphql-tools/merge');
const jobResolver = require('./jobResolver');
const userResolver = require('./userResolver');

const resolvers = mergeResolvers([jobResolver, userResolver]);

module.exports = resolvers;
