const { mergeTypeDefs } = require('@graphql-tools/merge');
const jobSchema = require('./Job');
const userSchema = require('./User');
const applicationSchema = require('./application')


const typeDefs = mergeTypeDefs([
  jobSchema,
  userSchema,
  applicationSchema,
  
]);

module.exports = typeDefs;