import './App.css'
import { useState } from 'react';

// imports authentication utility
import Auth from './utils/auth';

// imports what we need to connect to the graphql server
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

import Login from './pages/Login';

// imports Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

// imports header and footer
import Header from './components/Header';
import Footer from './components/Footer';

// creates our graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// custom middleware to attach JWT token to every request for authorization
const authLink = setContext((_, { headers }) => {
  // gets token from local storage
  const token = localStorage.getItem('id_token');

  // returns the headers so httplink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// sets up our client to execute authlink middleware prior to making request to graphql
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [loginState, setLoginState] = useState(true);
  
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Header loginState={loginState} setLoginState={setLoginState}/>
        {/* if user is not logged in, routes to login page */}
        {Auth.loggedIn() ? (
          <Outlet />
        ) : (
          <Login loginState={loginState} setLoginState={setLoginState}/>
        )}
        <Footer />
      </ChakraProvider>
    </ApolloProvider>  
  )
};

export default App;