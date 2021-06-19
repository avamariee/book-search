const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Book {
    id_: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
}



type Auth {
    token: ID!
    user: User
  }















  `

  module.exports = typeDefs;