import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";

const expiration = "2h";

export const AuthenticationError = new GraphQLError(
  "Could not authenticate user.",
  {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }
);

export const signToken = ({ email, username, _id }) => {
  const payload = { email, username, _id };
  return jwt.sign({ data: payload }, process.env.AUTH_JWT_SECRET, { expiresIn: expiration });
};
