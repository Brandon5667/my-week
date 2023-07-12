const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Chore {
    _id: ID
    choreName: String!
    time: Int!
    day: Int!
    score: Int!
    completed: Boolean!
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    score: Int
    chores: [Chore]
  }

  type Survey {
    _id: ID
    trash: Int!
    dishes: Int!
    bathroom: Int!
    walk: Int!
    floor: Int!
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
    addChore(choreName: String!, time: Int!, score: Int!, day: Int!): Chore
    updateChore(
      choreId: ID!
      choreName: String!
      time: Int!
      score: Int!
      day: Int!
    ): Chore
    deleteAccount: User
    login(email: String!, password: String!): Auth
    addSurvey(
      trash: Int!
      dishes: Int!
      bathroom: Int!
      walk: Int!
      floor: Int!
    ): Survey
  }
`;

module.exports = typeDefs;
