import {AuthenticationError, signToken} from './utils/auth.js'
export const typeDefs =  `#graphql 
type Query {
    example: String
}
type Mutation{
    example: String
}
`
export const resolvers = {
    Query: {}, 
    Mutation: {}
}