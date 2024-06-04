const { mergeTypeDefs } = require('@graphql-tools/merge');
const jobSchema = require('./jobSchema');
const userSchema = require('./userSchema');
const applicationSchema = require('./applicationSchema')
const types = require('./types');

const typeDefs = mergeTypeDefs([
  jobSchema,
  userSchema,
  applicationSchema,
  types,
  // Add more schemas here if needed
]);

module.exports = typeDefs;