const { gql } = require('apollo-server-express');

const typeDefs = gql`
















type Auth {
    token: ID!
    user: User
  }















  `