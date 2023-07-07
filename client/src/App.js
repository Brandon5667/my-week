import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext }from '@apollo/client/link/context';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Chorepage from './pages/Chorepage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';


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
  // <ApolloProvider client={client}>
  <>
    <Router>
      {/* <Navbar> */}
        <div className='container'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<Profile />}/>
          </Routes>
        </div>
      {/* </Navbar> */}
    </Router>
  </>
  // </ApolloProvider>
);
}

export default App;
