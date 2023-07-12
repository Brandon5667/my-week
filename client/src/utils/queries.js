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
      email
      username
      chores {
        _id
        choreName
        time
        day
        score
        completed
      }
      survey {
        trash
        dishes
        bathroom
        walk
        floor
      }
    }
  }
`;
