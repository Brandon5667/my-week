const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Chore {
    _id: ID
    choreName: String!
    time: Int!
    score: Int!
    completed: Boolean!
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    score: Int!
    chores: [Chore]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    chores: [Chore]
    users: [User]
    user(_id: ID): User
    chore(choreId: ID!): Chore
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addChore(choreName: String!, time: String!, score: Int!): Chore
    updateChore(choreId: ID!, choreName: String!, time: Int!): Chore
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
