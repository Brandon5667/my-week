import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
//import { setContext }from '@apollo/client/link/context';
import Chorepage from './pages/Chorepage';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
  <>
    <h1>test 2</h1>
    <Chorepage/>
  </>
);
}

export default App;
