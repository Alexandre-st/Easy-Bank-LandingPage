import React from 'react';
import Articles from './components/Articles';
import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/index.scss';

const App = () => {
  return ( 
   <>
   <Header />
   <Hero />
   <Description />
   <Articles />
   <Footer />
   </>
  );
};
 
export default App;