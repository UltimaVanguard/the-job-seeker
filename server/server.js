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
