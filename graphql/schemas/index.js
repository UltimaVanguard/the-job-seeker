const { gql } = require('apollo-server-express');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const jobSchema = require('./jobSchema');
const userSchema = require('./userSchema');

const typeDefs = mergeTypeDefs([jobSchema, userSchema]);

module.exports = typeDefs;
