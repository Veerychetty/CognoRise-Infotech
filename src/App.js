import React from 'react';
import {Helmet} from 'react-helmet'
import './App.css';
import Header from './Header';
import Content from './Content';




function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet='utf-8'/>
        <title>MatrixCAL</title>
      </Helmet>
      <Header/>
      <Content/>
      
      
      

    </div>
  );
}

export default App;
