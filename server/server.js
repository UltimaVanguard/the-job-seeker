import 'dotenv/config.js'

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { resolvers, typeDefs } from "./schema.js";

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema

await server.start();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  "/graphql",
  expressMiddleware(server, {
    context: ({ req }) => {
      let token = req.body.token || req.query.token || req.headers.authorization;
    
      if (req.headers.authorization) {
        token = token.split(" ").pop().trim();
      }
    
      if (!token) {
        return req;
      }
    
      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
      } catch {
        console.log("Invalid token");
      }
    
      return req;
    },
  })
);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(import.meta.dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "../client/dist/index.html"));
  });
}

await mongoose.connect(process.env.MONGODB_URI);

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
  console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
});

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
