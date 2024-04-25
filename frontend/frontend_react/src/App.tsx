import React from 'react';
import Header from './components/layout/header/header';
import Router from './components/Router';
import Footer from './components/layout/footer/footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Router />
            <Footer />
        </div>
    );
}

export default App;
