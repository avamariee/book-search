const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Book {
    id_: ID
    authors: [String]
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
    bookCount: int
    savedBooks: [Book]
}

type Query {
    me: User

}

input bookInput {

    bookId: String
    description: String
    authors: [String]
    title: String
    image: String
    link: String
  }


type Auth {
    token: ID!
    user: User
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeBook:(bookId: String!): User
    saveBook(input: bookInput): User

}













  `

  module.exports = typeDefs;