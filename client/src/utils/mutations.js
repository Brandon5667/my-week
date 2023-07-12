import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHORE = gql`
  mutation AddChore(
    $choreName: String!
    $time: Int!
    $score: Int!
    $day: Int!
  ) {
    addChore(choreName: $choreName, time: $time, score: $score, day: $day) {
      _id
    }
  }
`;

export const ADD_SURVEY = gql`
  mutation Mutation(
    $trash: Int!
    $bathroom: Int!
    $walk: Int!
    $floor: Int!
    $dishes: Int!
  ) {
    addSurvey(
      trash: $trash
      bathroom: $bathroom
      walk: $walk
      floor: $floor
      dishes: $dishes
    ) {
      bathroom
      dishes
      floor
      trash
      walk
    }
  }
`;

export const COMPLETE_CHORE = gql`
  mutation CompleteChore($choreId: ID!) {
    completeChore(choreId: $choreId) {
      score
    }
  }
`;
// FIX:
// export const UPDATE_CHORE = gql`
//     mutation updateChore( ch) {
//         updateChore(choreId: $choreId, choreName: $choreName, time: $time) {
//             _id
//             choreName
//             time
//           }
//         }
//     }
// `;
