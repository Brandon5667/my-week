import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Profile from "./pages/profile";
import Login from "./pages/Login";
import Chorepage from "./pages/Chorepage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Survey from "./pages/Survey";
import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Navbar />
          <div className="container ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/chorepage" element={<Chorepage />} />
          </Routes>
        </div>
      </Router>
      {/* <Footer /> */}
    </ApolloProvider>
  );
}

export default App;
