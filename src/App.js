// App.js
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Contact from './contact';
import { Helmet } from 'react-helmet';



//import Contact from './contact';






const App = () => {
    return (
        
       
        <div className="app">
            <Helmet>
            <meta charSet="utf-8" />
            
                <title>My Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />

            </Helmet>
            
            
            <Header />
            
          
            <Content />
            <Contact/>
            
           
            <Footer />
            
           
            
        </div>
    );
};

export default App;
