const { mergeTypeDefs } = require('@graphql-tools/merge');
const jobSchema = require('./jobSchema');
const userSchema = require('./userSchema');
const types = require('./types');

const typeDefs = mergeTypeDefs([
  jobSchema,
  userSchema,
  types,
  // Add more schemas here if needed
]);

module.exports = typeDefs;
