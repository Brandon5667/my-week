import { gql } from "@apollo/client";

// export const GET_CHORE = gql`
//     query chore($choreId: ID!){
//         chore(choreId: $choreId) {

//         }
//       }
//     }
// `;

export const GET_ME = gql`
  query Me {
    me {
      chores {
        _id
        choreName
        time
        day
        score
        completed
      }
    }
  }
`;
