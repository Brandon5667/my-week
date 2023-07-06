import { gql } from '@apollo/client';

export const GET_CHORES = gql`
    query chores {
        chores{
            _id
            choreName
            completed
            score
            time
        } 
    }
`

export const GET_CHORE = gql`
    query chore($choreId: ID!){
        chore(choreId: $choreId) {
    
        }
      }
    }
`
export const GET_ME = gql`
    query me {
        me{
            id
            email
            password
            score
            username
            chores {
      
            }
    }
`
