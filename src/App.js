import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
/* import { BrowserRouter as Router, Routes, Routes } from 'react-router-dom'; */
import Navbar from './components/navbar';
import Home from './components/home';
import Integration from './components/integration';
import Cookie from './components/cookie';
import AffiliateMarketingSoftware from './components/afs';
import Hero from './components/hero';
import KnowUs from './components/knowus';
import EasySteps from './components/easysteps';
import Inquiries from './components/inquiries';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
    <ChakraProvider>
        <Navbar />
        <Home />
        <Integration />
        <Cookie />
        <AffiliateMarketingSoftware />
        <Hero />
        <KnowUs />
        <EasySteps />
        <Inquiries />
        <Footer />
    </ChakraProvider>
    </div>
  )
}

export default App;
