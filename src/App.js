import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Header/>
    </ChakraProvider>
  );
}

export default App;
