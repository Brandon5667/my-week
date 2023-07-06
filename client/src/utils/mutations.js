import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser( $email: String!, $password: String! ){
        addUser( email: $email, password: $password ){
            token
            user {
              _id
              username
            }
        }
    }
`
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String! ) {
        login( email: $email, password: $password ) {
            token
            user {
            _id
            username
            }
        }
    }
`

export const ADD_CHORE = gql`
    mutation addchore( $choreName: ID!, $time: String!, $score: Int! ) {
        addChore( choreName: $choreName, time: $time, score: $score ) {
            _id
            choreName
            time
        }
    }
`

export const UPDATE_CHORE = gql`
    mutation updateChore( ch) {
        updateChore(choreId: $choreId, choreName: $choreName, time: $time) {
            _id
            choreName
            time
          }
        }
    }
`