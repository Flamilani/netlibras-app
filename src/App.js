import React from 'react';
import Routes from './routes/index';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <div>  
          <Header />  
            <Routes />
          <Footer />
        </div> 
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
