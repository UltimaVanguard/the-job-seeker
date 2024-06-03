const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const config = require('config');
const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');

const app = express();
const PORT = process.env.PORT || 5000;

// DB Config
const db = config.get('mongoURI');

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Apollo Server Setup
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

// Health Check Route
app.use('/api/health', require('./routes/api/healthCheck'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint at http://localhost:${PORT}${server.graphqlPath}`);
});
